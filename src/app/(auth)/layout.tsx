import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Button className="fixed top-5 left-2" variant="outline" asChild>
        <Link href="/">
          <Icons.arrowLeft className="h-2 w-2" />
          Back
        </Link>
      </Button>
      {children}
    </div>
  );
}
