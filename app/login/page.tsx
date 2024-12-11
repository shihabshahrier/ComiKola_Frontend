"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase"; // Adjust the path to your firebase file
import Link from "next/link";
import { useRouter } from "next/navigation"; // For redirecting

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const router = useRouter(); // Use router for redirection

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      router.push("/"); // Redirect to the dashboard after successful login
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message); // Handle specific error messages
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-green-900 to-red-900 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
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
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-green-500 text-black py-2 rounded-md hover:bg-green-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable the button when loading
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
        <p className="text-gray-400 text-sm mt-4 text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-green-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
