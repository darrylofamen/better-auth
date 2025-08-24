"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchAccount } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const ForgotAccount = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    const found = await searchAccount(email);

    if (found) {
      router.push(
        `/login/forgot-account/forgot-password?email=${encodeURIComponent(
          email
        )}`
      );
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="p-6 max-w-md mx-auto space-y-4 container"
    >
      <h1 className="text-x1 font-semibold">Find your account</h1>

      <Input
        className="w-full p-2 border rounded"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default ForgotAccount;
