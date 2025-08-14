import React from 'react';
import { Callout } from 'fumadocs-ui/components/callout';

const DynamicCallout = ({ children }) => {
  // Extract text content from children for regex parsing
  const extractText = (node) => {
    if (typeof node === 'string') return node;
    if (React.isValidElement(node)) {
      return React.Children.toArray(node.props.children).map(extractText).join('');
    }
    return '';
  };

  const content = React.Children.toArray(children).map(extractText).join('');
  // Updated regex to support English and French variations
  const regex = /\(~(\d+)\s(?:second|seconds|seconde|secondes|segundo|segundos)\)/g;

  let totalSeconds = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    totalSeconds += parseInt(match[1], 10);
  }

  return (
    <div className="callout">
      <Callout>Total estimation: ~{totalSeconds}s.</Callout>
      <div>{children}</div> {/* Render the original children */}
    </div>
  );
};

export default DynamicCallout;