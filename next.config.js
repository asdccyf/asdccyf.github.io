/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    // GitHub Pages 部署配置
    basePath: '',
    assetPrefix: '',
}

module.exports = nextConfig 