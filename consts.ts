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
import IconLhc from './components/icons/lhc';
import IconBbb from './components/icons/bbb';
import IconNovels from './components/icons/novels';
import IconSecurity from './components/icons/security';
import IconPython from './components/icons/python';
import IconNodeJS from './components/icons/nodejs';
import IconSQL from '@/components/icons/sql';
import IconDocker from './components/icons/docker';
import IconNetwork from './components/icons/network';
import IconPowerBi from './components/icons/powerbi';
import IconMundo from './components/icons/mundo';
import IconFuture from './components/icons/future';

// Learning cycle configuration
export const LEARNING_CYCLE = {
  current: 5,
  label: {
    en: 'Repetition = Mother of Learning',
    fr: 'Répétition = Mère de l\'Apprentissage',
    es: 'Repetición = Madre del Aprendizaje',
    ar: 'التكرار = أم التعلم'

  },
  currentText: {
    en: 'currently in',
    fr: 'actuellement dans le',
    es: 'actualmente en el',
    ar: 'حالياً في'

  },
  cycleText: {
    en: 'cycle',
    fr: 'cycle',
    es: 'ciclo',
    ar: 'دورة'

  },
  ordinals: {
    en: ['st', 'nd', 'rd', 'th'],
    fr: ['er', 'ème', 'ème', 'ème'],
    es: ['º', 'º', 'º', 'º'],
    ar: ['', '', '', '']

  },
  callout: {
    en: 'Once a month, I break everything (my own PC and my lab tenant) to rebuild it all back « brick by brick ». Whether it be installing apps on my PC via PowerShell, or recreating Copilot AI Agents or Intune Full Cloud Autopilot profiles.',
    fr: 'Une fois par mois, je casse tout (mon propre PC et mon lab tenant) pour tout reconstruire « brique par brique ». Que ce soit l\'installation d\'applications sur mon PC via PowerShell, ou recréer les agents Copilot IA Studio ou les profils Intune Full Cloud Autopilot.',
    es: 'Una vez al mes, rompo todo (mi propia PC y mi lab tenant) para reconstruirlo todo « ladrillo por ladrillo ». Ya sea instalando aplicaciones en mi PC vía PowerShell, o recreando Agentes de IA Copilot o perfiles de Intune Full Cloud Autopilot.',
    ar: 'مرةً شهريًا، أُفكك كل شيء (جهاز الكمبيوتر الخاص بي ومستأجر المختبر) لإعادة بنائه بالكامل "حجرًا بحجر". سواءً كان ذلك تثبيت تطبيقات على جهاز الكمبيوتر عبر PowerShell، أو إعادة إنشاء وكلاء Copilot AI أو ملفات تعريف Intune Full Cloud Autopilot.'

  }
};

