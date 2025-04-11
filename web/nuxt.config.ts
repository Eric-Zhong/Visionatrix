// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui', 
		'@pinia/nuxt', 
		'@nuxt/image', 
		'@nuxt/eslint',
		'@nuxtjs/i18n',
	],
	runtimeConfig: {
		app: {
			backendApiUrl: process.env.BACKEND_API_URL || '',
			authUser: process.env.AUTH_USER || '',
			authPassword: process.env.AUTH_PASSWORD || '',
			isNextcloudIntegration: process.env.NEXTCLOUD_INTEGRATION || false,
		}
	},
	ssr: false, // we use only client side rendering,
	compatibilityDate: '2024-08-03',
	icon: {
		iconifyApiEndpoint: process.env.ICONIFY_API_URL || 'https://api.iconify.design',
	},
	vue: {
		compilerOptions: {
			isCustomElement: tag => ['model-viewer'].includes(tag),
		},
	},
	i18n: {
		locales: [
		  {
			code: 'en',
			name: 'English',
			file: 'en.json'
		  },
		  {
			code: 'zh',
			name: '中文',
			file: 'zh.json'
		  }
		],
		lazy: true,
		langDir: 'locales/',
		defaultLocale: 'en',
		strategy: 'prefix_except_default'
	}
})
