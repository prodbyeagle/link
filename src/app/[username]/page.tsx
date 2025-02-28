import {notFound} from "next/navigation"
import type {Metadata} from "next"
import UserProfile from "@/components/user-profile"
import LinkList from "@/components/link-list"
import {getUserData} from "@/lib/user-data"

type Props = {
    params: { username: string }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const userData = await getUserData(params.username)

    if (!userData) {
        return {
            title: "User Not Found",
        }
    }

    return {
        title: `${userData.username} | EagleLink`,
        description: userData.bio,
        icons: userData.avatar
    }
}

export default async function UserPage({params}: Props) {
    const userData = await getUserData(params.username)

    if (!userData) {
        notFound()
    }

    return (
        <div
            className="min-h-screen flex flex-col items-center py-8 px-4"
            style={{
                backgroundColor: userData.theme.backgroundColor,
                borderColor: userData.theme.secondaryColor,
                color: userData.theme.textColor
            }}
        >
            <div className="w-full max-w-md">
                <UserProfile userData={userData}/>
                <LinkList links={userData.links} textColor={userData.theme.textColor} secondaryColor={userData.theme.secondaryColor} backgroundColor={userData.theme.backgroundColor} accentColor={userData.theme.accentColor}/>
            </div>
        </div>
    )
}