// Culture configuration
export const CULTURE_CYCLE = {
  openSource: {
    text: {
      en: 'My freedom',
      fr: 'Ma liberté',
      es: 'Mi libertad',
      ar: 'حريتي'
    },
    link: 'https://github.com/apescasio'
  },
  callout: {
    title: {
      en: '',
      fr: '',
      es: '',
      ar: ''
    },
    content: {
      en: 'Quote from HakitaDev => « Culture shouldn\'t exist only for those who can afford it. »\n\nNothing worthwhile would\'ve truly existed if we didn\'t have « easy » access.',
      fr: 'Quote from HakitaDev => « La culture ne devrait pas être un luxe réservé aux plus fortunés. »\n\nRien de valable n’aurait vraiment existé sans un accès « facile. »',
      es: 'Quote from HakitaDev => « La cultura no debería ser un lujo reservado para los más ricos. »\n\nNada valioso habría existido realmente sin un acceso « fácil. »',
      ar: 'اقتباس من HakitaDev => « لا ينبغي للثقافة أن تكون موجودة فقط لأولئك الذين يستطيعون تحمل تكاليفها. »\n\nلن يكون هناك شيء ذو قيمة حقيقية لو لم يكن لدينا إمكانية الوصول "السهل".'
    }
  },
  description: {
    en: 'This is my culture, my open-source contributions, and my passion for sharing knowledge.',
    fr: 'Ceci est ma culture, mes contributions open-source et ma passion pour le partage des connaissances.',
    es: 'Esta es mi cultura, mis contribuciones open-source y mi pasión por compartir conocimiento.',
    ar: 'هذه هي ثقافتي، ومساهماتي في المصادر المفتوحة، وشغفي بمشاركة المعرفة.'
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
    es: {
      desc: 'Manual del admin.',
    },
    ar: {
      desc: 'دليل المسؤول.'
    },
  },
  cycles: {
    en: {
      desc: 'Origin of why I do what I do: learning through repetition.',
    },
    fr: {
      desc: 'Origine de ce que je fais : apprendre par la répétition.',
    },
    es: {
      desc: 'Origen de lo que hago: aprender a través de la repetición.',
    },
    ar: {
      desc: 'أصل ما أفعله: التعلم من خلال التكرار.'
    },
  },
  powershell: {
    en: {
      desc: 'A task automation and configuration management framework and scripting language from Microsoft.',
    },
    fr: {
      desc: 'Un framework d’automatisation des tâches et de gestion de configuration ainsi qu’un langage de script de Microsoft.',
    },
    es: {
      desc: 'Un marco de automatización de tareas y gestión de configuración, así como un lenguaje de scripting de Microsoft.',
    },
    ar: {
      desc: 'إطار عمل لإدارة التكوين وأتمتة المهام ولغة البرمجة النصية من مايكروسوفت.',
    },
  },
  bash: {
    en: {
      desc: 'A Unix shell and command language used as the default shell on many Linux systems.',
    },
    fr: {
      desc: 'Un shell Unix et un langage de commande utilisé comme shell par défaut sur de nombreux systèmes Linux.',
    },
    es: {
      desc: 'Un shell Unix y un lenguaje de comandos utilizado como shell predeterminado en muchos sistemas Linux.',
    },
    ar: {
      desc: 'بيئة Unix ولغة الأوامر المستخدمة كبيئة افتراضية في العديد من أنظمة Linux.',
    },
  },
  azure: {
    en: {
      desc: 'The cloud platform of Microsoft offering a comprehensive range of services (200+) to design, deploy, and manage applications, infrastructures, and solutions, with flexibility, scalability, and security tailored to modern needs.',
    },
    fr: {
      desc: 'La plateforme cloud de Microsoft offrant une gamme complète de services (200+) pour concevoir, déployer et gérer des applications, infrastructures et solutions, avec une flexibilité, une scalabilité et une sécurité adaptées aux besoins modernes.',
    },
    es: {
      desc: 'La plataforma en la cloud de Microsoft que ofrece una gama completa de servicios (200+) para diseñar, implementar y gestionar aplicaciones, infraestructuras y soluciones, con flexibilidad, escalabilidad y seguridad adaptadas a las necesidades modernas.',
    },
    ar: {
      desc: 'منصة الحوسبة السحابية من مايكروسوفت التي توفر مجموعة شاملة من أكثر من 200 خدمة لتصميم ونشر وإدارة التطبيقات والبنى التحتية والحلول بمرونة وقابلية توسع وأمان تلائم الاحتياجات الحديثة.',
    },
  },
  intune: {
    en: {
      desc: 'A complete cloud solution from Microsoft that allows you to manage and secure your organization\'s devices and applications.',

    },
    fr: {
      desc: 'Une solution cloud complète de Microsoft qui permet de gérer et sécuriser les appareils et applications de votre organisation.',
    },
    es: {
      desc: 'Una solución completa en la cloud de Microsoft que permite gestionar y asegurar los dispositivos y aplicaciones de tu organización.',
    },
    ar: {
      desc: 'حل سحابي متكامل من مايكروسوفت يسمح لك بإدارة وتأمين أجهزة وتطبيقات مؤسستك.',
    },
  },
  git: {
    en: {
      desc: 'A distributed version control system for tracking changes in source code.',
    },
    fr: {
      desc: 'Un système de contrôle de version distribué pour suivre les modifications dans le code source.',
    },
    es: {
      desc: 'Un sistema de control de versiones distribuido para rastrear cambios en el código fuente.',
    },
    ar: {
      desc: 'نظام تحكم بالإصدارات موزّع لتتبع التغييرات في الشفرة المصدرية.',
    },
  },
  copilot: {
    en: {
      desc: 'AI-powered productivity assistant integrated into Microsoft 365 apps to help with writing, analysis, and automation.',
    },
    fr: {
      desc: 'Assistant de productivité alimenté par l\'IA intégré dans les applications Microsoft 365 pour aider avec la rédaction, l\'analyse et l\'automatisation.',
    },
    es: {
      desc: 'Asistente de productividad impulsado por IA integrado en las aplicaciones de Microsoft 365 para ayudar con la redacción, el análisis y la automatización.',
    },
    ar: {
      desc: 'مساعد إنتاجية مدعوم بالذكاء الاصطناعي ومتكامل مع تطبيقات مايكروسوفت 365 للمساعدة في الكتابة والتحليل والأتمتة.',
    },
  },
  youtube: {
    en: {
      desc: 'My YouTube Channel.',
    },
    fr: {
      desc: 'Ma chaine YouTube.',
    },
    es: {
      desc: 'Mi canal de YouTube.',
    },
    ar: {
      desc: 'قناتي على يوتيوب.',
    },
  },
  cli: {
    en: {
      desc: 'Welcome to my portfolio website with an interactive terminal.',
    },
    fr: {
      desc: 'Bienvenue sur mon site portfolio avec un terminal interactif.',
    },
    es: {
      desc: 'Bienvenido a mi sitio web de portafolio con una terminal interactiva.',
    },
    ar: {
      desc: 'مرحبًا بك في موقع ملفّي الشخصي مع بيئة تفاعلية.',
    },
  },
  lhc: {
    en: {
      desc: 'Let him cook.',
    },
    fr: {
      desc: 'Let him cook.',
    },
    es: {
      desc: 'Let him cook.',
    },
    ar: {
      desc: 'دعيه يطبخ.',
    },
  },
  bbb: {
    en: {
      desc: 'My fuel.',
    },
    fr: {
      desc: 'My fuel.',
    },
    es: {
      desc: 'My fuel.',
    },
    ar: {
      desc: 'وقودي.',
    },
  },
  novels: {
    en: {
      desc: 'My sources of inspiration.',
    },
    fr: {
      desc: 'Mes sources d\'inspiration.',
    },
    es: {
      desc: 'Mis fuentes de inspiración.',
    },
    ar: {
      desc: 'مصادر إلهامي.',
    },
  },
  security: {
    en: {
      desc: 'My notes on everything security-related on my lab tenant to simulate real work scenarios.',
    },
    fr: {
      desc: 'Mes notes sur tout ce qui concerne la sécurité sur mon lab tenant pour simuler des scénarios de travail réels.',
    },
    es: {
      desc: 'Mis notas sobre todo lo relacionado con la seguridad en mi lab tenant para simular escenarios de trabajo reales.',
    },
    ar: {
      desc: 'ملاحظاتي حول كل ما يتعلق بالأمن في بيئة المختبر لمحاكاة سيناريوهات العمل الحقيقية.',
    },
  },
  python: {
    en: {
      desc: 'A high-level, interpreted programming language known for its simplicity and versatility, widely used for web development, data analysis, artificial intelligence, and automation.',
    },
    fr: {
      desc: 'Un langage de programmation interprété de haut niveau connu pour sa simplicité et sa polyvalence, largement utilisé pour le développement web, l\'analyse de données, l\'intelligence artificielle et l\'automatisation.',
    },
    es: {
      desc: 'Un lenguaje de programación interpretado de alto nivel conocido por su simplicidad y versatilidad, ampliamente utilizado para el desarrollo web, análisis de datos, inteligencia artificial y automatización.',
    },
    ar: {
      desc: 'لغة برمجة عالية المستوى مُفسَّرة معروفة بالبساطة والتنوع، تُستخدم على نطاق واسع في تطوير الويب وتحليل البيانات والذكاء الاصطناعي والأتمتة.',
    },
  },
  nodejs: {
    en: {
      desc: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine that allows you to run JavaScript on the server side.',
    },
    fr: {
      desc: 'Un environnement d\'exécution JavaScript basé sur le moteur JavaScript V8 de Chrome qui permet d\'exécuter du JavaScript côté serveur.',
    },
    es: {
      desc: 'Un entorno de ejecución de JavaScript basado en el motor V8 de Chrome que permite ejecutar JavaScript del lado del servidor.',
    },
    ar: {
      desc: 'بيئة تشغيل لجافاسكريبت مبنية على محرك V8 من كروم تتيح تشغيل جافاسكريبت على جانب الخادم.',
    },
  },
  sql: {
    en: {
      desc: 'A powerful, open-source relational database management system.',
    },
    fr: {
      desc: 'Un système de gestion de bases de données relationnelles puissant et open-source.',
    },
    es: {
      desc: 'Un sistema de gestión de bases de datos relacional potente y de open-source.',
    },
    ar: {
      desc: 'نظام قوي ومفتوح المصدر لإدارة قواعد البيانات العلائقية.',
    },
  },
  docker: {
    en: {
      desc: 'A platform for developing, shipping, and running applications in containers.',
    },
    fr: {
      desc: 'Une plateforme pour développer, expédier et exécuter des applications dans des conteneurs.',
    },
    es: {
      desc: 'Una plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.',
    },
    ar: {
      desc: 'منصة لتطوير وشحن وتشغيل التطبيقات داخل حاويات.',
    },
  },
  network: {
    en: {
      desc: 'My notes on networking (IPI Paris School).',
    },
    fr: {
      desc: 'Mes notes sur le réseau (IPI Paris School).',
    },
    es: {
      desc: 'Mis notas sobre redes (IPI Paris School).',
    },
    ar: {
      desc: 'ملاحظاتي حول الشبكات (IPI Paris School).',
    },
  },
  powerbi: {
    en: {
      desc: 'My notes on Power BI (IPI Paris School).',
    },
    fr: {
      desc: 'Mes notes sur Power BI (IPI Paris School).',
    },
    es: {
      desc: 'Mis notas sobre Power BI (IPI Paris School).',
    },
    ar: {
      desc: 'ملاحظاتي حول Power BI (IPI Paris School).',
    },
  },
  mundo: {
    en: {
      desc: 'Sharing my journey as an insignificant traveler through a clickable 3D world map—one tweet, one country, one city, one culture.',
    },
    fr: {
      desc: 'Partageant mon voyage en tant que voyageur insignifiant à travers une carte mondiale 3D cliquable : un tweet, un pays, une ville, une culture.',
    },
    es: {
      desc: 'Compartiendo mi viaje como un viajero insignificante a través de un mapa mundial 3D interactivo: un tweet, un país, una ciudad, una cultura.',
    },
    ar: {
      desc: 'أشارك رحلتي كمسافر بسيط عبر خريطة عالمية ثلاثية الأبعاد قابلة للنقر—تغريدة، بلد، مدينة، ثقافة.',
    },
  },
  future: {
    en: {
      desc: 'A message to the next generation from an insignificant student.',
    },
    fr: {
      desc: 'Un message à la prochaine génération venant d\'un étudiant insignifiant.',
    },
    es: {
      desc: 'Un mensaje a la próxima generación de un estudiante insignificante.',
    },
    ar: {
      desc: 'رسالة إلى الجيل القادم من طالب بسيط.',
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
    path: '/docs/python',
    icon: IconPython,
  },
  nodejs: {
    title: 'NodeJS',
    label: 'NodeJS',
    path: '/docs/nodejs',
    icon: IconNodeJS,
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
  lhc: {
    title: 'LHC',
    label: 'LHC',
    path: 'https://lethimcook.fr/en',
    icon: IconLhc,
  },
  bbb: {
    title: 'BBB',
    label: 'BBB',
    path: 'https://bbb.apescasio.fr',
    icon: IconBbb,
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
    title: 'PowerBi',
    label: 'PowerBi',
    path: '',
    icon: IconPowerBi,
  },
  mundo: {
    title: 'Mundo / Culture',
    label: 'Mundo / Culture',
    path: 'https://mundo.apescasio.fr',
    icon: IconMundo,
  },
  future: {
    title: 'Future / Human',
    label: 'Future / Human',
    path: '/docs/future',
    icon: IconFuture,
  },

};

// Utility function to get translated description
export const getTranslatedDesc = (key: keyof typeof DOCS, lang: string) => {
  const translations = TRANSLATIONS[key];
  // Default to English if the language is not found
  return translations[lang as keyof typeof translations]?.desc || translations.en.desc;
};