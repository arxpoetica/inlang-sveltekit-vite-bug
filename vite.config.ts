import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './src/paraglide/project.inlang',
			outdir: './src/paraglide/_compiled',
		}),
	],
});
