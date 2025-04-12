'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import type { Profile } from '@/types';

interface ProfileAvatarProps {
	userData: Profile;
	borderColor?: string;
	userInitials: string;
}

export function ProfileAvatar({ userData, borderColor, userInitials }: ProfileAvatarProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Avatar
					style={{ borderColor }}
					className="w-36 h-36 mb-4 rounded-lg border shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
					<AvatarImage src={userData.avatar} alt={userData.displayName} />
					<AvatarFallback className="bg-muted text-foreground">{userInitials}</AvatarFallback>
				</Avatar>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md p-0 overflow-hidden">
				<DialogTitle className="sr-only">{userData.displayName}&apos;s Profile Picture</DialogTitle>
				<DialogDescription className="sr-only">
					A larger view of {userData.displayName}&apos;s profile picture
				</DialogDescription>

				<div className="relative w-full aspect-square">
					{userData.avatar ? (
						<Image
							src={userData.avatar}
							alt={userData.displayName}
							fill
							sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
							quality={90}
							className="object-cover"
							priority
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center bg-muted text-4xl font-bold">
							{userInitials}
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
