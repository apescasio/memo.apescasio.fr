import IconHome from './components/icons/home';
import IconCycles from './components/icons/cycles';
import IconPowershell from './components/icons/powershell';
import IconBash from './components/icons/bash';
import IconAzure from './components/icons/azure';
import IconIntune from './components/icons/intune';
import IconGit from '@/components/icons/git';
import IconCopilot from './components/icons/copilot';
import IconYouTube from './components/icons/youtube';
import IconCli from './components/icons/cli';
import IconBbb from './components/icons/bbb';
import IconLhc from './components/icons/lhc';
import IconNovels from './components/icons/novels';
import IconSecurity from './components/icons/security';
import IconPython from './components/icons/python';
import IconNodeJS from './components/icons/nodejs';
import IconSQL from '@/components/icons/sql';
import IconDocker from './components/icons/docker';
import IconNetwork from './components/icons/network';
import IconPowerBI from './components/icons/powerbi';
import { Inspiration } from 'next/font/google';

// Learning cycle configuration
export const LEARNING_CYCLE = {
  current: 4,
  label: {
    en: 'Repetition = Mother of Learning',
    fr: 'Répétition = Mère de l\'Apprentissage'
  },
  currentText: {
    en: 'currently in',
    fr: 'actuellement dans le'
  },
  cycleText: {
    en: 'cycle',
    fr: 'cycle'
  },
  ordinals: {
    en: ['st', 'nd', 'rd', 'th'],
    fr: ['er', 'ème', 'ème', 'ème']
  },
  callout: {
    en: 'Once a month, I break everything (my own PC and my lab tenant) to rebuild it all back « brick by brick ». Whether it be installing apps on my PC via PowerShell, or recreating Copilot AI Agents or Intune Full Cloud Autopilot profiles.',
    fr: 'Une fois par mois, je casse tout (mon propre PC et mon lab tenant) pour tout reconstruire « brick by brick ». Que ce soit l\'installation d\'applications sur mon PC via PowerShell, ou recréer les agents Copilot IA Studio ou les profils Intune Full Cloud Autopilot.'
  }
};

// Translation object for descriptions
const TRANSLATIONS = {
  home: {
    en: {
      desc: 'Handbook of an admin.',
    },
    fr: {
      desc: 'Mémoire d\'un admin.',
    },
  },
  cycles: {
    en: {
      desc: 'Origin of why I do what I do: learning through repetition.',
    },
    fr: {
      desc: 'Origine de ce que je fais : apprendre par la répétition.',
    },
  },
  powershell: {
    en: {
      desc: 'A task automation and configuration management framework and scripting language from Microsoft.',
    },
    fr: {
      desc: 'Un framework d’automatisation des tâches et de gestion de configuration ainsi qu’un langage de script de Microsoft.',
    },
  },
  bash: {
    en: {
      desc: 'A Unix shell and command language used as the default shell on many Linux systems.',
    },
    fr: {
      desc: 'Un shell Unix et un langage de commande utilisé comme shell par défaut sur de nombreux systèmes Linux.',
    },
  },
  azure: {
    en: {
      desc: 'The cloud platform of Microsoft offering a comprehensive range of services (200+) to design, deploy, and manage applications, infrastructures, and solutions, with flexibility, scalability, and security tailored to modern needs.',
    },
    fr: {
      desc: 'La plateforme cloud de Microsoft offrant une gamme complète de services (200+) pour concevoir, déployer et gérer des applications, infrastructures et solutions, avec une flexibilité, une scalabilité et une sécurité adaptées aux besoins modernes.',
    },
  },
  intune: {
    en: {
      desc: 'A complete cloud solution from Microsoft that allows you to manage and secure your organization\'s devices and applications.',

    },
    fr: {
      desc: 'Une solution cloud complète de Microsoft qui permet de gérer et sécuriser les appareils et applications de votre organisation.',
    },
  },
  git: {
    en: {
      desc: 'A distributed version control system for tracking changes in source code.',
    },
    fr: {
      desc: 'Un système de contrôle de version distribué pour suivre les modifications dans le code source.',
    },
  },

  copilot: {
    en: {
      desc: 'AI-powered productivity assistant integrated into Microsoft 365 apps to help with writing, analysis, and automation.',
    },
    fr: {
      desc: 'Assistant de productivité alimenté par l\'IA intégré dans les applications Microsoft 365 pour aider avec la rédaction, l\'analyse et l\'automatisation.',
    },
  },


  youtube: {
    en: {
      desc: 'My YouTube Channel.',
    },
    fr: {
      desc: 'Ma chaine YouTube.',
    },
  },
  cli: {
    en: {
      desc: 'Welcome to my portfolio website with an interactive terminal.',
    },
    fr: {
      desc: 'Bienvenue sur mon site portfolio avec un terminal interactif.',
    },
  },
  bbb: {
    en: {
      desc: 'My fuel.',
    },
    fr: {
      desc: 'Mon carburant.',
    },
  },
  lhc: {
    en: {
      desc: 'Let him cook.',
    },
    fr: {
      desc: 'Let him cook.',
    },
  },

  novels: {
    en: {
      desc: 'My sources of inspiration.',
    },
    fr: {
      desc: 'Mes sources d\'inspiration.',
    },
  },
  security: {
    en: {
      desc: 'My notes on everything security-related on my lab tenant to simulate real work scenarios.',
    },
    fr: {
      desc: 'Mes notes sur tout ce qui concerne la sécurité sur mon lab tenant pour simuler des scénarios de travail réels.',
    },
  },
  python: {
    en: {
      desc: 'A high-level, interpreted programming language known for its simplicity and versatility, widely used for web development, data analysis, artificial intelligence, and automation.',
    },
    fr: {
      desc: 'Un langage de programmation interprété de haut niveau connu pour sa simplicité et sa polyvalence, largement utilisé pour le développement web, l\'analyse de données, l\'intelligence artificielle et l\'automatisation.',
    },
  },
  nodejs: {
    en: {
      desc: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine that allows you to run JavaScript on the server side.',
    },
    fr: {
      desc: 'Un environnement d\'exécution JavaScript basé sur le moteur JavaScript V8 de Chrome qui permet d\'exécuter du JavaScript côté serveur.',
    },
  },
  sql: {
    en: {
      desc: 'A powerful, open-source relational database management system.',
    },
    fr: {
      desc: 'Un système de gestion de bases de données relationnelles puissant et open-source.',
    },
  },
  docker: {
    en: {
      desc: 'A platform for developing, shipping, and running applications in containers.',
    },
    fr: {
      desc: 'Une plateforme pour développer, expédier et exécuter des applications dans des conteneurs.',
    },
  },
  network: {
    en: {
      desc: 'My notes on networking (IPI Paris School).',
    },
    fr: {
      desc: 'Mes notes sur le réseau (IPI Paris School).',
    },
  },
  powerbi: {
    en: {
      desc: 'My notes on Power BI (IPI Paris School).',
    },
    fr: {
      desc: 'Mes notes sur Power BI (IPI Paris School).',
    },
  },

};

