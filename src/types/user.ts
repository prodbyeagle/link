import {UserTheme} from "@/types/theme";
import {LucideIcon} from "lucide-react";

export interface Link {
    icon: LucideIcon;
    title: string
    description: string
    url: string
}

export interface UserData {
    username: string
    displayName: string
    bio: string
    avatar: string
    links: Link[]
    theme: UserTheme
}