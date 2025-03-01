"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cart } from "../_cart";

interface NavbarProps {
  username?: string;
  avatarUrl?: string;
}

export default function Navbar({
  username = "User",
  avatarUrl = "/placeholder-avatar.svg",
}: NavbarProps) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#explore-products", label: "Products", scroll: true },
  ];

  const handleHomeClick = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleProductsClick = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const productsSection = document.querySelector("#explore-products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={
                  link.label === "Products"
                    ? handleProductsClick
                    : link.label === "Home"
                      ? handleHomeClick
                      : undefined
                }
              />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Cart />
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

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent) => void;
}

function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-500 hover:text-blue-500 font-medium text-sm transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
