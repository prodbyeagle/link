import type { Metadata } from 'next';

import { getUserData } from '@/lib/user-service';
import { cn } from '@/lib/utils';

import LinkList from '@/components/link-list';
import { ProfileAvatar } from '@/components/profile/profile-avatar';
import ThemeAwareProfile from '@/components/theme-aware-profile';
import { ThemeToggle } from '@/components/theme-toggle';

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

			<section className={cn('w-full max-w-lg mx-auto px-4', 'flex flex-col gap-8')}>
				<ProfileAvatar userData={userData} />

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
				/>
			</section>
		</ThemeAwareProfile>
	);
}
