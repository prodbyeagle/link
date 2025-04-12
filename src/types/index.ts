type SocialPlatform =
	| 'Github'
	| 'Instagram'
	| 'Threads'
	| 'Website'
	| 'Twitch'
	| 'TikTok'
	| 'Twitter'
	| 'YouTube'
	| 'LinkedIn';

interface SocialLink {
	icon: SocialPlatform;
	title: string;
	description: string;
	url: string;
}

interface ThemeColors {
	background: string;
	secondary: string;
	text: string;
	accent: string;
}

interface ProfileTheme {
	light: ThemeColors;
	dark: ThemeColors;
	respectSystemTheme: boolean;
}

export interface Profile {
	username: string;
	displayName: string;
	bio: string;
	avatar: string;
	links: SocialLink[];
	theme: ProfileTheme;
}
