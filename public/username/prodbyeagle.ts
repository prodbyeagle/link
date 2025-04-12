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
			background: '#13101d',
			secondary: '#191522',
			text: '#c0b3dd',
			accent: '#7D6BA3',
		},
		dark: {
			background: '#0e0b18',
			secondary: '#14101d',
			text: '#d0c3ed',
			accent: '#8D7BB3',
		},
		respectSystemTheme: true,
	},
};

