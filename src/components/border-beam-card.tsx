import { RainbowButton } from "@/components/magicui/rainbow-button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Play, SkipBack, SkipForward } from "lucide-react";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import { Logo } from "./foundations/logo/logo";

export function BorderBeamCard() {
    return (
        <Card className="relative w-full m-0 p-0 overflow-hidden ">

            <CardContent className="p-0 m-0 flex flex-row gap-4 items-center justify-between">
                <Logo className="" />
                <RainbowButton variant="default" size="icon" asChild>
                    <AnimatedThemeToggler />
                </RainbowButton>
            </CardContent>

            <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-red-500 to-transparent"
            />
            <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={2}
                className="from-transparent via-blue-500 to-transparent"
            />
        </Card>
    );
}
