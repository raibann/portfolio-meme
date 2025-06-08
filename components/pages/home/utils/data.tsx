// Tools categorized by type
import StackIcon from 'tech-stack-icons'
import {
  AppleIcon,
  DrawioIcon,
  EraserIcon,
  FastAPIIcon,
  GoogleSheetsIcon,
  JenkinsIcon,
  RancherIcon,
  SqliteIcon,
  WindowsIcon,
} from '@/components/icon'

import {
  RocketIcon,
  ShieldCheckIcon,
  MonitorSmartphoneIcon,
  DatabaseIcon,
  PenToolIcon,
  BriefcaseBusiness,
  ServerIcon,
  CodeIcon,
} from 'lucide-react'
import Image from 'next/image'
import { ExperienceItem } from '../experience'

const tools = [
  {
    category: 'Languages',
    icon: <CodeIcon />,
    items: [
      { name: 'HTML', icon: <StackIcon name="html5" /> },
      { name: 'CSS', icon: <StackIcon name="css3" /> },
      { name: 'JavaScript', icon: <StackIcon name="js" /> },
      {
        name: 'TypeScript',
        icon: <StackIcon name="typescript" />,
      },
      { name: 'Python', icon: <StackIcon name="python" /> },
      { name: 'Java', icon: <StackIcon name="java" /> },
      { name: 'Rust', icon: <StackIcon name="rust" /> },
      { name: 'PHP', icon: <StackIcon name="php" /> },
    ],
  },
  {
    category: 'Frontend',
    icon: <MonitorSmartphoneIcon />,
    items: [
      { name: 'React', icon: <StackIcon name="react" /> },
      {
        name: 'Next.js',
        icon: (
          <StackIcon name="nextjs" className="bg-white p-0.5 rounded-full" />
        ),
      },
      {
        name: 'Vue',
        icon: <StackIcon name="vuejs" />,
      },
      {
        name: 'Nuxt.js',
        icon: <StackIcon name="nuxtjs" />,
      },

      {
        name: 'Tailwind CSS',
        icon: <StackIcon name="tailwindcss" />,
      },
      {
        name: 'Material UI',
        icon: <StackIcon name="materialui" />,
      },
      {
        name: 'Bootstrap',
        icon: <StackIcon name="bootstrap5" />,
      },
      {
        name: 'Shadcn UI',
        icon: (
          <StackIcon name="shadcnui" className="bg-white p-0.5 rounded-full" />
        ),
      },
      {
        name: 'Tanstack Query',
        icon: <StackIcon name="reactquery" />,
      },
    ],
  },
  {
    category: 'Backend',
    icon: <ServerIcon />,
    items: [
      {
        name: 'Node.js',
        icon: <StackIcon name="nodejs" />,
      },
      {
        name: 'Express',
        icon: (
          <StackIcon
            name="expressjs"
            className="h-5 w-5 bg-white rounded-full p-0.5"
          />
        ),
      },
      { name: 'NestJS', icon: <StackIcon name="nestjs" /> },
      {
        name: 'FastAPI',
        icon: <FastAPIIcon />,
      },
      {
        name: 'SprintBoot',
        icon: <StackIcon name="spring" />,
      },
      {
        name: 'Laravel',
        icon: <StackIcon name="laravel" />,
      },
    ],
  },
  {
    category: 'Database',
    icon: <DatabaseIcon />,
    items: [
      {
        name: 'SQLite',
        icon: <SqliteIcon />,
      },
      {
        name: 'Supabase',
        icon: <StackIcon name="supabase" />,
      },
      {
        name: 'Firebase',
        icon: <StackIcon name="firebase" />,
      },
      {
        name: 'Oracle',
        icon: <StackIcon name="oracle" />,
      },
      {
        name: 'PostgreSQL',
        icon: <StackIcon name="postgresql" />,
      },
      {
        name: 'MongoDB',
        icon: <StackIcon name="mongodb" />,
      },
      {
        name: 'Redis',
        icon: <StackIcon name="redis" />,
      },
      {
        name: 'MySQL',
        icon: <StackIcon name="mysql" />,
      },
      {
        name: 'MariaDB',
        icon: <StackIcon name="mariadb" />,
      },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: <RocketIcon />,
    items: [
      {
        name: 'Git & GitHub CI/CD',
        icon: (
          <StackIcon name="github" className="bg-white p-0.5 rounded-full" />
        ),
      },
      {
        name: 'GitLab CI/CD',
        icon: <StackIcon name="gitlab" />,
      },
      { name: 'Docker', icon: <StackIcon name="docker" /> },
      {
        name: 'Kubernetes',
        icon: <StackIcon name="kubernetes" />,
      },
      {
        name: 'Rancher',
        icon: <RancherIcon />,
      },
      {
        name: 'Jenkins',
        icon: <JenkinsIcon />,
      },
    ],
  },
  {
    category: 'UI/UX Design',
    icon: <PenToolIcon />,
    items: [
      { name: 'Figma', icon: <StackIcon name="figma" /> },
      {
        name: 'Adobe XD',
        icon: <StackIcon name="xd" />,
      },
    ],
  },
  {
    category: 'Operating System',
    icon: <ServerIcon />,
    items: [
      { name: 'Linux', icon: <StackIcon name="linux" /> },
      { name: 'Windows', icon: <WindowsIcon /> },
      {
        name: 'macOS',
        icon: <AppleIcon className="bg-white p-0.5 rounded-full" />,
      },
    ],
  },
  {
    category: 'Project Management',
    icon: <BriefcaseBusiness />,
    items: [
      {
        name: 'Google Sheets',
        icon: <GoogleSheetsIcon />,
      },
      {
        name: 'Notion',
        icon: <StackIcon name="notion" />,
      },
      {
        name: 'Kollabe',
        icon: (
          <Image
            src="/images/Kollabe-wide.webp"
            alt="Kollab"
            fill
            priority
            className="object-contain bg-white p-0.5 rounded-full"
          />
        ),
      },
    ],
  },
  {
    category: 'System Design',
    icon: <CodeIcon />,
    items: [
      {
        name: 'Draw.io',
        icon: <DrawioIcon />,
      },
      {
        name: 'Eraser.io',
        icon: <EraserIcon className="w-full h-5" />,
      },
    ],
  },
]

const skills = [
  {
    icon: MonitorSmartphoneIcon,
    title: 'Frontend',
    description:
      'I specialize in building user-friendly, responsive web applications using modern technologies like React, Next.js, and Tailwind CSS. I focus on creating intuitive interfaces that provide seamless user experiences.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Backend',
    description:
      'I build robust server-side solutions using Node.js, Express, and MongoDB. I ensure data security and efficient handling of server-side operations.',
  },
  {
    icon: DatabaseIcon,
    title: 'Database',
    description:
      'I use MongoDB for flexible and scalable database solutions. I ensure data integrity and efficient data retrieval for seamless application functionality.',
  },
  {
    icon: RocketIcon,
    title: 'DevOps',
    description:
      'I implement CI/CD pipelines to automate deployment and testing processes. I ensure smooth deployment and efficient monitoring of applications.',
  },
  {
    icon: PenToolIcon,
    title: 'UI/UX Design',
    description:
      'I design intuitive and visually appealing interfaces using Figma and Adobe XD. I ensure that the design is responsive and user-friendly.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Project Management',
    description:
      'I manage projects using Jira and Trello. I ensure that the project is on track and that the team is working efficiently.',
  },
  {
    icon: ServerIcon,
    title: 'Operating System',
    description:
      'I have a strong understanding of operating system concepts and how they work. I am able to design and implement operating system-level solutions to problems.',
  },
  {
    icon: CodeIcon,
    title: 'System Design',
    description:
      'I design and implement system-level solutions to problems. I am able to design and implement system-level solutions to problems.',
  },
]

const experiences: ExperienceItem[] = [
  {
    id: '1',
    type: 'work',
    title: 'Full Stack Developer',
    company: 'ONLINE ISP Cambodia ',
    location: 'Phnom Penh, Cambodia',
    period: '2023 - Present',
    description: [
      'Developed and maintained web applications using React, Next.js, Vue, Nuxt.js',
      'Built RESTful APIs with FastAPI.',
      'Implemented CI/CD pipelines using GitLab CI/CD ,Jenkins ,Kubernetes and Rancher',
      'Collaborated with product team to define technical requirements',
      'Mentored junior developers and conducted code reviews',
      'Manage Project and team using Notion and Google Sheets',
      'Design and implement system-level solutions to problems',
      'Design and implement UI/UX design using Figma',
      'Agile and Scrum methodology to manage project and team',
    ],
    technologies: [
      'React',
      'Nextjs',
      'Vue',
      'Nuxtjs',
      'FastAPI',
      'Nodejs',
      'MongoDB',
      'PostgreSQL',
      'Oracle',
      'MySQL',
      'Redis',
      'Docker',
      'Kubernetes',
      'Rancher',
      'Jenkins',
      'Git',
      'CI/CD',
      'Notion',
      'Google Sheets',
      'Figma',
      'Linux',
      'Windows',
      'macOS',
    ],
  },
  {
    id: '2',
    type: 'work',
    title: 'Backend Developer',
    company: 'Startup OHHO',
    location: 'Phnom Penh, Cambodia',
    period: '06/2023 - 11/2023',
    description: [
      'Built and maintained backend services using NestJS and PostgreSQL',
      'Integrated third-party services and payment gateways',
      'Design and implement system-level solutions to problems',
      'Design and implement UI/UX design using Figma',
      'Agile and Scrum methodology to manage project and team',
      'Collaborated with product team to define technical requirements',
      'Mentored junior developers and conducted code reviews',
      'Manage Project and team using Notion and Google Sheets',
    ],
    technologies: [
      'Nestjs',
      'Postgresql',
      'Redis',
      'Docker',
      'Git',
      'CI/CD',
      'Figma',
      'Notion',
      'Google Sheets',
    ],
  },
  {
    id: '3',
    type: 'education',
    title: 'Bachelor of Computer Science',
    company: 'Build Bright University',
    location: 'Phnom Penh, Cambodia',
    period: '2018 - 2023',
    description: [
      'Core English,English for Academic Writing,Computer for Office Applications,Fundamental of Computer Technology,Art of Living,Graphic Design,Critical Thinking,Programming Methodology,Mathematics for Computing,Economics I',
      'English for Business,Presentation Skills,Web Programming,Web Application Development,Database System,Python Project,Computer Networks,Personal Application Development,Data Structures & Algorithms Using Python,Computer System Administration',
      'Introduction to Linux OS,Network Design and Implementation,Network Administration,Network Administration in Linux,Oracle Database,Client/Server Application Development,System Analysis and Design,OOP Using Java,Advanced PHP and My SQL,ASP .Net and SQL Server',
      'Mobile Programming I,Mobile Programming II, Networking I && II,Foundation of AI and Machine Learning,Cyber Security Principles,Block Chain Technology,	Research Methodology,Research Project for Science',
    ],
    technologies: [
      'Java',
      'Python',
      'C++',
      'C#',
      'PHP',
      'MySQL',
      'Oracle',
      'SQL Server',
      'Linux',
      'Windows',
      'macOS',
      'Git',
      'ASP.NET',
      'Web Programming',
      'Computer Networks',
      'Data Structures',
      'Algorithms',
      'AI',
      'Machine Learning',
      'Cyber Security',
      'Blockchain',
      'Mobile Development',
      'System Analysis',
      'OOP',
    ],
  },
  {
    id: '4',
    type: 'work',
    title: 'Frontend Developer',
    company: 'DigitleOne',
    location: 'Phnom Penh, Cambodia',
    period: '02/2022 - 04/2023',
    description: [
      'Developed and maintained responsive web applications using React, ensuring optimal performance and user experience across devices.',
      'Collaborated with designers and backend developers to implement new features and resolve issues in a fast-paced Agile environment.',
      'Integrated RESTful APIs and third-party services such as Stripe for payment processing and AWS for cloud infrastructure.',
      'Utilized modern JavaScript (ES6+), TypeScript, and state management libraries to build scalable and maintainable codebases.',
      'Participated in code reviews, contributed to UI/UX improvements, and optimized application performance through profiling and refactoring.',
    ],
    technologies: ['React', 'Nextjs', 'Vue', 'Nuxtjs'],
  },
]

export { tools, skills, experiences }
