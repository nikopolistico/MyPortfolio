<template>
  <section id="projects" class="py-20">
    <div class="text-center mb-20">
      <h2 class="text-5xl font-black mb-4">My Projects</h2>
      <p class="text-xl text-gray-300">A showcase of my best work and creative solutions</p>
    </div>

    <!-- Page Pagination Radio Buttons -->
    <div class="flex justify-center gap-4 mb-12">
      <label v-for="page in totalPages" :key="page" class="flex items-center gap-2 cursor-pointer">
        <input 
          type="radio" 
          :value="page - 1" 
          v-model="currentPage"
          class="w-4 h-4"
        />
        <span class="text-gray-300">{{ page }}</span>
      </label>
    </div>

    <div class="mb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="project in displayedProjects" :key="project.id" class="group bg-linear-to-br backdrop-blur-md border rounded-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" :style="{ backgroundImage: project.bglinear, borderColor: project.borderColor }" :class="project.shadowClass">
          <div class="mb-4 w-16 h-16 rounded-lg flex items-center justify-center" :style="{ color: project.linkColor }">
            <div v-html="project.svgIcon" class="w-8 h-8"></div>
          </div>
          <h3 class="text-2xl font-bold mb-3">{{ project.name }}</h3>
          <p class="text-gray-400 mb-4 leading-relaxed">
            {{ project.description }}
          </p>
          <div class="mb-6">
            <p class="text-sm font-semibold mb-3" :style="{ color: project.techColor }">Tech Stack:</p>
            <div class="flex gap-2 flex-wrap">
              <span v-for="tech in project.techs" :key="tech" class="text-xs px-3 py-1 rounded-full border" :style="{ backgroundColor: project.techBg, borderColor: project.techBorder }">{{ tech }}</span>
            </div>
          </div>
          <a href="#" class="inline-block font-semibold transition-colors" :style="{ color: project.linkColor }" :class="{ 'hover:opacity-80': true }">View Project →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  id: number
  name: string
  description: string
  techs: string[]
  bglinear: string
  iconlinear: string
  borderColor: string
  shadowClass: string
  techColor: string
  techBg: string
  techBorder: string
  linkColor: string
  svgIcon: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Community Monitoring System',
    description: 'A comprehensive monitoring platform for community management with real-time alerts, user engagement tracking, and community health analytics. Built with Vue 3 for a responsive and interactive user interface.',
    techs: ['Vue 3', 'TypeScript', 'Tailwind'],
    bglinear: 'linear-gradient(to bottom right, rgb(147, 51, 234, 0.1), rgb(59, 130, 246, 0.1))',
    iconlinear: 'linear-gradient(to bottom right, rgb(162, 155, 254), rgb(96, 165, 250))',
    borderColor: 'rgba(192, 132, 250, 0.2)',
    shadowClass: 'hover:shadow-purple-500/20',
    techColor: 'rgb(192, 132, 250)',
    techBg: 'rgba(147, 51, 234, 0.2)',
    techBorder: 'rgba(192, 132, 250, 0.3)',
    linkColor: 'rgb(192, 132, 250)',
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="2"/></svg>'
  },
  {
    id: 2,
    name: 'Attendance Monitoring System',
    description: 'An intelligent attendance tracking system with real-time check-in/check-out functionality, automated reporting, and analytics dashboards. Designed for organizations to efficiently manage and monitor employee or student attendance.',  
    techs: ['Node.js', 'PostgreSQL', 'REST API'],
    bglinear: 'linear-gradient(to bottom right, rgb(59, 130, 246, 0.1), rgb(34, 211, 238, 0.1))',
    iconlinear: 'linear-gradient(to bottom right, rgb(96, 165, 250), rgb(34, 211, 238))',
    borderColor: 'rgba(96, 165, 250, 0.2)',
    shadowClass: 'hover:shadow-blue-500/20',
    techColor: 'rgb(96, 165, 250)',
    techBg: 'rgba(59, 130, 246, 0.2)',
    techBorder: 'rgba(96, 165, 250, 0.3)',
    linkColor: 'rgb(96, 165, 250)',
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  },
  {
    id: 3,
    name: 'E-commerce Platform',
    description: 'E-commerce platform with payment integration, inventory management, and detailed analytics dashboard for business insights.',
    techs: ['Nuxt', 'Stripe', 'Firebase'],
    bglinear: 'linear-gradient(to bottom right, rgb(236, 72, 153, 0.1), rgb(147, 51, 234, 0.1))',
    iconlinear: 'linear-gradient(to bottom right, rgb(244, 114, 182), rgb(147, 51, 234))',
    borderColor: 'rgba(244, 114, 182, 0.2)',
    shadowClass: 'hover:shadow-pink-500/20',
    techColor: 'rgb(244, 114, 182)',
    techBg: 'rgba(236, 72, 153, 0.2)',
    techBorder: 'rgba(244, 114, 182, 0.3)',
    linkColor: 'rgb(244, 114, 182)',
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>'
  },
  {
    id: 4,
    name: 'Data Visualization Dashboard',
    description: 'Data visualization dashboard with interactive charts, real-time updates, and advanced filtering capabilities for data analysis.',
    techs: ['React', 'D3.js', 'GraphQL'],
    bglinear: 'linear-gradient(to bottom right, rgb(34, 197, 94, 0.1), rgb(16, 185, 129, 0.1))',
    iconlinear: 'linear-gradient(to bottom right, rgb(74, 222, 128), rgb(16, 185, 129))',
    borderColor: 'rgba(74, 222, 128, 0.2)',
    shadowClass: 'hover:shadow-green-500/20',
    techColor: 'rgb(74, 222, 128)',
    techBg: 'rgba(34, 197, 94, 0.2)',
    techBorder: 'rgba(74, 222, 128, 0.3)',
    linkColor: 'rgb(74, 222, 128)',
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'
  },
  {
    id: 5,
    name: 'SQL-Injections Detection System',
    description: 'A security-focused application designed to detect and prevent SQL injection attacks. Features pattern recognition, threat analysis, vulnerability scanning, and real-time threat reporting for database protection.',
    techs: ['Vue 3', 'Express.js', 'MongoDB'],
    bglinear: 'linear-gradient(to bottom right, rgb(249, 115, 22, 0.1), rgb(239, 68, 68, 0.1))',
    iconlinear: 'linear-gradient(to bottom right, rgb(251, 146, 60), rgb(248, 113, 113))',
    borderColor: 'rgba(251, 146, 60, 0.2)',
    shadowClass: 'hover:shadow-orange-500/20',
    techColor: 'rgb(251, 146, 60)',
    techBg: 'rgba(249, 115, 22, 0.2)',
    techBorder: 'rgba(251, 146, 60, 0.3)',
    linkColor: 'rgb(251, 146, 60)',
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
  },
  {
    id: 6,
    name: 'AIGrove Capstone Project',
    description: 'An AI-powered ecosystem for intelligent content curation and user recommendations. Leverages machine learning algorithms to provide personalized experiences and predictive analytics for enhanced user engagement.',
    techs: ['Python', 'TensorFlow', 'FastAPI'],
    bglinear: 'linear-gradient(to bottom right, rgb(168, 85, 247, 0.1), rgb(139, 92, 246, 0.1))',
    iconlinear: 'linear-gradient(to bottom right, rgb(196, 181, 253), rgb(167, 139, 250))',
    borderColor: 'rgba(196, 181, 253, 0.2)',
    shadowClass: 'hover:shadow-violet-500/20',
    techColor: 'rgb(196, 181, 253)',
    techBg: 'rgba(168, 85, 247, 0.2)',
    techBorder: 'rgba(196, 181, 253, 0.3)',
    linkColor: 'rgb(196, 181, 253)',
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>'
  },
  {
    id: 7,
    name: 'LostAndFoundAiPowered',
    description: 'An intelligent lost and found platform powered by AI for item recovery and reunification. Uses image recognition and location-based matching to help users locate lost items and connect with finders efficiently.',
    techs: ['React Native', 'Firebase', 'Redux'],
    bglinear: 'linear-gradient(to bottom right, rgb(34, 211, 238, 0.1), rgb(6, 182, 212, 0.1))',
    iconlinear: 'linear-gradient(to bottom right, rgb(34, 211, 238), rgb(6, 182, 212))',
    borderColor: 'rgba(34, 211, 238, 0.2)',
    shadowClass: 'hover:shadow-cyan-500/20',
    techColor: 'rgb(34, 211, 238)',
    techBg: 'rgba(34, 211, 238, 0.15)',
    techBorder: 'rgba(34, 211, 238, 0.3)',
    linkColor: 'rgb(34, 211, 238)',
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>'
  },
  {
    id: 8,
    name: 'Ordering System for Restaurants',
    description: 'A full-featured restaurant ordering and management system with menu customization, real-time order tracking, and payment integration. Streamlines operations for restaurants and enhances customer ordering experience.',
    techs: ['Next.js', 'WebSocket', 'PostgreSQL'],
    bglinear: 'linear-gradient(to bottom right, rgb(59, 130, 246, 0.1), rgb(168, 85, 247, 0.1))',
    iconlinear: 'linear-gradient(to bottom right, rgb(96, 165, 250), rgb(196, 181, 253))',
    borderColor: 'rgba(96, 165, 250, 0.2)',
    shadowClass: 'hover:shadow-indigo-500/20',
    techColor: 'rgb(96, 165, 250)',
    techBg: 'rgba(59, 130, 246, 0.2)',
    techBorder: 'rgba(96, 165, 250, 0.3)',
    linkColor: 'rgb(96, 165, 250)',
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V2"/><path d="M9 2H6"/><path d="M15 2v7c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V2"/><path d="M21 2h-3"/><path d="M3 13h18"/><path d="M3 17h3v4H3z"/><path d="M9 17h3v4H9z"/><path d="M15 17h3v4h-3z"/></svg>'
  }
]

const currentPage = ref(0)
const projectsPerPage = 4

const displayedProjects = computed(() => {
  const start = currentPage.value * projectsPerPage
  const end = start + projectsPerPage
  return projects.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(projects.length / projectsPerPage)
})
</script>
