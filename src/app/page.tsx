import Link from 'next/link';

import { getUsernames } from '@/lib/api/user-service';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export default async function HomePage() {
	const usernames = await getUsernames();

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground">
			<div className="absolute top-4 right-4">
				<ThemeToggle />
			</div>

			<div className="max-w-2xl w-full text-center">
				<h1 className="text-5xl font-bold mb-12">EagleLink</h1>

				{usernames.length > 0 && (
					<div className="mb-8">
						<h2 className="text-xl font-semibold mb-4">All Users</h2>
						<div className="flex flex-wrap justify-center gap-2">
							{usernames.map((username) => (
								<Button key={username} variant="outline" asChild>
									<Link href={`/${username}`}>@{username}</Link>
								</Button>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
