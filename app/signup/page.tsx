"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase"; // Adjust the path to your firebase file
import Link from "next/link";
import { useRouter } from "next/navigation"; // For redirecting

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Use the router for redirection

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      router.push("/login"); // Redirect to login page after successful signup
    } catch (err) {
      setError((err as any).message); // Handle error messages
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-green-900 to-red-900 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-gray-300 text-sm block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-300 text-sm block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-300 text-sm block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-green-500"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-black py-2 rounded-md hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-green-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
