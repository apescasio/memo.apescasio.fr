import { SVGProps } from 'react';

export default function IconCycles(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" {...props}>
      {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
      <path fill="currentColor" d="M7.85 21.125q-2.6-1.2-4.225-3.625T2 12.025q0-.65.063-1.275t.212-1.225l-1.15.675l-1-1.725L4.9 5.725l2.75 4.75l-1.75 1l-1.35-2.35q-.275.675-.412 1.4T4 12.025q0 2.425 1.325 4.413t3.525 2.937zM15.5 9V7h2.725q-1.15-1.425-2.775-2.212T12 4q-1.375 0-2.6.425t-2.25 1.2l-1-1.75Q7.4 3 8.875 2.5T12 2q1.975 0 3.775.738T19 4.874V3.5h2V9zm-.65 15l-4.775-2.75l2.75-4.75l1.725 1l-1.425 2.45q2.95-.425 4.913-2.675T20 12q0-.275-.012-.513T19.925 11h2.025q.025.25.038.488T22 12q0 3.375-2.013 6.038t-5.237 3.587l1.1.65z"/>
    </svg>
  );
}