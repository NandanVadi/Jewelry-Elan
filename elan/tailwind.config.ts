import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.tsx','./components/**/*.tsx'], theme: { extend: { colors: { ivory:'#F4F1EA', ink:'#111111', chrome:'#C9CCD1', acid:'#C8FF2E' },
 fontFamily: { display:['var(--display)','sans-serif'], sans:['var(--sans)','sans-serif'] } } } } satisfies Config;