export const DOCS = {
  home: {
    title: 'Home',
    label: 'Home',
    path: '/docs/home',
    icon: IconHome,
  },
  cycles: {
    title: 'Cycles',
    label: 'Cycles',
    path: '/docs/cycles',
    icon: IconCycles,
  },
  powershell: {
    title: 'PowerShell',
    label: 'PowerShell',
    path: '/docs/powershell',
    icon: IconPowershell,
  },
  bash: {
    title: 'Bash',
    label: 'Bash',
    path: '/docs/bash',
    icon: IconBash,
  },
  azure: {
    title: 'Azure',
    label: 'Azure',
    path: '/docs/azure',
    icon: IconAzure,
  },
  intune: {
    title: 'Intune',
    label: 'Intune',
    path: '/docs/intune',
    icon: IconIntune,
  },
  git: {
    title: 'Git',
    label: 'Git',
    path: '/docs/git',
    icon: IconGit,
  },
  copilot: {
    title: 'Copilot',
    label: 'Copilot',
    path: '/docs/copilot',
    icon: IconCopilot,
  },

  youtube: {
    title: 'YouTube',
    label: 'YouTube',
    path: 'https://youtube.com/@apescasio',
    icon: IconYouTube,
  },

  cli: {
    title: 'CLI',
    label: 'CLI',
    path: 'https://cli.apescasio.fr',
    icon: IconCli,
  },
  bbb: {
    title: 'BBB',
    label: 'BBB',
    path: 'https://bbb.apescasio.fr',
    icon: IconBbb,
  },
  lhc: {
    title: 'LHC',
    label: 'LHC',
    path: 'https://lethimcook.fr/en',
    icon: IconLhc,
  },
  novels: {
    title: 'Novels',
    label: 'Novels',
    path: '/docs/novels',
    icon: IconNovels,
  },
  security: {
    title: 'Security',
    label: 'Security',
    path: '/docs/security',
    icon: IconSecurity,
  },
  python: {
    title: 'Python',
    label: 'Python',
    path: '',
    icon: IconPython,
  },
  nodejs: {
    title: 'NodeJS',
    label: 'NodeJS',
    path: '',
    icon: IconNodeJS,
  },
  sql: {
    title: 'SQL (MariaDB)',
    label: 'SQL (MariaDB)',
    path: '',
    icon: IconSQL,
  },
  docker: {
    title: 'Docker',
    label: 'Docker',
    path: '',
    icon: IconDocker,
  },
  network: {
    title: 'Network',
    label: 'Network',
    path: '',
    icon: IconNetwork,
  },
  powerbi: {
    title: 'Power BI',
    label: 'Power BI',
    path: '',
    icon: IconPowerBI,
  },

};

// Utility function to get translated description
export const getTranslatedDesc = (key: keyof typeof DOCS, lang: string) => {
  const translations = TRANSLATIONS[key];
  // Default to English if the language is not found
  return translations[lang as keyof typeof translations]?.desc || translations.en.desc;
};