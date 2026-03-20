import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Raibann",
  lastName: "Ma",
  name: `Raibann Ma`,
  role: "Full-Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "raibann.rb@gmail.com",
  location: "Asia/Phnom_Penh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Khmer", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/raibann",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ma-raibann-bab406224/",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: false,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>Turning business vision into high-performance digital products.</>
  ),
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/mks-cms",
  },
  subline: (
    <>
      I'm Raibann, a full-stack developer based in Cambodia, specializing in
      creating intuitive and user-friendly digital experiences.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a full-stack developer dedicated to transforming complex technical
        requirements into simple, elegant, and high-performance digital
        solutions. With an expertise that bridges robust back-end architecture
        and intuitive front-end interfaces, his work focuses on the seamless
        convergence of clean code, scalability, and user-centric technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "TJT22 Investment",
        timeframe: "2026 - Present",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Developed and maintained web applications using Vue, Nuxt.js,
            ThinkPHP, and MySQL, resulting in a 20% reduction in development
            time.
          </>,
          <>
            Built RESTful APIs with FastAPI.Collaborated with product team to
            define technical requirements
          </>,
          <>
            Manage Project and team using Notion and Google Sheets.Design and
            implement system-level solutions to problems.Agile and Scrum
            methodology to manage project and team
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "ONLINE ISP Cambodia",
        timeframe: "2024 - 2026",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Developed and maintained web applications using React, Next.js, Vue,
            Nuxt.js, and MySQL, resulting in a 20% reduction in development
            time.
          </>,
          <>
            Built RESTful APIs with FastAPI.Implemented CI/CD pipelines using
            GitLab CI/CD ,Jenkins ,Kubernetes and Rancher.
          </>,
          <>
            Agile and Scrum methodology to manage project and team.Design and
            implement system-level solutions to problems.Design and implement
            UI/UX design using Figma
          </>,
          <>
            Collaborated with product team to define technical
            requirements.Mentored junior developers and conducted code
            reviews.Manage Project and team using Notion and Google Sheets
          </>,
        ],
        images: [],
      },
      {
        company: "Bloc Delivery",
        timeframe: "2022 - 2024",
        role: "Web Developer",
        achievements: [
          <>
            Developed and maintained responsive web applications using React,
            ensuring optimal performance and user experience across devices.
          </>,
          <>
            Collaborated with designers and backend developers to implement new
            features and resolve issues in a fast-paced Agile environment.
          </>,
          <>
            Integrated RESTful APIs and third-party services such as Stripe for
            payment processing and AWS for cloud infrastructure.
          </>,
          <>
            Utilized modern JavaScript (ES6+), TypeScript, and state management
            libraries to build scalable and maintainable codebases.Participated
            in code reviews, contributed to UI/UX improvements, and optimized
            application performance through profiling and refactoring.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Build Bright University",
        description: <>Studied computer Science.</>,
      },
      {
        name: "Koh Sdach High School",
        description: <>Studied general education.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Design",
        description: (
          <>Designing and prototyping user interfaces using Figma.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Adobe XD",
            icon: "xd",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/fig-1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/fig-2.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/fig-3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Programming Languages",
        description: (
          <>I'm related to programming languages base on company technologies</>
        ),
        tags: [
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "Javascript",
            icon: "javascript",
          },
          {
            name: "Typescript",
            icon: "typescript",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "PHP",
            icon: "php",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Frontend",
        description: (
          <>
            Building responsive web applications base on business requirements.
          </>
        ),
        tags: [
          {
            name: "React",
            icon: "reactjs",
          },
          {
            name: "Vue",
            icon: "vuejs",
          },
          {
            name: "Next",
            icon: "nextjs",
          },
          {
            name: "Nuxt",
            icon: "nuxtjs",
          },
          {
            name: "Flutter",
            icon: "flutter",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>Building system-level solutions base on business requirements.</>
        ),
        tags: [
          {
            name: "ExperessJs",
            icon: "expressjs",
          },
          {
            name: "NestJs",
            icon: "nestjs",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "SpringBoot",
            icon: "springboot",
          },
          {
            name: "FastAPI",
            icon: "fastapi",
          },
          {
            name: "Nodejs",
            icon: "nodejs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Database",
        description: <>Choose the right database for complex applications.</>,
        tags: [
          {
            name: "Supabase",
            icon: "supabase",
          },
          {
            name: "Firebase",
            icon: "firebase",
          },
          {
            name: "SQLite",
            icon: "sqlite",
          },
          {
            name: "Oracle",
            icon: "oracle",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "MariaDB",
            icon: "mariadb",
          },
          {
            name: "Redis",
            icon: "redis",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "DevOps",
        description: <>Build and deploy applications with ease.</>,
        tags: [
          {
            name: "Github Actions",
            icon: "github",
          },
          {
            name: "Gitlab CI/CD",
            icon: "gitlab",
          },
          {
            name: "Jenkins",
            icon: "jenkins",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "Rancher",
            icon: "rancher",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Operating Systems",
        description: <>Daily use operating systems</>,
        tags: [
          {
            name: "MacOS",
            icon: "macos",
          },
          {
            name: "Linux",
            icon: "linux",
          },
          {
            name: "Windows",
            icon: "windows",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
