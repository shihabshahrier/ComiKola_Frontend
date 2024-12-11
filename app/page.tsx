"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import FeaturedBanner from "@/components/FeaturedBanner";
import ComicGrid from "@/components/ComicGrid";
import NewsMarquee from "@/components/NewsMarquee";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-green-600/20 mix-blend-overlay" />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-6 pt-20 pb-16">
            <h1 className="text-6xl font-bold text-white text-center cyberpunk-text">
              <span className="text-red-500">comi</span>
              <span className="text-green-500">Kola</span>
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-2xl">
              Your gateway to the finest Bengali comics in a cyberpunk universe
            </p>
            
            {/* Search Bar */}
            <div className="relative w-full max-w-2xl mt-8">
              <input
                type="text"
                placeholder="Search comics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-black/50 border-2 border-green-500 rounded-lg text-white 
                          placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all
                          shadow-[0_0_15px_rgba(34,197,94,0.3)] focus:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
              />
              <Button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-red-500
                         transition-all duration-300"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* News Marquee */}
      <NewsMarquee />

      {/* Featured Banner */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <FeaturedBanner />
        </div>
      </section>

      {/* Comic Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 cyberpunk-heading">
            Recently Updated
          </h2>
          <ComicGrid />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 cyberpunk-heading">
            Top Rated
          </h2>
          <ComicGrid />
        </div>
      </section>
    </main>
  );
}