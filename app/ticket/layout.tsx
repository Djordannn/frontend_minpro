import React, { ReactNode } from "react";
import HeroCarousel from "../component/heroCarousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface ProductLayoutProps {
  children: ReactNode;
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  const;
  return (
    <div>
      <div>
        <HeroCarousel />
      </div>
      <div className="flex mt-4 gap-5">
        <div className="w-[30%]">
          <div className="flex items-center gap-2">
            <Input type="text" />
            <Button>
              <Search />
            </Button>
          </div>
        </div>
        <div className="w-[70%]">{children}</div>
      </div>
    </div>
  );
}
