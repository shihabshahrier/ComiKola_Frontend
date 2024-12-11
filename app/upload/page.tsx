"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GENRES } from "@/lib/constants";
import { Upload, Image as ImageIcon, Plus } from "lucide-react";

export default function UploadPage() {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [pages, setPages] = useState<string[]>([]);

  return (
    <main className="min-h-screen bg-black py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 cyberpunk-heading">
          Upload Your Comic
        </h1>

        <div className="space-y-8">
          {/* Cover Upload */}
          <div className="space-y-4">
            <label className="block text-lg font-medium">Cover Image</label>
            <div 
              className={`
                relative aspect-[2/3] w-48 border-2 border-dashed 
                border-green-500/30 rounded-lg overflow-hidden
                hover:border-red-500/50 transition-colors
                ${coverPreview ? 'border-none' : 'cursor-pointer'}
              `}
            >
              {coverPreview ? (
                <img 
                  src={coverPreview} 
                  alt="Cover preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-green-500 mb-2" />
                  <p className="text-sm text-gray-400">Click to upload cover</p>
                </div>
              )}
            </div>
          </div>

          {/* Comic Details */}
          <div className="space-y-4">
            <Input 
              placeholder="Comic Title"
              className="bg-black border-green-500/30 focus:border-red-500/50"
            />
            
            <Textarea 
              placeholder="Description"
              className="bg-black border-green-500/30 focus:border-red-500/50"
              rows={4}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select>
                <SelectTrigger className="bg-black border-green-500/30">
                  <SelectValue placeholder="Select Genre" />
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
                <SelectTrigger className="bg-black border-green-500/30">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="hiatus">Hiatus</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Chapter Pages */}
          <div className="space-y-4">
            <label className="block text-lg font-medium">Chapter Pages</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pages.map((page, index) => (
                <div key={index} className="relative aspect-[2/3]">
                  <img 
                    src={page} 
                    alt={`Page ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
              <button title="Add Page" className="aspect-[2/3] border-2 border-dashed border-green-500/30 rounded-lg flex items-center justify-center hover:border-red-500/50 transition-colors">
                <Plus className="h-8 w-8 text-green-500" />
              </button>
            </div>
          </div>

          <Button className="w-full bg-green-500 hover:bg-red-500">
            <Upload className="mr-2 h-4 w-4" />
            Upload Comic
          </Button>
        </div>
      </div>
    </main>
  );
}