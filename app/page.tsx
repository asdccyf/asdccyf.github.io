import { BackgroundPaths } from "@/components/ui/background-paths";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/avatar.jpg"
              alt="头像"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-white font-medium">我的个人网站</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">关于我</a>
            <a href="#projects" className="hover:text-white transition-colors">项目</a>
            <a href="#contact" className="hover:text-white transition-colors">联系</a>
            <a href="https://github.com/asdccyf" target="_blank"
              className="px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/10">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* 主背景区域 */}
      <BackgroundPaths title="欢迎来到我的世界" />

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
            <h2 className="text-4xl font-bold text-white mb-4">关于我</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              我是一名充满热情的开发者，专注于创建优雅的用户体验和高质量的代码。
              热爱学习新技术，享受解决复杂问题的过程。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">💻 前端开发</h3>
              <p className="text-gray-300">React, Vue, TypeScript, Next.js</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">🎨 设计</h3>
              <p className="text-gray-300">UI/UX 设计, Figma, 用户体验</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">⚡ 性能优化</h3>
              <p className="text-gray-300">Web性能, SEO优化, 用户体验提升</p>
            </div>
          </div>

          {/* 社交媒体链接 */}
          <div className="flex justify-center gap-6 mt-16">
            <a href="https://github.com/asdccyf" target="_blank"
              className="w-12 h-12 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 border border-white/10">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="mailto:your-email@example.com" target="_blank"
              className="w-12 h-12 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 border border-white/10">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-1.113.493-2.309.826-3.565.979 1.282-.768 2.266-1.984 2.732-3.433-1.201.714-2.532 1.232-3.946 1.511-1.135-1.208-2.749-1.961-4.535-1.961-3.431 0-6.215 2.784-6.215 6.215 0 .488.055.96.161 1.414-5.165-.259-9.744-2.734-12.804-6.493-.535.919-.842 1.987-.842 3.127 0 2.157 1.097 4.059 2.765 5.174-1.018-.033-1.976-.312-2.815-.778v.079c0 3.011 2.141 5.523 4.98 6.091-.521.143-1.07.219-1.636.219-.4 0-.791-.039-1.171-.111.792 2.475 3.09 4.275 5.814 4.323-2.127 1.667-4.806 2.66-7.714 2.66-.5 0-.994-.029-1.481-.087 2.749 1.763 6.012 2.793 9.514 2.793 11.418 0 17.661-9.463 17.661-17.661 0-.269-.006-.537-.018-.804 1.212-.875 2.263-1.967 3.093-3.211z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank"
              className="w-12 h-12 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 border border-white/10">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
