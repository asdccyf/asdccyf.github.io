export default function NotFound() {
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-xl text-gray-300 mb-8">页面未找到</p>
                <a
                    href="/"
                    className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                    返回首页
                </a>
            </div>
        </div>
    );
} 