import { SVGProps } from 'react';

export default function IconAzure(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" {...props}>
      {/* Icon from Codicons by Microsoft Corporation - https://github.com/microsoft/vscode-codicons/blob/main/LICENSE */}
      <path 
        fill="currentColor" 
        fillRule="evenodd" 
        d="m15.37 13.68l-4-12a1 1 0 0 0-1-.68H5.63a1 1 0 0 0-.95.68l-4.05 12a1 1 0 0 0 1 1.32h2.93a1 1 0 0 0 .94-.68l.61-1.78l3 2.27a1 1 0 0 0 .6.19h4.68a1 1 0 0 0 .98-1.32m-5.62.66a.32.32 0 0 1-.2-.07L3.9 10.08l-.09-.07h3l.08-.21l1-2.53l2.24 6.63a.34.34 0 0 1-.38.44m4.67 0H10.7a1 1 0 0 0 0-.66l-4.05-12h3.72a.34.34 0 0 1 .32.23l4.05 12a.34.34 0 0 1-.32.43" 
        clipRule="evenodd"
      />
    </svg>
  );
}