"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GENRES } from "@/lib/constants";

export default function FilterBar() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Select defaultValue="newest">
        <SelectTrigger className="w-[180px] bg-black border-green-500/30">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="popular">Most Popular</SelectItem>
          <SelectItem value="rating">Highest Rated</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px] bg-black border-green-500/30">
          <SelectValue placeholder="Genre" />
        </SelectTrigger>
        <SelectContent>
          {GENRES.map((genre) => (
            <SelectItem key={genre} value={genre.toLowerCase()}>
              {genre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px] bg-black border-green-500/30">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="ongoing">Ongoing</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}