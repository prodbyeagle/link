import { UserData } from '@/types/user';

export async function getUserData(username: string): Promise<UserData | null> {
	try {
		const origin =
			typeof window === 'undefined'
				? process.env.VERCEL_URL
					? `https://${process.env.VERCEL_URL}`
					: 'http://localhost:3000'
				: window.location.origin;

		const response = await fetch(`${origin}/api/users/${username}`, {
			method: 'GET',
			cache: 'no-store',
		});

		if (!response.ok) {
			throw new Error(
				`Failed to fetch user data: ${response.statusText}`
			);
		}

		return await response.json();
	} catch (error) {
		console.error(`Error fetching user data for ${username}:`, error);
		return null;
	}
}

export async function getUsernames(): Promise<string[]> {
	try {
		const origin =
			typeof window === 'undefined'
				? process.env.VERCEL_URL
					? `https://${process.env.VERCEL_URL}`
					: 'http://localhost:3000'
				: window.location.origin;

		const response = await fetch(`${origin}/api/users`, {
			method: 'GET',
			cache: 'no-store',
		});

		if (!response.ok) {
			throw new Error(
				`Failed to fetch usernames: ${response.statusText}`
			);
		}

		const data = await response.json();
		return data.usernames;
	} catch (error) {
		console.error('Error fetching usernames:', error);
		return [];
	}
}
