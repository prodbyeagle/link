'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { hexToRgba } from '@/lib/color';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import type { Profile } from '@/types';

interface UserProfileProps {
	userData: Profile;
}

export default function UserProfile({ userData }: UserProfileProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [borderColor, setBorderColor] = useState(
		userData.theme.light.accent ? hexToRgba(userData.theme.light.accent, 0.4) : 'rgba(255, 255, 255, 0.5)',
	);

	const initials = userData.displayName
		.split(' ')
		.map((name) => name[0])
		.join('')
		.toUpperCase();

	useEffect(() => {
		setMounted(true);

		if (!userData.theme.respectSystemTheme) {
			return;
		}

		if (theme === 'dark' && userData.theme.dark.accent) {
			setBorderColor(hexToRgba(userData.theme.dark.accent, 0.4));
		} else if (userData.theme.light.accent) {
			setBorderColor(hexToRgba(userData.theme.light.accent, 0.4));
		}
	}, [theme, userData.theme]);

	if (!mounted) {
		return (
			<div className="flex flex-col items-center mb-8 animate-pulse">
				<div className="w-36 h-36 rounded-lg bg-muted mb-4"></div>
				<div className="h-6 bg-muted rounded w-40 mb-2"></div>
				<div className="h-4 bg-muted rounded w-64"></div>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center mb-8 animate-in fade-in-50 duration-700 slide-in-from-top-4">
			<Avatar
				style={{ borderColor }}
				className="w-36 h-36 mb-4 rounded-lg border shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
				<AvatarImage src={userData.avatar} alt={userData.displayName} />
				<AvatarFallback className="bg-muted text-foreground">{initials}</AvatarFallback>
			</Avatar>
			<h1 className="text-2xl font-bold mb-2 animate-in fade-in-0 duration-500 slide-in-from-top-2">
				{userData.displayName}
			</h1>
			<p className="text-center max-w-md animate-in fade-in-0 duration-500 slide-in-from-top-1">{userData.bio}</p>
		</div>
	);
}
