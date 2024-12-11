"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const contributors = [
  {
    username: "AnikaBD",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    uploads: 24,
  },
  {
    username: "RashidComics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    uploads: 18,
  },
  {
    username: "DhakaArtist",
    avatar: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=200",
    uploads: 15,
  },
];

export default function TopContributors() {
  return (
    <Card className="p-6 bg-black border border-green-500/30">
      <h3 className="text-xl font-bold mb-4">Top Contributors</h3>
      <div className="space-y-4">
        {contributors.map((contributor, index) => (
          <div key={contributor.username} className="flex items-center gap-3">
            <div className="relative">
              <Avatar>
                <AvatarImage src={contributor.avatar} />
                <AvatarFallback>{contributor.username[0]}</AvatarFallback>
              </Avatar>
              {index === 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 text-xs">
                  👑
                </span>
              )}
            </div>
            <div>
              <p className="font-medium">{contributor.username}</p>
              <p className="text-sm text-gray-400">{contributor.uploads} uploads</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}