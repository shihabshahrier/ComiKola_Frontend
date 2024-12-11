"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComicGrid from "@/components/ComicGrid";
import { GENRES } from "@/lib/constants";

export default function Originals() {
  return (
    <main className="min-h-screen bg-black py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 cyberpunk-heading">
          comiKola Originals
        </h1>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full flex flex-wrap gap-2 bg-transparent">
            <TabsTrigger 
              value="all"
              className="data-[state=active]:bg-red-500"
            >
              All
            </TabsTrigger>
            {GENRES.map((genre) => (
              <TabsTrigger
                key={genre}
                value={genre.toLowerCase()}
                className="data-[state=active]:bg-red-500"
              >
                {genre}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="mt-8">
            <ComicGrid />
          </TabsContent>
          {GENRES.map((genre) => (
            <TabsContent key={genre} value={genre.toLowerCase()} className="mt-8">
              <ComicGrid />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}