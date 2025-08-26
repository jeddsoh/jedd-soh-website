import { FloatingDock } from "@/components/aceternityui/floating-dock";
import { Home, User, Mail } from "lucide-react";

export const FloatingDockSection = () => {
    return (
        <div className="flex items-center justify-center absolute bottom-6 -translate-x-1/2 left-1/2 mx-auto z-10">
            <FloatingDock
                items={[
                    { title: "Home", icon: <Home />, href: "/" },
                    { title: "About", icon: <User />, href: "/about" },
                    { title: "Contact", icon: <Mail />, href: "/contact" },
                ]}
            />
        </div>
    )
}