# @abnahid/ab-markdown-editor

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

✨ A modern, lightweight **Markdown editor for React 19 and Next.js 15**.
Built with performance and extensibility in mind, maintained by [Ab Nahid Agency](https://abnahid.com).

---

## 🚀 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Installation](#-installation)
- [Basic Usage](#-basic-usage)
- [Next.js / SSR Usage](#-nextjs--ssr-usage)
- [Documentation](#-documentation)
- [Author & Maintainer](#-author--maintainer)
- [License](#-license)

---

## ✨ Features

- 🚀 **Ultra-lightweight** (\~20KB gzipped)
- ⚛️ 100% compatible with **React 19** and **Next.js 15**
- 📝 Full Markdown support powered by [markdown-it](https://github.com/markdown-it/markdown-it)
- 🔌 Extensible **toolbar & plugin architecture**
- 🎨 Multiple **UI modes** (editor only, preview only, split view)
- 📸 **Image upload** + drag-and-drop support
- 🔄 **Synced scrolling** between editor & preview
- 📦 Written in **TypeScript**

Perfect choice if you need a **React Markdown editor** that’s lightweight, extensible, and SSR-friendly.

---

## 🌐 Live Demo

- [Hosted Demo – Coming Soon](https://abnahid.com)
- Or run locally:

```bash
git clone https://github.com/abnahid/ab-markdown-editor.git
cd ab-markdown-editor
npm install
npm run dev
```

---

## 📦 Installation

Install via npm:

```bash
npm install @abnahid/ab-markdown-editor --save
```

---

## ⚡ Basic Usage (React 19)

```tsx
import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from '@abnahid/ab-markdown-editor';

// Import CSS
import '@abnahid/ab-markdown-editor/lib/index.css';

const mdParser = new MarkdownIt();

export default function Example() {
  return <MdEditor style={{ height: '500px' }} renderHTML={(text) => mdParser.render(text)} onChange={({ text }) => console.log(text)} />;
}
```

---

## ⚛️ Next.js / SSR Usage

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

## 📚 Documentation

- [Configuration Guide](./docs/configure.md)
- [API Reference](./docs/api.md)
- [Plugin Development Guide](./docs/plugin.md)

---

## 👨‍💻 Author & Maintainer

- **[Ab Nahid](https://github.com/abnahid)** – Founder & CEO, [Ab Nahid Agency](https://abnahid.com)

---

## 📄 License

[MIT](LICENSE) © [Ab Nahid Agency](https://abnahid.com)

---

[npm-version-image]: https://img.shields.io/npm/v/@abnahid/ab-markdown-editor.svg
[npm-url]: https://www.npmjs.com/package/@abnahid/ab-markdown-editor
[npm-downloads-image]: https://img.shields.io/npm/dm/@abnahid/ab-markdown-editor.svg
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
