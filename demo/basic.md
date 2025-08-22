---
title: Simple Usage
order: 1
---

This Demo demonstrates basic usage.

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';

const PLUGINS = undefined;

MdEditor.use(Plugins.TabInsert, {
  tabMapValue: 1,
});

class Demo extends React.Component {
  mdEditor = undefined;

  constructor(props) {
    super(props);
    this.renderHTML = this.renderHTML.bind(this);
    this.state = {
      value: '# Hello',
    };
  }

  handleEditorChange = (it, event) => {
    this.setState({
      value: it.text,
    });
  };

  handleImageUpload = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  onCustomImageUpload = (event) => {
    console.log('onCustomImageUpload', event);
    return new Promise((resolve, reject) => {
      const result = window.prompt('Please enter image url here...');
      resolve({ url: result });
    });
  };

  handleGetMdValue = () => {
    if (this.mdEditor) {
      alert(this.mdEditor.getMdValue());
    }
  };

  handleGetHtmlValue = () => {
    if (this.mdEditor) {
      alert(this.mdEditor.getHtmlValue());
    }
  };

  handleSetValue = () => {
    const text = window.prompt('Content');
    this.setState({
      value: text,
    });
  };

  renderHTML(text) {
    return React.createElement(ReactMarkdown, {
      source: text,
    });
  }

  render() {
    return (
      <div className="demo-wrap">
        <h3>react-markdown-editor-lite demo</h3>
        <nav className="nav">
          <button onClick={this.handleGetMdValue}>getMdValue</button>
          <button onClick={this.handleGetHtmlValue}>getHtmlValue</button>
          <button onClick={this.handleSetValue}>setValue</button>
        </nav>
        <div className="editor-wrap" style={{ marginTop: '30px' }}>
          <MdEditor
            ref={(node) => (this.mdEditor = node || undefined)}
            value={this.state.value}
            style={{ height: '500px', width: '100%' }}
            renderHTML={this.renderHTML}
            plugins={PLUGINS}
            config={{
              view: {
                menu: true,
                md: true,
                html: true,
                fullScreen: true,
                hideMenu: true,
              },
              table: {
                maxRow: 5,
                maxCol: 6,
              },
              imageUrl: 'https://octodex.github.com/images/minion.png',
              syncScrollMode: ['leftFollowRight', 'rightFollowLeft'],
            }}
            onChange={this.handleEditorChange}
            onImageUpload={this.handleImageUpload}
            onFocus={(e) => console.log('focus', e)}
            onBlur={(e) => console.log('blur', e)}
          />
          <MdEditor style={{ height: '500px', width: '100%' }} renderHTML={this.renderHTML} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
