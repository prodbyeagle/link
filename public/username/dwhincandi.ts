import type { Profile } from '@/types';

export const userProfile: Profile = {
	username: 'dwhincandi',
	displayName: 'DWHIncAndi',
	bio: 'I am 18 years old, living in Romania. My nationality is Hungarian and Romanian.',
	avatar: 'https://kappa.lol/L3tbR',
	links: [
		{
			icon: 'Github',
			title: 'GitHub',
			description: 'Explore my open-source projects and contributions.',
			url: 'https://github.com/dwhincandi',
		},
		{
			icon: 'Instagram',
			title: 'Instagram',
			description: 'Stay updated with my personal and creative posts.',
			url: 'https://instagram.com/dwhincandi',
		},
		{
			icon: 'Twitch',
			title: 'Twitch',
			description: 'Join me live for gaming and coding sessions!',
			url: 'https://twitch.tv/dwhincandi',
		},
		{
			icon: 'TikTok',
			title: 'TikTok',
			description: 'Catch my short videos and behind-the-scenes content.',
			url: 'https://tiktok.com/@dwhincandi',
		},
	],
	theme: {
		light: {
			background: '#f3e9e4',
			secondary: '#e4d0c6',
			text: '#2e1a12',
			accent: '#8c5e3c',
		},
		dark: {
			background: '#1a0d07',
			secondary: '#33211a',
			text: '#f5ece7',
			accent: '#c08b65',
		},
	},
};
