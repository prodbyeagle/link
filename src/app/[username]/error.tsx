'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

export default function ProfileError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error('Profile error:', error);
	}, [error]);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 bg-background text-foreground">
			<div className="w-full max-w-md flex flex-col items-center space-y-6 text-center">
				<div className="text-4xl font-bold text-destructive">⚠️</div>
				<h1 className="text-2xl font-bold">Something went wrong</h1>
				<p className="text-muted-foreground">We couldn&apos;t load this profile. Please try again later.</p>
				<div className="flex gap-4 mt-4">
					<Button onClick={reset} variant="outline">
						Try again
					</Button>
					<Button onClick={() => (window.location.href = '/')} variant="secondary">
						Go home
					</Button>
				</div>
			</div>
		</div>
	);
}
