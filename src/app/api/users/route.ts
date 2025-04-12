import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
	try {
		const usersDir = path.join(process.cwd(), 'public', 'username');
		const files = await fs.readdir(usersDir);

		const usernames = files
			.filter((file) => file.endsWith('.json'))
			.map((file) => file.replace(/\.json$/, ''));

		return NextResponse.json({ usernames });
	} catch (error) {
		console.error('Error fetching usernames:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch usernames', usernames: [] },
			{ status: 500 }
		);
	}
}
