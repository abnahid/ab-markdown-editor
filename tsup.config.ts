import fs from 'fs';
import fse from 'fs-extra';
import less from 'less';
import path from 'path';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  async onSuccess() {
    const srcLess = path.resolve(__dirname, 'src/index.less');
    const distCss = path.resolve(__dirname, 'dist/index.css');
    const srcFonts = path.resolve(__dirname, 'src/fonts');
    const distFonts = path.resolve(__dirname, 'dist/fonts');

    // 1️⃣ Compile LESS to CSS
    if (fs.existsSync(srcLess)) {
      const lessContent = fs.readFileSync(srcLess, 'utf8');
      const output = await less.render(lessContent, {
        filename: srcLess,
        paths: [path.dirname(srcLess)], // for relative imports in LESS
        compress: false, // change to true if you want minified CSS
      });
      fs.writeFileSync(distCss, output.css);
      console.log('✅ index.less compiled to dist/index.css');
    } else {
      console.warn('⚠️ src/index.less not found');
    }

    // 2️⃣ Copy font files to dist
    if (fs.existsSync(srcFonts)) {
      await fse.copy(srcFonts, distFonts, { overwrite: true });
      console.log('✅ Fonts copied to dist/fonts');
    } else {
      console.warn('⚠️ src/fonts folder not found');
    }
  },
});
