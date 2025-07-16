import IconHome from './components/icons/home';
import IconPowershell from './components/icons/powershell';
import IconBash from './components/icons/bash';
import IconAzure from './components/icons/azure';
import IconIntune from './components/icons/intune';
import IconGit from '@/components/icons/git';
import IconSQL from '@/components/icons/sql';
import IconDocker from './components/icons/docker';
import IconYouTube from './components/icons/youtube';
import IconCopilot from './components/icons/copilot';
import IconPython from './components/icons/python';
import IconNodeJS from './components/icons/nodejs';

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
    en: 'Once a month, I break everything (my own PC + my own lab tenant) to rebuild back everything. Whether it be installing apps on my PC via PowerShell, or redoing Intune Autopilot Profile and Copilot AI Agents.',
    fr: 'Une fois par mois, je casse tout (mon propre PC + mon propre tenant de lab) pour tout reconstruire. Que ce soit l\'installation d\'applications sur mon PC via PowerShell, ou refaire le profil Intune Autopilot et les agents IA Copilot.'
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
  youtube: {
    en: {
      desc: 'My YouTube Channel.',
    },
    fr: {
      desc: 'Ma chaine YouTube.',
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
};

export const DOCS = {
  home: {
    title: 'Home',
    label: 'Home',
    path: '/docs/home',
    icon: IconHome,
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
  youtube: {
    title: 'YouTube',
    label: 'YouTube',
    path: 'https://youtube.com/@apescasio',
    icon: IconYouTube,
  },
  copilot: {
    title: 'Copilot',
    label: 'Copilot',
    path: '/docs/copilot',
    icon: IconCopilot,
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
    title: 'SQL (Postgres)',
    label: 'SQL (Postgres)',
    path: '',
    icon: IconSQL,
  },
  docker: {
    title: 'Docker',
    label: 'Docker',
    path: '',
    icon: IconDocker,
  },
};

// Utility function to get translated description
export const getTranslatedDesc = (key: keyof typeof DOCS, lang: string) => {
  const translations = TRANSLATIONS[key];
  // Default to English if the language is not found
  return translations[lang as keyof typeof translations]?.desc || translations.en.desc;
};