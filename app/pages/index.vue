<template>
  <div class="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>

    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#home" class="text-2xl font-bold bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Dev</a>
        <div class="flex gap-8 text-sm font-medium">
          <a href="#home" class="hover:text-purple-400 transition-colors">Home</a>
          <a href="#about" class="hover:text-purple-400 transition-colors">About</a>
          <a href="#projects" class="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#certificates" class="hover:text-purple-400 transition-colors">Certificates</a>
          <a href="#contact" class="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
      <!-- Hero Section -->
      <section id="home" class="min-h-screen flex items-center justify-center py-20">
        <div class="grid md:grid-cols-2 gap-12 items-center w-full">
          <!-- Profile Image -->
          <div class="flex justify-center">
            <div class="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-purple-400/50 shadow-2xl shadow-purple-500/50">
              <img src="@/assets/images/profile.png" alt="Profile" class="w-full h-full object-cover" />
            </div>
          </div>
          
          <!-- Hero Text -->
          <div class="text-left">
            <h2 class="text-6xl sm:text-7xl lg:text-6xl font-black mb-6 leading-tight whitespace-nowrap">
              <span class="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Full Stack Developer</span>
            </h2>
            <p class="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Building beautiful, performant web experiences with cutting-edge technologies
            </p>
            <div class="flex gap-4">
              <a href="#projects" class="px-8 py-3 bg-linear-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 inline-block">
                View My Work
              </a>
              <a href="#contact" class="px-8 py-3 border border-purple-400/50 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300 inline-block">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Components -->
      <AboutSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />

      <!-- Footer -->
      <footer class="text-center py-12 border-t border-white/10 text-gray-500 text-sm">
        <p>&copy; 2026 My Portfolio. Crafted with ❤️ by me.</p>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import CertificatesSection from '@/components/CertificatesSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>
