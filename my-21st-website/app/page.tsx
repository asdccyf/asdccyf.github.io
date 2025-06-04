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
          <div className="hidden md:flex space-x-8 text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">关于我</a>
            <a href="#projects" className="hover:text-white transition-colors">项目</a>
            <a href="#contact" className="hover:text-white transition-colors">联系</a>
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
        </div>
      </section>
    </main>
  );
}
