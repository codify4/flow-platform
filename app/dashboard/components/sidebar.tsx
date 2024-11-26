"use client"

import * as React from "react"
import Link from 'next/link'
import { AudioWaveform, BookOpen, ChevronRight, ChevronsUpDown, FileText, LogOut, MessageSquare, Settings, User, History, Menu } from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent as SidebarContentOriginal,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/john-doe.jpg",
  },
}

function SidebarContent() {
  const [activeTab, setActiveTab] = React.useState("Generate Flashcards")

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <AudioWaveform className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  Acme Inc
                </span>
                <span className="truncate text-xs">
                  Enterprise
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContentOriginal>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/flashcards" passHref>
              <SidebarMenuButton
                size="lg"
                onClick={() => setActiveTab("Generate Flashcards")}
                className={`${
                  activeTab === "Generate Flashcards" ? "text-black" : "text-gray-500"
                } text-base mx-2 hover:bg-gray-100 hover:rounded-full transition-all duration-200`}
              >
                <BookOpen className="size-5" />
                <span>Flashcards</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              onClick={() => setActiveTab("Notes")}
              className={`${
                activeTab === "Notes" ? "text-black" : "text-gray-500"
              } text-base mx-2 hover:bg-gray-100 hover:rounded-full transition-all duration-200`}
            >
              <FileText className="size-5" />
              <span>Notes</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className={`${
                    activeTab === "Chat with PDF" ? "text-black" : "text-gray-500"
                  } text-base mx-2 hover:bg-gray-100 hover:rounded-full transition-all duration-200`}
                >
                  <MessageSquare className="size-5" />
                  <span>Chat with PDF</span>
                  <ChevronRight className="ml-auto size-5 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-lg"
                align="start"
                alignOffset={-8}
                sideOffset={8}
              >
                <DropdownMenuItem onClick={() => setActiveTab("Chat with PDF")}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>New Chat</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab("Chat History")}>
                  <History className="mr-2 h-4 w-4" />
                  <span>Chat History</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContentOriginal>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src={data.user.avatar}
                      alt={data.user.name}
                    />
                    <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {data.user.name}
                    </span>
                    <span className="truncate text-xs">
                      {data.user.email}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src={data.user.avatar}
                        alt={data.user.name}
                      />
                      <AvatarFallback className="rounded-lg">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {data.user.name}
                      </span>
                      <span className="truncate text-xs">
                        {data.user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export function SidebarWrapper() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <SidebarProvider>
          <Sidebar collapsible="icon">
            <SidebarContent />
          </Sidebar>
        </SidebarProvider>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="fixed top-4 left-4 z-40">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <SidebarProvider>
              <Sidebar>
                <SidebarContent />
              </Sidebar>
            </SidebarProvider>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

