// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 部署到 Vercel 时使用根路径
	site: 'https://xuejiayi-portfolio.vercel.app', // 部署后改为你的自定义域名
	// base: '/xuejiayi-portfolio', // Vercel 部署不需要 base 路径
});
