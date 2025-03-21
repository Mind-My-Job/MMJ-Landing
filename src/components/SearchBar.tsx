"use client";
import { Search } from "lucide-react";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function SearchBar() {
  const router = useRouter();
  let queryInput = '';
  let locationInput = '';

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center gap-4 p-3 bg-white rounded-md md:rounded-full shadow-lg flex-col md:flex-row">
        <div className="flex items-center gap-2 flex-1 min-w-0 w-full">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" />
          <Input
            type="text"
            placeholder="Enter skills / designations / companies"
            className="border-0 focus-visible:ring-0 text-base placeholder:text-slate-400"
            onChange={(e) => queryInput = e.target.value}
          />
        </div>
        <div className="w-px h-6 bg-slate-200 hidden md:block" />
        <Select>
          <SelectTrigger className="border-0 focus:ring-0 w-[200px] text-base">
            <SelectValue placeholder="Select experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-2">0-2 years</SelectItem>
            <SelectItem value="2-5">2-5 years</SelectItem>
            <SelectItem value="5-10">5-10 years</SelectItem>
            <SelectItem value="10+">10+ years</SelectItem>
          </SelectContent>
        </Select>
        <div className="w-px h-6 bg-slate-200 hidden md:block" />
        <Input
          type="text"
          placeholder="Enter location"
          className="border-0 focus-visible:ring-0 text-base placeholder:text-slate-400 w-full md:w-[200px]"
          onChange={(e) => locationInput = e.target.value}
        />
        <Button
          size="lg"
          className="group relative rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-8 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 text-md"
          onClick={() => {
            if(!queryInput || !locationInput) {
              toast.error("Please enter both query and location");
              return;
            }
            router.push(`/jobs/board?query=${queryInput}&location=${locationInput}&type=jobSearch`);
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
