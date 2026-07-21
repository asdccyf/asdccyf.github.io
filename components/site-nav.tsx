"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavKey = "about" | "experience" | "projects" | "contact";

const navItems: { key: NavKey; label: string; href: string }[] = [
  { key: "about", label: "关于我", href: "/#about" },
  { key: "experience", label: "经历", href: "/experience" },
  { key: "projects", label: "项目", href: "/projects" },
  { key: "contact", label: "联系", href: "/#contact" },
];

export function SiteNav({ active }: { active?: NavKey }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/avatar.jpg"
              alt="头像"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-white font-medium">FEI的个人网站</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 text-gray-300">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={
                  active === item.key
                    ? "text-white transition-colors"
                    : "hover:text-white transition-colors"
                }
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/asdccyf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/10"
            >
              GitHub
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-white text-2xl leading-none px-2 py-1 rounded-md hover:bg-white/10 transition-colors"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 rounded-2xl border border-white/10 bg-neutral-950/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    active === item.key
                      ? "px-5 py-3 text-white bg-white/5"
                      : "px-5 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  }
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://github.com/asdccyf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="px-5 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
