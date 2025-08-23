# @abnahid/ab-markdown-editor

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

✨ A modern, lightweight **Markdown editor** built for **React 19** and **Next.js 15**.  
Developed and maintained by [Ab Nahid Agency](https://abnahid.com).

---

## Features

- 🚀 Lightweight (~20KB gzipped)
- ⚛️ Fully compatible with **React 19** and **Next.js 15**
- 📝 Full Markdown support via [markdown-it](https://github.com/markdown-it/markdown-it)
- 🔌 Extensible toolbar & custom plugin support
- 🎨 Flexible UI modes (editor only, preview only, or both)
- 📸 Image upload & drag-and-drop support
- 🔄 Synced scrolling between editor and preview
- 📦 TypeScript support out of the box

---

## Demo

👉 Online demo (coming soon)  
👉 Or run locally:

```bash
git clone https://github.com/abnahid/ab-markdown-editor.git
cd ab-markdown-editor
npm install
npm run dev
```

````

---

## Installation

```bash
npm install @abnahid/ab-markdown-editor --save
```

---

## Basic Usage

```tsx
import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from '@abnahid/ab-markdown-editor';

// Import CSS
import '@abnahid/ab-markdown-editor/dist/index.css';

const mdParser = new MarkdownIt();

export default function Example() {
  return <MdEditor style={{ height: '500px' }} renderHTML={(text) => mdParser.render(text)} onChange={({ text }) => console.log(text)} />;
}
```

---

## Next.js / SSR Usage

Since this package is **client-side only**, use `dynamic` import in **Next.js 15**:

```tsx
import dynamic from 'next/dynamic';
import '@abnahid/ab-markdown-editor/dist/index.css';

const MdEditor = dynamic(() => import('@abnahid/ab-markdown-editor'), {
  ssr: false,
});

export default function Page() {
  return <MdEditor style={{ height: '500px' }} renderHTML={(text) => text} />;
}
```

---

## Documentation

- [Configuration](./docs/configure.md)
- [API Reference](./docs/api.md)
- [Plugin Development](./docs/plugin.md)

---

## Author & Maintainer

- **[Ab Nahid](https://github.com/abnahid)** – Founder & CEO, [Ab Nahid Agency](https://abnahid.com)

---

## License

[MIT](LICENSE) © [Ab Nahid Agency](https://abnahid.com)


````
