import { readdir } from 'fs/promises';
import path from 'path';

import { cache } from 'react';

import { notFound } from 'next/navigation';

import type { Profile } from '@/types';

const userProfileCache = new Map<string, Profile>();

export const getUserData = cache(async (username: string): Promise<Profile> => {
	if (userProfileCache.has(username)) {
		return userProfileCache.get(username)!;
	}

	try {
		const { userProfile } = await import(`../../public/username/${username}`);
		const profile = userProfile as Profile;

		userProfileCache.set(username, profile);

		return profile;
	} catch (error) {
		console.error(`Error fetching user data for ${username}:`, error);
		notFound();
	}
});

export const getUsernames = cache(async (): Promise<string[]> => {
	try {
		if (typeof window !== 'undefined') {
			console.warn('getUsernames() was called on the client side but it only works server-side');
			return [];
		}

		const usernamePath = path.join(process.cwd(), 'public/username');
		const files = await readdir(usernamePath);
		const usernames = files.filter((file) => file.endsWith('.ts')).map((file) => file.replace('.ts', ''));

		return usernames;
	} catch (error) {
		console.error('Error fetching usernames:', error);
		return [];
	}
});

export async function usernameExists(username: string): Promise<boolean> {
	try {
		const allUsernames = await getUsernames();
		return allUsernames.includes(username);
	} catch {
		return false;
	}
}
