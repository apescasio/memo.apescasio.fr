import { i18n } from "@/lib/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import IconLinkedin from "@/components/icons/linkedin";
import IconYouTubeV2 from "@/components/icons/youtube";
import IconInstagram from "@/components/icons/instagram";
import IconGitHub from "@/components/icons/github";
import IconMemov2 from "@/components/icons/memov2";
import Link from "next/link";

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <IconMemov2
            className="size-10 shrink-0"
            aria-label="Memo Icon"
            width={44}
            height={44}
          />
          Memo
        </>
      ),
      url: `/${locale}`, // Add this to point to /${lang} // blabla
    },
    links: [
      {
        type: "main",
        text: locale === "en" ? "Aaron (Iso) Pescasio" : "Aaron (Iso) Pescasio",
        url: "https://apescasio.fr",
      },
      {
        type: "icon",
        text: "YouTube",
        url: "https://youtube.com/@apescasio",
        icon: (
          <span style={{ transform: "scale(1.3)" }}>
            <IconYouTubeV2 />
          </span>
        ),
        external: true,
      },
      {
        type: "icon",
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/aaron-pescasio",
        icon: (
          <span style={{ transform: "scale(1.3)" }}>
            <IconLinkedin />
          </span>
        ),
        external: true,
      },
      {
        type: "icon",
        text: "Instagram",
        url: "https://www.instagram.com/himapescasio",
        icon: (
          <span style={{ transform: "scale(1.2)" }}>
            <IconInstagram />
          </span>
        ),
        external: true,
      },
      {
        type: "icon",
        text: "GitHub",
        url: "https://github.com/apescasio",
        icon: (
          <span style={{ transform: "scale(1.3)" }}>
            <IconGitHub />
          </span>
        ),
        external: true,
      },
    ],
  };
}
