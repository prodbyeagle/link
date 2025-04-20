'use client';

import { Icon } from '@phosphor-icons/react';
import {
	Browser,
	GithubLogo,
	InstagramLogo,
	ThreadsLogo,
	TiktokLogo,
	TwitchLogo,
	XLogo,
} from '@phosphor-icons/react/dist/ssr';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { hexToRgba } from '@/lib/utils';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import type { SocialLink, SocialPlatform } from '@/types';

interface LinkListProps {
	links: SocialLink[];
	backgroundColor?: string;
	textColor?: string;
	secondaryColor?: string;
	accentColor?: string;
	darkBackgroundColor?: string;
	darkTextColor?: string;
	darkSecondaryColor?: string;
	darkAccentColor?: string;
}

const iconMap: Record<SocialPlatform, Icon> = {
	Instagram: InstagramLogo,
	Github: GithubLogo,
	Threads: ThreadsLogo,
	Website: Browser,
	Twitter: XLogo,
	Twitch: TwitchLogo,
	TikTok: TiktokLogo,
	YouTube: Browser,
	LinkedIn: Browser,
};

export default function LinkList({
	links,
	accentColor,
	secondaryColor,
	textColor,
	darkSecondaryColor,
	darkTextColor,
	darkAccentColor,
}: LinkListProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [currentColors, setCurrentColors] = useState({
		borderColor: accentColor ? hexToRgba(accentColor, 0.2) : 'rgba(255, 255, 255, 0.5)',
		secondaryColor: secondaryColor || '#222222',
		textColor: textColor || '#ffffff',
	});

	useEffect(() => {
		setMounted(true);

		if (theme === 'dark' && darkAccentColor && darkSecondaryColor && darkTextColor) {
			setCurrentColors({
				borderColor: hexToRgba(darkAccentColor, 0.2),
				secondaryColor: darkSecondaryColor,
				textColor: darkTextColor,
			});
		} else {
			setCurrentColors({
				borderColor: accentColor ? hexToRgba(accentColor, 0.2) : 'rgba(255, 255, 255, 0.5)',
				secondaryColor: secondaryColor || '#222222',
				textColor: textColor || '#ffffff',
			});
		}
	}, [theme, accentColor, secondaryColor, textColor, darkAccentColor, darkSecondaryColor, darkTextColor]);

	if (!mounted) {
		return (
			<div className="space-y-4 w-full">
				{[1, 2, 3].map((i) => (
					<div key={i} className="w-full h-16 bg-muted rounded-lg animate-pulse"></div>
				))}
			</div>
		);
	}

	return (
		<div className="space-y-4 w-full">
			{links.map((link, index) => {
				const IconComponent = iconMap[link.icon as SocialPlatform] || null;

				return (
					<a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="block w-full">
						<Card
							className="w-full hover:scale-105 transition-transform duration-200 ease-in-out"
							style={{
								borderColor: currentColors.borderColor,
								backgroundColor: currentColors.secondaryColor,
							}}>
							<CardHeader>
								<div className="flex items-center space-x-2">
									{IconComponent && (
										<div className="flex items-center justify-center w-6 h-6">
											<IconComponent
												style={{
													color: currentColors.textColor,
												}}
												size={20}
												weight="regular"
											/>
										</div>
									)}
									<CardTitle
										style={{
											color: currentColors.textColor,
										}}>
										{link.title}
									</CardTitle>
								</div>
								<CardDescription
									style={{
										color: hexToRgba(currentColors.textColor || '#ffffff', 0.7),
									}}>
									{link.description}
								</CardDescription>
							</CardHeader>
						</Card>
					</a>
				);
			})}
		</div>
	);
}
