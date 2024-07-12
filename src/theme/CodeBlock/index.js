/**
 * NOTE: Why not support ruby code highlighting？
 * https://github.com/facebook/docusaurus/issues/2356
 */
// src/theme/CodeBlock/index.js
import Prism from 'prism-react-renderer/prism';
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-ruby');
require('prismjs/components/prism-erb');

import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';

/**
 * https://github.com/jwalton/tsheredoc/blob/master/src/index.ts
 */
const heredoc = str => {
  let lines = str.toString().split('\n');

  lines = lines[0] === "" ? lines.slice(1) : lines;

  const firstLineWithText = lines.find(line => line.length)

  const firstNotSpaceIndex = firstLineWithText.search(/[^ ]/);

  const leadingSpacesCount = firstNotSpaceIndex === -1 ? 0 : firstNotSpaceIndex;

  const newLines = lines
    .map(line => line.trimEnd())
    .map(line => line.trimStart() === '-' ? '' : line)
    .map(line => line.slice(leadingSpacesCount))
    .join('\n');

  return newLines;
}

export default function CodeBlockWrapper({ children, ...props }) {
  return (
    <>
      <CodeBlock {...props}>
        {heredoc(children)}
      </CodeBlock>
    </>
  );
}
