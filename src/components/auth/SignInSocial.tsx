"use client";

import { signIn } from "@/lib/auth/auth-client";
import { ReactNode } from "react";
import { Button } from "../ui/button";

export default function SignInSocial({
  provider,
  children,
}: {
  provider: "github" | "google";
  children: ReactNode;
}) {
  return (
    <Button
      onClick={async () => {
        await signIn.social({
          provider,
          callbackURL: "/dashboard",
        });
      }}
      type="button"
      variant="outline"
    >
      {children}
    </Button>
  );
}
