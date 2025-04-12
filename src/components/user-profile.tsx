import { ProfileWrapper } from '@/components/profile/profile-wrapper';

import type { Profile } from '@/types';

interface UserProfileProps {
	userData: Profile;
}

export default function UserProfile({ userData }: UserProfileProps) {
	return <ProfileWrapper userData={userData} />;
}
