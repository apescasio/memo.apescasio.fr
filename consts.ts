import IconHome from './components/icons/home';
import IconPowershell from './components/icons/powershell';
import IconBash from './components/icons/bash';
import IconAzure from './components/icons/azure';
import IconIntune from './components/icons/intune';
import IconGit from '@/components/icons/git';
import IconSQL from '@/components/icons/sql';
import IconDocker from './components/icons/docker';

// Translation object for descriptions
const TRANSLATIONS = {
  home: {
    en: {
      desc: 'Handbook of an admin..',
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