export interface Link {
	icon: string;
	title: string;
	description: string;
	url: string;
}

export type SocialPlatform =
	| 'Github'
	| 'Instagram'
	| 'Threads'
	| 'Website'
	| 'Twitch'
	| 'TikTok'
	| 'Twitter'
	| 'YouTube'
	| 'LinkedIn';

export interface SocialLink {
	icon: SocialPlatform;
	title: string;
	description: string;
	url: string;
}

export interface ThemeColors {
	background: string;
	secondary: string;
	text: string;
	accent: string;
}

export interface ProfileTheme {
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
