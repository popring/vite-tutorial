import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer';


/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    tailwindcss(),
    autoprefixer({
      // 指定目标浏览器
      overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
    })
  ],
}