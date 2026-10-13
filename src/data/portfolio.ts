/**
 * ============================================================
 *  PORTFOLIO CONTENT — the only file you need to edit.
 * ============================================================
 *  Lines marked TODO are placeholders. Replace them with real info.
 *  Add / remove array items freely; the layout adapts.
 * ============================================================
 */

export type Platform = 'Web' | 'Mobile' | 'Desktop'

// ---------- Profile (Hero + About + Contact + SEO) ----------
export const profile = {
  name: 'Niko Polistico',
  role: 'Full Stack Developer',
  platforms: ['Mobile', 'Web', 'Desktop'],
  location: 'Butuan City, Philippines',
  headline: 'I build software that works on your phone, in your browser, and on your desk.',
  bio: [
    'I am a Full Stack Developer based in Butuan City, building mobile, web, and desktop applications from database to interface.',
    'A Cum Laude BSIT graduate of Caraga State University and a DOST scholar, I am now pursuing an MSIT in AI and Data Analytics to build software that learns from data.',
  ],
  building: ['Cross-platform mobile apps', 'Web apps and APIs', 'Desktop and business systems', 'Data-driven features with AI'],
  lookingFor:
    'Full-time or remote roles, and select freelance work, where I can ship real products and keep growing as an engineer.',
  yearsStarted: 2022, // TODO: year you began building software — drives the "years" counter
  email: 'nik2polistico@gmail.com',
  github: 'https://github.com/your-username', // TODO
  linkedin: 'https://www.linkedin.com/in/your-username', // TODO
  cv: '/cv.pdf', // TODO: put your CV at public/cv.pdf
  photo: '/me.png', // replace public/me.png with a different photo, or '' for initials
  siteUrl: 'https://your-username.github.io', // TODO: used for Open Graph
}

// ---------- Education ----------
export const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Caraga State University',
    year: '2026',
    note: 'Cum Laude',
    status: 'Graduated',
  },
  {
    degree: 'Master of Science in Information Technology — AI and Data Analytics',
    school: 'TODO: University name',
    year: 'Ongoing',
    note: 'DOST Scholar',
    status: 'In progress',
    thesis: 'TODO: working thesis title',
  },
]

// ---------- Achievements ----------
export const achievements = [
  { title: 'Cum Laude', detail: 'BSIT, Caraga State University', year: '2026' },
  { title: 'DOST Scholar', detail: 'Graduate scholarship for MSIT in AI and Data Analytics', year: '2026' },
  { title: 'TODO: another award', detail: 'Hackathon, competition, or recognition', year: '2025' },
]

// ---------- Certificates ----------
export const certificates = [
  { name: 'CCEP', issuer: 'TODO: issuer', year: 'TODO', url: '#' },
  { name: 'CSCRB', issuer: 'TODO: issuer', year: 'TODO', url: '#' },
  { name: 'Cisco Networking Academy', issuer: 'Cisco', year: 'TODO', url: '#' },
  { name: 'TODO: add more', issuer: 'TODO', year: 'TODO', url: '#' },
]

// ---------- Tools & Tech ----------
// `icon` is a key from src/lib/tech-icons.ts (real brand logos). Add new ones there.
export const toolGroups = [
  {
    group: 'Frontend',
    items: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Vue', icon: 'vue' },
      { name: 'Nuxt.js', icon: 'nuxt' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Svelte', icon: 'svelte' },
      { name: 'Astro', icon: 'astro' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Vite', icon: 'vite' },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'Django', icon: 'django' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    group: 'Mobile & Desktop',
    items: [
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Dart', icon: 'dart' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'C#', icon: 'csharp' },
      { name: '.NET', icon: 'dotnet' },
      { name: 'Electron', icon: 'electron' },
    ],
  },
  {
    group: 'Database',
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'SQLite', icon: 'sqlite' },
    ],
  },
  {
    group: 'DevOps & Cloud',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Linux', icon: 'linux' },
    ],
  },
  {
    group: 'AI & Data',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'scikit-learn', icon: 'scikitlearn' },
      { name: 'Jupyter', icon: 'jupyter' },
    ],
  },
]

// ---------- Projects ----------
export interface Project {
  title: string
  platform: Platform
  problem: string
  stack: string[]
  role: string
  demo: string
  repo: string
  caseStudy: { problem: string; solution: string; result: string }
}

export const projects: Project[] = [
  {
    title: 'TODO: Project One',
    platform: 'Web',
    problem: 'Small shops track sales on paper and lose money to errors.',
    stack: ['React', 'Node.js', 'MySQL'],
    role: 'Full Stack Developer',
    demo: '#',
    repo: '#',
    caseStudy: {
      problem: 'Describe the real problem this project solves and who had it.',
      solution: 'Describe what you built and the key technical decisions.',
      result: 'Describe the outcome with a number if you can (time saved, users, accuracy).',
    },
  },
  {
    title: 'TODO: Project Two',
    platform: 'Mobile',
    problem: 'Students cannot easily find and book campus resources.',
    stack: ['Flutter', 'Firebase'],
    role: 'Mobile Developer',
    demo: '#',
    repo: '#',
    caseStudy: {
      problem: 'Describe the real problem this project solves and who had it.',
      solution: 'Describe what you built and the key technical decisions.',
      result: 'Describe the outcome with a number if you can.',
    },
  },
  {
    title: 'TODO: Project Three',
    platform: 'Desktop',
    problem: 'Clinics keep patient records in disconnected spreadsheets.',
    stack: ['C#', '.NET', 'PostgreSQL'],
    role: 'Desktop Developer',
    demo: '#',
    repo: '#',
    caseStudy: {
      problem: 'Describe the real problem this project solves and who had it.',
      solution: 'Describe what you built and the key technical decisions.',
      result: 'Describe the outcome with a number if you can.',
    },
  },
  {
    title: 'TODO: Project Four',
    platform: 'Web',
    problem: 'Local businesses have no affordable online presence.',
    stack: ['Vue', 'Tailwind CSS', 'Vercel'],
    role: 'Freelance Web Developer',
    demo: '#',
    repo: '#',
    caseStudy: {
      problem: 'Describe the real problem this project solves and who had it.',
      solution: 'Describe what you built and the key technical decisions.',
      result: 'Describe the outcome with a number if you can.',
    },
  },
  {
    title: 'TODO: Project Five',
    platform: 'Mobile',
    problem: 'Field staff submit reports late because forms need a desk.',
    stack: ['Kotlin', 'REST API', 'SQLite'],
    role: 'Android Developer',
    demo: '#',
    repo: '#',
    caseStudy: {
      problem: 'Describe the real problem this project solves and who had it.',
      solution: 'Describe what you built and the key technical decisions.',
      result: 'Describe the outcome with a number if you can.',
    },
  },
]

// ---------- Experience ----------
export const experience = [
  {
    role: 'Freelance Full Stack Developer', // TODO
    org: 'Self-employed',
    period: '2024 – Present',
    bullets: [
      'Delivered web and mobile apps for local clients from requirements to deployment.',
      'Replaced paper-based workflows with custom systems that cut manual data entry.',
      'Maintained apps after launch with fixes, backups, and feature updates.',
    ],
  },
  {
    role: 'Software Development Intern', // TODO
    org: 'TODO: Company',
    period: '2025',
    bullets: [
      'Shipped features in an agile team using Git-based workflows.',
      'Built REST endpoints and database queries for internal tools.',
      'Improved UI responsiveness across devices.',
    ],
  },
]
