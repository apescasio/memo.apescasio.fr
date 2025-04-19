import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import IconLinkedin from '@/components/icons/linkedin';

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <img 
            src="/images/real_icon.svg" 
            alt="Logo" 
            width={34} 
            height={34} 
          />
          Memo
        </>
      ),
    },
    links: [
      {
        type: 'main',
        text: locale === 'en' ? 'Aaron PESCASIO' : 'Aaron PESCASIO',
        url: 'https://apescasio.fr',
      },
      // Add LinkedIn link with icon in the top-right corner
      {
        type: 'icon',
        text: 'LinkedIn',
        url: 'https://www.linkedin.com/in/aaron-pescasio',
        icon: (
          <span style={{ transform: 'scale(1.1)' }}>
            <IconLinkedin />
          </span>
        ),
        external: true,
      },
    ],
  };
}