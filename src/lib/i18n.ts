import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';
import * as runtime from '$paraglide/runtime.js';

export const i18n = createI18n(runtime);

import * as messages from '$paraglide/messages';
export const ms = messages;
