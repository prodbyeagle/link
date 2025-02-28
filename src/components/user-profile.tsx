import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import type {UserData} from "@/types/user"
import {hexToRgba} from "@/lib/color";

interface UserProfileProps {
    userData: UserData
}

export default function UserProfile({userData}: UserProfileProps) {
    const initials = userData.displayName
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase()

    const borderColor = userData.theme.accentColor ? hexToRgba(userData.theme.accentColor, 0.4) : "rgba(255, 255, 255, 0.5)";

    return (
        <div className="flex flex-col items-center mb-8">
            <Avatar style={{ borderColor }} className="w-36 h-36 mb-4 rounded-lg border">
                <AvatarImage src={userData.avatar} alt={userData.displayName}/>
                <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold mb-2">{userData.displayName}</h1>
            <p className="text-center opacity-80 mb-4">{userData.bio}</p>
        </div>
    )
}

