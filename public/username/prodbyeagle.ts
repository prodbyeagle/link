import type { Profile } from '@/types';

export const userProfile: Profile = {
	username: 'prodbyeagle',
	displayName: 'ProdbyEagle',
	bio: 'Hobby Frontend Developer from Germany 🇩🇪',
	avatar: 'https://kappa.lol/zTb0g',
	links: [
		{
			icon: 'Website',
			title: 'My Website',
			description: 'My Personal Website',
			url: 'https://prodbyeagle.vercel.app',
		},
		{
			icon: 'Threads',
			title: 'Threads',
			description: 'Follow me for Updates.',
			url: 'https://threads.net/@prodbyeagle',
		},
		{
			icon: 'Github',
			title: 'GitHub',
			description: 'My Open Source Projects',
			url: 'https://github.com/prodbyeagle',
		},
	],
	theme: {
		light: {
			background: '#f5f2fa',
			secondary: '#e9e2f5',
			text: '#2d223c',
			accent: '#a277f2',
		},
		dark: {
			background: '#120a1e',
			secondary: '#1b102d',
			text: '#f3e8ff',
			accent: '#c084fc',
		},
		respectSystemTheme: true,
	},
};
