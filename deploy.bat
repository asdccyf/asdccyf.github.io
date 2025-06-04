@echo off
echo 正在构建网站...
npm run build

echo 创建 .nojekyll 文件...
New-Item -Path "out\.nojekyll" -ItemType File -Force

echo 复制静态文件...
Copy-Item -Path "out\*" -Destination "." -Recurse -Force

echo 提交到Git...
git add -A
git commit -m "更新网站内容"
git push origin main

echo 部署完成！访问 https://asdccyf.github.io/ 查看更新
pause 