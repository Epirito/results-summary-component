import { Options } from "$fresh/plugins/twind.ts";
import defaultTheme from "$fresh/plugins/twind.ts"

export default {
  selfURL: import.meta.url,
  theme: {
    ...defaultTheme,
  }
} as Options;
