import { FileTreeNavigation } from "@/components/file-tree-navigation"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-row h-screen w-screen">
      <FileTreeNavigation />

      <div className="flex flex-col grow-1 h-full w-full p-4 ">
        <ScrollArea className="flex flex-col w-full h-full gap-4 bg-tertiary border rounded-lg scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
          {children}
          <ScrollBar orientation="vertical" className="bg-primary" />
        </ScrollArea>
      </div>
    </div>

  )
}
