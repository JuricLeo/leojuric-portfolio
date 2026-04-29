import { useState } from "react";

import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/global/logo";

import { ListIcon } from "@phosphor-icons/react";
import { Socials } from "@/components/global/socials.tsx";

interface HeaderProps {
    pathname: string;
}

const routes = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "My Work",
        href: "/my-work",
    },
    {
        name: "Blog",
        href: "/blog",
    },
];

export const Header = ({ pathname }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSheet = () => {
        setIsOpen((prev) => !prev);
    };

    const closeSheet = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky w-full top-0 z-30 mx-auto mb-20 flex h-12 items-center justify-between gap-6 border-y border-dotted bg-background">
            <a href="/" aria-label="Go home" className="ml-3">
                // Leopold Jurić
            </a>
            <nav aria-label="Main navigation" className="hidden h-full items-stretch sm:flex">
                {routes.map((route) => (
                    <a
                        className={cn(
                            "flex h-full items-center border-x border-dotted px-6 font-bold text-muted hover:-translate-y-0.5 hover:text-primary",
                            pathname === route.href && "border-primary opacity-100 text-primary"
                        )}
                        href={route.href}
                        key={route.href}
                    >
                        {route.name}
                    </a>
                ))}
            </nav>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger onClick={toggleSheet} className="sm:hidden">
                    <span className="sr-only">Open navigation menu</span>
                    <ListIcon size={32} color="currentColor" className="text-text cursor-pointer mr-3" />
                </SheetTrigger>
                <SheetContent side="top" className="min-h-screen">
                    <SheetHeader>
                        <SheetTitle className="hidden"></SheetTitle>
                        <SheetDescription className="hidden"></SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col gap-4 py-10 pl-10">
                        {routes.map((route) => (
                            <a
                                onClick={closeSheet}
                                className={cn(
                                    "text-3xl font-bold text-muted-foreground hover:text-primary hover:underline",
                                    pathname === route.href && "text-primary"
                                )}
                                href={route.href}
                                key={route.href}
                            >
                                {route.name}
                            </a>
                        ))}
                    </div>
                    <SheetFooter className="mb-12 flex w-full flex-col items-center justify-center gap-4">
                        <Logo />
                        <p className="block text-center text-sm text-muted-foreground">Leopold Jurić</p>
                        <div className="flex gap-2">
                            <Socials />
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </header>
    );
};
