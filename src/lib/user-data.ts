import { readdir } from 'fs/promises';
import path from 'path';

import { Profile } from '@/types';

export async function getUserData(username: string): Promise<Profile | null> {
	try {
		const { userProfile } = await import(`../../public/username/${username}`);
		return userProfile as Profile;
	} catch (error) {
		console.error(`Error fetching user data for ${username}:`, error);
		return null;
	}
}

export async function getUsernames(): Promise<string[]> {
	try {
		if (typeof window !== 'undefined') {
			console.warn('getUsernames() was called on the client side but it only works server-side');
			return [];
		}

		const files = await readdir(path.join(process.cwd(), 'public/username'));
		const usernames = files.filter((file) => file.endsWith('.ts')).map((file) => file.replace('.ts', ''));

		return usernames;
	} catch (error) {
		console.error('Error fetching usernames:', error);
		return [];
	}
}
