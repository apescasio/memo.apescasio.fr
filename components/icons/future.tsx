import { SVGProps } from 'react';

export default function IconFuture(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" {...props}>
      {/* Icon from IconPark Solid by ByteDance - https://github.com/bytedance/IconPark/blob/master/LICENSE */}
      <defs>
        <mask id="ipSFourKey0">
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
            <rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"/>
            <path stroke="#000" d="M26.977 34V14L18 26.997v2.023h12"/>
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFourKey0)"/>
    </svg>
  );
}