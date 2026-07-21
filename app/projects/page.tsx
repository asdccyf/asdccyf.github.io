import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Projects | FEI",
  description: "个人项目与作品",
};

const projects = [
  {
    title: "项目名称",
    summary: "用一两句话说明这个项目解决了什么问题、你负责了什么。",
    tags: ["Tech A", "Tech B", "Tech C"],
    href: undefined as string | undefined,
  },
  {
    title: "项目名称",
    summary: "用一两句话说明这个项目解决了什么问题、你负责了什么。",
    tags: ["Tech A", "Tech B", "Tech C"],
    href: undefined as string | undefined,
  },
  {
    title: "项目名称",
    summary: "用一两句话说明这个项目解决了什么问题、你负责了什么。",
    tags: ["Tech A", "Tech B", "Tech C"],
    href: undefined as string | undefined,
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-neutral-950">
      <SiteNav active="projects" />

      <section className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
              Projects
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              项目
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              软件开发与 AI 应用相关项目。内容稍后完善。
            </p>
          </div>

          <ul className="space-y-10">
            {projects.map((project, index) => (
              <li
                key={`${project.title}-${index}`}
                className="border-b border-white/10 pb-10 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                  <h2 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h2>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      查看项目 →
                    </a>
                  ) : (
                    <span className="text-sm text-gray-600">链接待补充</span>
                  )}
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-20 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              ← 返回首页
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
