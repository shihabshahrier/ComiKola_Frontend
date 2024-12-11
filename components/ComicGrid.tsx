"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const comics = [
  {
    id: 1,
    title: "Neon Nights",
    cover: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&auto=format&fit=crop",
    author: "Sakib Ahmed",
    genre: "Cyberpunk",
    isNew: true,
  },
  {
    id: 2,
    title: "Bangla Legends",
    cover: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&auto=format&fit=crop",
    author: "Nusrat Jahan",
    genre: "Fantasy",
    isNew: false,
  },
  {
    id: 3,
    title: "Digital Warriors",
    cover: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=400&auto=format&fit=crop",
    author: "Rafiq Islam",
    genre: "Action",
    isNew: true,
  },
  {
    id: 4,
    title: "Virtual Dhaka",
    cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop",
    author: "Mehreen Khan",
    genre: "Sci-Fi",
    isNew: false,
  },
];

export default function ComicGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {comics.map((comic) => (
        <Card 
          key={comic.id}
          className="comic-card bg-black border border-green-500/30 hover:border-red-500/50"
        >
          <div className="relative aspect-[2/3]">
            <img
              src={comic.cover}
              alt={comic.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
            {comic.isNew && (
              <Badge 
                className="absolute top-2 right-2 bg-red-500"
              >
                New
              </Badge>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-1">{comic.title}</h3>
            <p className="text-sm text-gray-400">By {comic.author}</p>
            <Badge 
              variant="outline" 
              className="mt-2 border-green-500 text-green-500"
            >
              {comic.genre}
            </Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}