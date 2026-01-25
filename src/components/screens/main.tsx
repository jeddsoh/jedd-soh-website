"use client"
import { ScrollArea } from "@radix-ui/react-scroll-area"

export const MainContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex-1 flex flex-row gap-4 p-4 pt-0 min-h-0 w-full max-w-full overflow-hidden">
            <ScrollArea className="border rounded-lg flex-1 w-full bg-background">
                {children}
            </ScrollArea>
            <ScrollArea className="border rounded-lg flex-1 bg-background ">
                {children}
            </ScrollArea>
        </main>
    )
}