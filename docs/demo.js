document.addEventListener('DOMContentLoaded', function () {
    // Get the editor component
    const MarkdownEditor = window.AbMarkdownEditor ? window.AbMarkdownEditor.default : null;

    if (!MarkdownEditor) {
        console.error('Markdown Editor not loaded. Make sure the script is properly imported.');
        return;
    }

    // Basic Example - Introductory content with formatting examples
    const basicExample = `# Getting Started with AB Markdown Editor

This **powerful editor** makes writing markdown content simple and intuitive.

## Basic Formatting

You can create **bold text**, *italic text*, or ***both bold and italic***!

> "Blockquotes are easy to add and great for highlighting important information."

Need to make a list? No problem:

- Item one
- Item two
- Item three

## Try It Yourself!

Click anywhere in this editor and start typing to see how it works.
`;

    // Code Example - Showcasing code highlighting capabilities
    const codeExample = `# Code Highlighting Examples

## JavaScript

\`\`\`javascript
// Object-oriented example
class Developer {
  constructor(name) {
    this.name = name;
    this.skills = [];
  }
  
  addSkill(skill) {
    this.skills.push(skill);
    console.log(\`\${this.name} learned \${skill}!\`);
    return this;
  }
  
  listSkills() {
    return \`\${this.name} knows: \${this.skills.join(', ')}\`;
  }
}

const dev = new Developer('Nahid');
dev.addSkill('JavaScript')
   .addSkill('React')
   .addSkill('Markdown');
   
console.log(dev.listSkills());
\`\`\`

## Python

\`\`\`python
# A simple machine learning example
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Create sample data
X = np.random.rand(100, 5)
y = np.random.randint(0, 2, size=100)

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Evaluate
score = model.score(X_test, y_test)
print(f"Model accuracy: {score:.2f}")
\`\`\`

## HTML/CSS

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AB Markdown Demo</title>
  <style>
    .editor-container {
      max-width: 800px;
      margin: 0 auto;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .toolbar {
      background-color: #f5f5f5;
      padding: 8px;
      border-bottom: 1px solid #ddd;
    }
    .content {
      padding: 16px;
      min-height: 300px;
    }
  </style>
</head>
<body>
  <div class="editor-container">
    <div class="toolbar">
      <button>Bold</button>
      <button>Italic</button>
      <button>Link</button>
    </div>
    <div class="content" contenteditable="true">
      Start writing here...
    </div>
  </div>
</body>
</html>
\`\`\`
`;

    // Custom Toolbar Example - Tables, lists and advanced formatting
    const customExample = `# Advanced Formatting Features

## Table Example

| Feature | Description | Status |
|---------|-------------|--------|
| Rich Text | Format text easily | ✅ Complete |
| Tables | Create and edit tables | ✅ Complete |
| Code Blocks | Syntax highlighting | ✅ Complete |
| Image Upload | Easy image insertion | ✅ Complete |
| Plugins | Extend functionality | 🚧 In Progress |

## Task Lists

Keep track of your progress:

- [x] Research markdown editors
- [x] Test AB Markdown Editor
- [x] Implement in project
- [ ] Create documentation
- [ ] Train team members

## Nested Lists

Organization is easy with nested lists:

1. Project Planning
   1. Requirements gathering
   2. Resource allocation
   3. Timeline creation
2. Development
   1. Frontend implementation
      - UI components
      - State management
   2. Backend development
      - API endpoints
      - Database schema
3. Testing
   1. Unit tests
   2. Integration tests
   3. User acceptance testing

## Horizontal Rule

---

## Mathematical Expressions

You can include inline math formulas like \`$E = mc^2$\` or block equations:

\`\`\`math
\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}
\`\`\`
`;

    // Custom render functions for examples
    const renderHTMLBasic = (text) => {
        if (!text) return '';
        // Simple markdown conversion just for demo
        const html = text
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
            .replace(/- (.*$)/gm, '<li>$1</li>')
            .replace(/<\/li>\s*<li>/g, '</li><li>');

        return html;
    };

    // Render the editors
    if (document.getElementById('basic-editor') && MarkdownEditor) {
        ReactDOM.render(
            React.createElement(MarkdownEditor, {
                value: basicExample,
                onChange: (value) => console.log('Basic editor changed:', value),
                style: { height: '350px' },
                placeholder: 'Start writing your content here...',
                config: {
                    view: {
                        menu: true,
                        md: true,
                        html: true
                    }
                }
            }),
            document.getElementById('basic-editor')
        );
    }

    if (document.getElementById('code-editor') && MarkdownEditor) {
        ReactDOM.render(
            React.createElement(MarkdownEditor, {
                value: codeExample,
                onChange: (value) => console.log('Code editor changed:', value),
                style: { height: '500px' },
                config: {
                    view: {
                        menu: true,
                        md: true,
                        html: true,
                        fullScreen: true
                    },
                    syncScrollMode: ['rightFollowLeft']
                }
            }),
            document.getElementById('code-editor')
        );
    }

    if (document.getElementById('custom-editor') && MarkdownEditor) {
        ReactDOM.render(
            React.createElement(MarkdownEditor, {
                value: customExample,
                onChange: (value) => console.log('Custom editor changed:', value),
                style: { height: '500px' },
                plugins: [
                    'header',
                    'font-bold',
                    'font-italic',
                    'list-unordered',
                    'list-ordered',
                    'block-quote',
                    'table',
                    'image',
                    'link',
                    'clear',
                    'divider',
                    'code',
                    'full-screen'
                ],
                config: {
                    table: {
                        maxRow: 6,
                        maxCol: 8
                    },
                    imageUrl: 'https://example.com/default-image.jpg',
                    linkUrl: 'https://abnahid.github.io'
                },
                onImageUpload: (file) => {
                    // Mock image upload for demo
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            const reader = new FileReader();
                            reader.onload = () => resolve(reader.result);
                            reader.readAsDataURL(file);
                        }, 1000);
                    });
                }
            }),
            document.getElementById('custom-editor')
        );
    }

    // Initialize syntax highlighting
    if (window.Prism) {
        Prism.highlightAll();
    }

    // Current date and time in footer
    const currentDate = new Date();
    const dateString = currentDate.toISOString().slice(0, 10);

    // Add date to footer
    const footer = document.querySelector('footer .container');
    if (footer) {
        const dateElement = document.createElement('p');
        dateElement.textContent = `Last updated: ${dateString}`;
        dateElement.style.marginTop = '1rem';
        dateElement.style.fontSize = '0.9rem';
        dateElement.style.opacity = '0.7';
        footer.appendChild(dateElement);
    }
});