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
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/avatar.jpg"
            alt="头像"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-white font-medium">FEI的个人网站</span>
        </Link>
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
      </div>
    </nav>
  );
}
