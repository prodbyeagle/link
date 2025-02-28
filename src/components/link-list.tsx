import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import type {Link} from "@/types/user"
import {Browser, GithubLogo, InstagramLogo, ThreadsLogo, XLogo, TwitchLogo, TiktokLogo} from "@phosphor-icons/react/dist/ssr";
import {Icon} from "@phosphor-icons/react";
import {hexToRgba} from "@/lib/color";

interface LinkListProps {
    links: Link[]
    backgroundColor?: string;
    textColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    fontFamily?: string;
}

const iconMap: Record<string, Icon> = {
    Instagram: InstagramLogo,
    Github: GithubLogo,
    Threads: ThreadsLogo,
    Website: Browser,
    X: XLogo,
    Twitch: TwitchLogo,
    TikTok: TiktokLogo,
};

export default function LinkList({ links, accentColor, secondaryColor, textColor }: LinkListProps) {
    const borderColor = accentColor ? hexToRgba(accentColor, 0.2) : "rgba(255, 255, 255, 0.5)";

    return (
        <div className="space-y-4 w-full">
            {links.map((link, index) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const IconComponent = iconMap[link.icon] || null;

                return (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full transition-transform hover:scale-[1.01] focus:scale-[1.01]"
                    >
                        <Card className="w-full hover:shadow-2xl transition-shadow duration-300" style={{ borderColor, backgroundColor: secondaryColor }}>
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    {IconComponent && <IconComponent style={{ color: textColor }} size={20} weight="regular" />} {/* Render icon if found */}
                                    <CardTitle style={{ color: textColor }}>{link.title}</CardTitle>
                                </div>
                                <CardDescription>{link.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </a>
                );
            })}
        </div>
    );
}
