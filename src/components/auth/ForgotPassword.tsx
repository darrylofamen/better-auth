"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { forgetPassword } from "@/lib/auth/auth-client";
import Link from "next/link";

import { FormEvent, useState } from "react";

const ForgotPassword = ({ emailParam }: { emailParam: string }) => {
  const [email, setEmail] = useState(emailParam);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { error } = await forgetPassword({
      email,
      redirectTo: `${window.location.origin}/login/forgot-account/forgot-password/reset-password`,
    });

    if (error) {
      setMessage("Error sending reset link. Please try again.");
    } else {
      setMessage("Reset link has been sent your email.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto space-y-4 container"
    >
      <h1 className="text-xl font-bold">Forgot password?</h1>

      <Input
        className="w-full border p-2"
        type="email"
        required
        value={email}
        placeholder="Your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="grid grid-cols-3 gap-2">
        <Button type="submit">Send Reset Link</Button>
        <Button asChild variant="outline">
          <Link href="/login">Back to Login</Link>
        </Button>
      </div>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
};

export default ForgotPassword;
