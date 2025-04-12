import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { UserData } from '@/types/user';

export async function GET(
	request: Request,
	{ params }: { params: { username: string } }
) {
	try {
		const { username } = params;
		const filePath = path.join(
			process.cwd(),
			'public',
			'username',
			`${username}.json`
		);
		const fileContents = await fs.readFile(filePath, 'utf8');
		const userData = JSON.parse(fileContents) as UserData;

		return NextResponse.json(userData);
	} catch (error) {
		console.error(`Error fetching user data:`, error);
		return NextResponse.json({ error: 'User not found' }, { status: 404 });
	}
}
