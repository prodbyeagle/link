import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import type { Profile } from '@/types';

interface ProfileAvatarProps {
	userData: Profile;
}

export function ProfileAvatar({ userData }: ProfileAvatarProps) {
	const initials = userData.displayName
		.split(' ')
		.map((name: string) => name[0])
		.join('')
		.toUpperCase();
	return (
		<div className="flex flex-col items-center mb-8">
			<Avatar className="w-36 h-36 mb-4">
				<AvatarImage src={userData.avatar} alt={userData.displayName} />
				<AvatarFallback className="bg-muted text-foreground">{initials}</AvatarFallback>
			</Avatar>
			<h1 className="text-2xl font-bold mb-2">{userData.displayName}</h1>
			<p className="text-center max-w-md">{userData.bio}</p>
		</div>
	);
}
