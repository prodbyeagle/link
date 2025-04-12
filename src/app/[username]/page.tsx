import type { Metadata } from 'next';

import { getUserData } from '@/lib/api/user-service';

import LinkList from '@/components/link-list';
import ThemeAwareProfile from '@/components/theme-aware-profile';
import { ThemeToggle } from '@/components/theme-toggle';
import UserProfile from '@/components/user-profile';

type Params = {
	username: string;
};

type Props = {
	params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { username } = await params;

	try {
		const userData = await getUserData(username);

		return {
			title: `${userData.displayName || userData.username} | EagleLink`,
			description: userData.bio || `${userData.displayName || userData.username}'s profile on EagleLink`,
			icons: userData.avatar,
			openGraph: {
				images: [userData.avatar],
				title: userData.displayName || userData.username,
				description:
					userData.bio || `Check out ${userData.displayName || userData.username}'s profile on EagleLink`,
				type: 'profile',
			},
		};
	} catch {
		return {
			title: 'User Not Found | EagleLink',
			description: 'The requested profile could not be found',
		};
	}
}

export default async function UserPage({ params }: Props) {
	const { username } = await params;
	const userData = await getUserData(username);

	return (
		<ThemeAwareProfile userData={userData}>
			<div className="absolute top-4 right-4 z-10">
				<ThemeToggle />
			</div>

			<div className="w-full max-w-md space-y-6">
				<UserProfile userData={userData} />
				<LinkList
					links={userData.links}
					textColor={userData.theme.light.text}
					secondaryColor={userData.theme.light.secondary}
					backgroundColor={userData.theme.light.background}
					accentColor={userData.theme.light.accent}
					darkTextColor={userData.theme.dark.text}
					darkSecondaryColor={userData.theme.dark.secondary}
					darkBackgroundColor={userData.theme.dark.background}
					darkAccentColor={userData.theme.dark.accent}
					respectSystemTheme={userData.theme.respectSystemTheme}
				/>
			</div>
		</ThemeAwareProfile>
	);
}
