"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  username?: string;
  avatarUrl?: string;
}

export default function Navbar({
  username = "User",
  avatarUrl = "/placeholder-avatar.svg",
}: NavbarProps) {
  return (
    <header className="w-full bg-white/95 border-b border-gray-50 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-9 w-9 relative">
                <div className="h-9 w-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                  S
                </div>
              </div>
              <span className="ml-2.5 text-xl font-semibold text-gray-700">
                Smithy
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-500 hover:text-blue-500 font-medium text-sm transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-500 hover:text-blue-500 font-medium text-sm transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-gray-500 hover:text-blue-500 font-medium text-sm transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 hover:text-blue-500 font-medium text-sm transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-gray-50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="relative h-9 w-9 rounded-full overflow-hidden shadow-sm hover:shadow transition-shadow duration-200">
              <Image
                src={avatarUrl}
                alt={`${username}'s avatar`}
                width={36}
                height={36}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
