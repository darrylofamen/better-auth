"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resetPassword } from "@/lib/auth/auth-client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      setMessage("Invalid or missing token.");
    }
  }, [token]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!token) return;

    const { error } = await resetPassword({
      token,
      newPassword: password,
    });

    if (error) {
      setMessage("Error resetting password. Please try again.");
    } else {
      setMessage("Password has been reset successfully.");
      setTimeout(() => router.push("/login"), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto space-y-4 container"
    >
      <h1 className="text-xl font-bold">Reset Password</h1>

      {message && <p className="text-sm mt-2">{message}</p>}

      <Input
        className="w-full border p-2"
        type="password"
        required
        value={password}
        placeholder="New password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Reset Password</Button>
    </form>
  );
};

export default ResetPasswordPage;
