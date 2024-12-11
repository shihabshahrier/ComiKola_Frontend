"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const featuredComics = [
  {
    id: 1,
    title: "Cyber Dhaka 2077",
    cover: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&auto=format&fit=crop",
    author: "Rashid Khan",
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "Tales of Old Dhaka",
    cover: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop",
    author: "Anika Rahman",
    genre: "Historical",
  },
  {
    id: 3,
    title: "Digital Dreams",
    cover: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&auto=format&fit=crop",
    author: "Kamal Hossain",
    genre: "Cyberpunk",
  },
];

export default function FeaturedBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredComics.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredComics.length) % featuredComics.length);
  };

  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
      
      <img
        src={featuredComics[currentSlide].cover}
        alt={featuredComics[currentSlide].title}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black">
        <h3 className="text-4xl font-bold mb-2 cyberpunk-text">
          {featuredComics[currentSlide].title}
        </h3>
        <p className="text-xl text-gray-300 mb-4">
          By {featuredComics[currentSlide].author} • {featuredComics[currentSlide].genre}
        </p>
        <Button className="bg-red-500 hover:bg-green-500 transition-all duration-300">
          Read Now
        </Button>
      </div>

      <Button
        variant="ghost"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-black/50"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-black/50"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
}