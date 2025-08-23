import fs from 'fs';
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

    if (fs.existsSync(srcLess)) {
      const lessContent = fs.readFileSync(srcLess, 'utf8');
      const output = await less.render(lessContent, { filename: srcLess });
      fs.writeFileSync(distCss, output.css);
      console.log('✅ index.less compiled to dist/index.css');
    }
  },
});
