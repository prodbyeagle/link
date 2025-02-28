import Link from "next/link"
import {getUsernames} from "@/lib/user-data"
import {Button} from "@/components/ui/button"

export default async function HomePage() {
    const usernames = await getUsernames()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-neutral-950 text-neutral-100">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-5xl font-bold mb-12">EagleLink</h1>

                {usernames.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">All Users</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {usernames.map((username) => (
                                <Button key={username} variant="default" asChild>
                                    <Link href={`/${username}`}>@{username}</Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
