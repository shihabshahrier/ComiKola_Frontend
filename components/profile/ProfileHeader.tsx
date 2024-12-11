"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPlus, Mail } from "lucide-react";
import type { User } from "@/lib/types";

interface ProfileHeaderProps {
  user: User;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
      <Avatar className="w-32 h-32">
        <AvatarImage src={user.avatar} />
        <AvatarFallback>{user.username[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">{user.username}</h1>
          <div className="flex gap-2">
            <Button variant="outline" className="border-green-500/30 hover:bg-green-500/10">
              <UserPlus className="mr-2 h-4 w-4" />
              Follow
            </Button>
            <Button variant="outline" className="border-green-500/30 hover:bg-green-500/10">
              <Mail className="mr-2 h-4 w-4" />
              Message
            </Button>
          </div>
        </div>

        <p className="text-gray-400 mb-4">{user.bio}</p>

        <div className="flex gap-6">
          <div>
            <span className="text-2xl font-bold">{user.followers}</span>
            <span className="text-gray-400 ml-2">Followers</span>
          </div>
          <div>
            <span className="text-2xl font-bold">{user.following}</span>
            <span className="text-gray-400 ml-2">Following</span>
          </div>
        </div>
      </div>
    </div>
  );
}