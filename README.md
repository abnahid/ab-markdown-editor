# @abnahid/ab-markdown-editor

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

✨ A modern, lightweight Markdown editor built for **React 19** and **Next.js 15**.

---

## Features

- 🚀 Lightweight (\~20KB gzipped)
- ⚛️ React 19 / Next.js 15 compatible
- 📝 Full Markdown support via [markdown-it](https://github.com/markdown-it/markdown-it)
- 🔌 Pluggable toolbar & custom plugins
- 🎨 Full control over UI (editor only, preview only, or both)
- 📸 Image upload & drag-and-drop support
- 🔄 Synced scrolling between editor and preview
- 📦 TypeScript support out of the box

---

## Demo

👉 Online demo (soon)
👉 Or run locally:

```bash
git clone https://github.com/abnahid/ab-markdown-editor.git
cd ab-markdown-editor
npm install
npm run dev
```

---

## Installation

```bash
npm install @abnahid/ab-markdown-editor --save
# or
yarn add @abnahid/ab-markdown-editor
```

---

## Basic usage

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

## Next.js / SSR usage

This package is **client-side only**. In Next.js 15, wrap it with `dynamic` import:

```tsx
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';

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
- [API](./docs/api.md)
- [Plugin development](./docs/plugin.md)

---

## Authors

- Updated & maintained by: **[Ab Nahid](https://github.com/abnahid)**

---

## License

[MIT](LICENSE) © Ab Nahid Agency
