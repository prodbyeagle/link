import type { Profile } from '@/types';

import { ProfileAvatar } from './profile-avatar';

interface UserProfileProps {
	userData: Profile;
}

export function UserProfile({ userData }: UserProfileProps) {
	return (
		<div className="flex flex-col items-center mb-8">
			<ProfileAvatar userData={userData} />
			<h1 className="text-2xl font-bold mb-2">{userData.displayName}</h1>
			<p className="text-center max-w-md">{userData.bio}</p>
		</div>
	);
}
