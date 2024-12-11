"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComicGrid from "@/components/ComicGrid";
import type { User } from "@/lib/types";

interface ProfileContentProps {
  user: User;
}

export default function ProfileContent({ user }: ProfileContentProps) {
  return (
    <Tabs defaultValue="uploads" className="w-full">
      <TabsList className="w-full flex bg-transparent mb-8">
        <TabsTrigger 
          value="uploads"
          className="flex-1 data-[state=active]:bg-red-500"
        >
          My Uploads
        </TabsTrigger>
        <TabsTrigger 
          value="saved"
          className="flex-1 data-[state=active]:bg-red-500"
        >
          Saved Comics
        </TabsTrigger>
        <TabsTrigger 
          value="recent"
          className="flex-1 data-[state=active]:bg-red-500"
        >
          Recently Read
        </TabsTrigger>
      </TabsList>

      <TabsContent value="uploads">
        <ComicGrid />
      </TabsContent>
      <TabsContent value="saved">
        <ComicGrid />
      </TabsContent>
      <TabsContent value="recent">
        <ComicGrid />
      </TabsContent>
    </Tabs>
  );
}