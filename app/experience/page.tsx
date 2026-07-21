import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Experience | FEI",
  description: "工作与项目经历",
};

const experiences = [
  {
    period: "待补充",
    role: "职位 / 角色",
    org: "公司 / 组织",
    summary: "在这里简述这段经历的核心职责与成果。",
    highlights: ["要点一", "要点二", "要点三"],
  },
  {
    period: "待补充",
    role: "职位 / 角色",
    org: "公司 / 组织",
    summary: "在这里简述这段经历的核心职责与成果。",
    highlights: ["要点一", "要点二", "要点三"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen bg-neutral-950">
      <SiteNav active="experience" />

      <section className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
              Experience
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              经历
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              软件开发、AI 知识库应用与信息系统相关经历。内容稍后完善。
            </p>
          </div>

          <ol className="relative border-l border-white/10 space-y-12 pl-8">
            {experiences.map((item, index) => (
              <li key={`${item.org}-${index}`} className="relative">
                <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-white/80 ring-4 ring-neutral-950" />
                <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                <h2 className="text-2xl font-semibold text-white mb-1">
                  {item.role}
                </h2>
                <p className="text-gray-300 mb-4">{item.org}</p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {item.summary}
                </p>
                <ul className="space-y-2">
                  {item.highlights.map((point) => (
                    <li
                      key={point}
                      className="text-gray-400 text-sm leading-relaxed before:content-['·'] before:mr-2 before:text-gray-500"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

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
