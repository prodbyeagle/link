import type { Profile } from '@/types';

import { UserProfileClient } from './profile-client';

interface ProfileWrapperProps {
	userData: Profile;
}

export function ProfileWrapper({ userData }: ProfileWrapperProps) {
	const initialBorderColor = userData.theme.light.accent
		? `rgba(${parseInt(userData.theme.light.accent.slice(1, 3), 16)}, ${parseInt(userData.theme.light.accent.slice(3, 5), 16)}, ${parseInt(userData.theme.light.accent.slice(5, 7), 16)}, 0.4)`
		: 'rgba(255, 255, 255, 0.5)';

	const userInitials = userData.displayName
		.split(' ')
		.map((name) => name[0])
		.join('')
		.toUpperCase();

	return (
		<UserProfileClient userData={userData} initialBorderColor={initialBorderColor} userInitials={userInitials} />
	);
}
