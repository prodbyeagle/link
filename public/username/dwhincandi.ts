import type { Profile } from '@/types';

const userProfile: Profile = {
	username: 'dwhincandi',
	displayName: 'DWHIncAndi',
	bio: 'I am 18 years old, living in Romania. My nationality is Hungarian 🇭🇺 and Romanian 🇷🇴.',
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
			background: '#3A2B27',
			secondary: '#4C3833',
			text: '#d6b1a3',
			accent: '#8F6A54',
		},
		dark: {
			background: '#1E1A21',
			secondary: '#2F2A36',
			text: '#E8D5CA',
			accent: '#C09B7E',
		},
		respectSystemTheme: true,
	},
};

export default userProfile;
