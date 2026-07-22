import { BackgroundPaths } from "@/components/ui/background-paths";
import SpecularButton from "@/components/ui/specular-button";
import { SiteNav } from "@/components/site-nav";
import Image from "next/image";

const contactLinks = {
  email: "asdccyf@gmail.com",
  github: "https://github.com/asdccyf",
  linkedin: "https://www.linkedin.com/in/yourprofile",
};

const tags = [
  "Software Development",
  "AI Applications",
  "Information Systems",
  "RAG Knowledge Base",
];

const skills = [
  {
    icon: "💻",
    title: "软件开发",
    description: "Python, C#, Java, C++, MySQL",
  },
  {
    icon: "🤖",
    title: "AI 应用",
    description: "RAG, 知识库平台, 文档解析, 检索问答",
  },
  {
    icon: "🔗",
    title: "系统联调",
    description: "Qt, XML, ZeroMQ, 前后端联调",
  },
];

export default function Home() {
  return (
    <main id="top" className="relative">
      <SiteNav />

      {/* 主背景区域 */}
      <BackgroundPaths title="Hi, I'm Yifei Chen" />

      {/* 个人信息区域 */}
      <section id="about" className="min-h-screen bg-neutral-950 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <Image
              src="/avatar.jpg"
              alt="个人头像"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 shadow-2xl"
            />
            <h3 className="text-4xl font-bold text-white mb-4">关于我</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              计算机科学本科与信息系统硕士背景，关注软件开发、AI 知识库应用与信息系统开发。
              曾参与企业级知识库平台、自组网通信系统 Qt 客户端，以及多个数据库与移动端项目。
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {tags.map((tag) => (
                <SpecularButton
                  key={tag}
                  size="sm"
                  radius={999}
                  tint="#ffffff"
                  tintOpacity={0.08}
                  blur={8}
                  textColor="#e5e5e5"
                  lineColor="#ffffff"
                  baseColor="#737373"
                  intensity={1}
                  shineSize={10}
                  shineFade={40}
                  thickness={1}
                  followMouse
                  proximity={200}
                  autoAnimate={false}
                >
                  {tag}
                </SpecularButton>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {skill.icon} {skill.title}
                </h3>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Footer */}
      <section
        id="contact"
        className="bg-neutral-950 border-t border-white/10 px-6 pt-24 pb-12"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            正在寻找新的工作机会
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-14 flex flex-col items-center gap-1">
            <span>我希望找到一份能够发挥技术背景、需求分析和跨团队协作能力的工作，</span>
            <span>参与企业级产品或 AI 应用从需求理解到功能落地的全过程。</span>
          </p>

          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-2">邮箱</p>
            <a
              href={`mailto:${contactLinks.email}`}
              className="text-white text-lg hover:text-gray-300 transition-colors break-all"
            >
              {contactLinks.email}
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 border border-white/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 border border-white/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <footer className="max-w-3xl mx-auto mt-24 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500 items-center text-center sm:text-left">
          <p>© 2026 Yifei Chen</p>
          <p className="sm:text-center">Built with Next.js</p>
          <a
            href="#top"
            className="hover:text-white transition-colors sm:text-right"
          >
            Back to top
          </a>
        </footer>
      </section>
    </main>
  );
}
