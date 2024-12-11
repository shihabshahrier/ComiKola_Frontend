"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Upload, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { onAuthStateChanged } from "firebase/auth"; // Import from Firebase
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase"; // Make sure this path is correct
import { User } from "firebase/auth"; // Import User type

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Set up Firebase auth listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user state based on authentication status
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold cyberpunk-text">
            <span className="text-red-500">comi</span>
            <span className="text-green-500">Kola</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/originals" className="text-gray-300 hover:text-white">
              Originals
            </Link>
            <Link href="/jhuri-golpo" className="text-gray-300 hover:text-white">
              Jhuri Golpo
            </Link>
            
            {/* Conditional Upload and Profile Buttons */}
            {user ? (
              <>
                <Link href="/upload">
                  <Button className="bg-green-500 hover:bg-red-500">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                </Link>
                <Link href={`/profile/${user.displayName || user.email}`}>
                  <Avatar>
                    <AvatarImage src={user.photoURL || "/default-avatar.png"} />
                    <AvatarFallback>{user.displayName?.[0] || "U"}</AvatarFallback>
                  </Avatar>
                </Link>
              </>
            ) : (
              <Link href="/login">
                <Button className="bg-red-500 hover:bg-green-500">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-green-500/30">
              <div className="flex flex-col space-y-4">
                <Link href="/originals" className="text-lg">
                  Originals
                </Link>
                <Link href="/jhuri-golpo" className="text-lg">
                  Jhuri Golpo
                </Link>

                {/* Mobile Conditional Links */}
                {user ? (
                  <>
                    <Link href="/upload" className="text-lg">
                      Upload
                    </Link>
                    <Link href={`/profile/${user.displayName || user.email}`} className="text-lg">
                      Profile
                    </Link>
                  </>
                ) : (
                  <Link href="/login" className="text-lg">
                    Login
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
