"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-white via-blue-200 to-white p-4">
      <div className="w-full max-w-3xl rounded-3xl bg-gradient-to-br from-blue-300 via-blue-100 to-blue-300 p-12 text-center">
        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="rounded-full bg-blue-600/20 p-3">
                <Mail className="h-6 w-6 text-blue-500" />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-blue-500">Our Newsletter</p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Subscribe To our newsletter!
              </h2>
              <p className="mx-auto max-w-xl text-gray-500">
                Sign up for our weekly newsletter to stay informed about
                exciting offers, our latest products, and industry updates
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-blue-900/30 bg-[#001538]/50 px-4 py-3 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                className="rounded-lg bg-blue-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-4 py-8 text-white">
            <div className="mx-auto w-fit rounded-full bg-blue-500/20 p-4">
              <Mail className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold">Thank you for subscribing!</h3>
            <p className="text-gray-500">
              You&apos;ll receive our next newsletter soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
