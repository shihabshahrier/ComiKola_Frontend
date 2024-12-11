"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import ComicGrid from "@/components/ComicGrid";
import FilterBar from "@/components/FilterBar";
import TopContributors from "@/components/TopContributors";

export default function JhuriGolpo() {
  return (
    <main className="min-h-screen bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold cyberpunk-heading">
            Jhuri Golpo
          </h1>
          <Button className="bg-green-500 hover:bg-red-500">
            <Upload className="mr-2 h-4 w-4" />
            Upload Your Comic
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <FilterBar />
            <ComicGrid />
          </div>
          
          <aside className="space-y-8">
            <TopContributors />
          </aside>
        </div>
      </div>
    </main>
  );
}