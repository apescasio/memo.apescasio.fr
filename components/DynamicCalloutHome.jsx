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
  // Regex now supports English, French, Spanish, and Arabic (ثانية / ثوانٍ) + Arabic-Indic digits
  // Arabic-Indic digits: [\u0660-\u0669]; we capture either Western or Arabic-Indic then normalize
  const regex = /\(~([0-9\u0660-\u0669]+)\s(?:second|seconds|seconde|secondes|segundo|segundos|ثانية|ثوان|ثوانٍ)\)/g;

  let totalSeconds = 0;
  let match;

  const normalizeDigits = (str) =>
    str.replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660));

  while ((match = regex.exec(content)) !== null) {
    const raw = normalizeDigits(match[1]);
    const val = parseInt(raw, 10);
    if (!Number.isNaN(val)) totalSeconds += val;
  }

  // Fallback: if no explicit markers, try to detect a single pattern like "(~60)" with no unit
  if (totalSeconds === 0) {
    const loose = /\(~([0-9\u0660-\u0669]+)\)/g;
    while ((match = loose.exec(content)) !== null) {
      const raw = normalizeDigits(match[1]);
      const val = parseInt(raw, 10);
      if (!Number.isNaN(val)) totalSeconds += val;
    }
  }

  return (
    <div className="callout">
      <Callout>
        {totalSeconds > 0
          ? `Total estimation: ~${totalSeconds}s.`
          : 'Total estimation: n/a'}
      </Callout>
      <div>{children}</div> {/* Render the original children */}
    </div>
  );
};

export default DynamicCallout;