"use client";
import { getDocsTocs } from "@/lib/markdown";
import TocObserver from "./toc-observer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";

export default function Toc({ path }: { path: string }) {
  const [tocs, setTocs] = useState<any>(null);

  useEffect(() => {
    async function fetchTocs() {
      const data = await getDocsTocs(path);
      setTocs(data);
    }
    fetchTocs();
  }, [path]);

  if (!tocs) return <div>Loading...</div>;

  return (
    <div className="xl:flex toc hidden w-[20rem] py-9 sticky top-16 h-[96.95vh] pl-6">
      <div className="flex flex-col gap-3 w-full pl-2">
        <h3 className="font-medium text-sm">On this page</h3>
        <ScrollArea className="pb-2 pt-0.5 overflow-y-auto">
          <TocObserver data={tocs} />
        </ScrollArea>
      </div>
    </div>
  );
}