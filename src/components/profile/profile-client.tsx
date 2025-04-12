'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { hexToRgba } from '@/lib/utils';

import type { Profile } from '@/types';

import { ProfileAvatar } from './profile-avatar';

interface UserProfileClientProps {
	userData: Profile;
	initialBorderColor: string;
	userInitials: string;
}

export function UserProfileClient({ userData, initialBorderColor, userInitials }: UserProfileClientProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [borderColor, setBorderColor] = useState(initialBorderColor);

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
			<ProfileAvatar userData={userData} borderColor={borderColor} userInitials={userInitials} />
			<h1 className="text-2xl font-bold mb-2 animate-in fade-in-0 duration-500 slide-in-from-top-2">
				{userData.displayName}
			</h1>
			<p className="text-center max-w-md animate-in fade-in-0 duration-500 slide-in-from-top-1">{userData.bio}</p>
		</div>
	);
}
