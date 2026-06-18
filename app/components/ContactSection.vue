<template>
  <section id="contact" class="py-20">
    <div class="text-center mb-20">
      <h1 class="text-5xl font-black mb-4">Let's Connect</h1>
      <p class="text-xl text-gray-300">I'd love to hear from you. Send me a message!</p>
    </div>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label class="block text-sm font-semibold mb-2">Your Name</label>
            <input 
              v-model="form.name"
              type="text" 
              placeholder="John Doe" 
              class="w-full px-4 py-3 bg-black/30 border border-purple-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Email Address</label>
            <input 
              v-model="form.email"
              type="email" 
              placeholder="john@example.com" 
              class="w-full px-4 py-3 bg-black/30 border border-purple-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Subject</label>
            <input 
              v-model="form.subject"
              type="text" 
              placeholder="Project Inquiry" 
              class="w-full px-4 py-3 bg-black/30 border border-purple-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Message</label>
            <textarea 
              v-model="form.message"
              placeholder="Tell me about your project..." 
              rows="5"
              class="w-full px-4 py-3 bg-black/30 border border-purple-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
            ></textarea>
          </div>
          <button 
            type="submit"
            class="w-full px-8 py-4 bg-linear-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      <!-- Contact Information -->
      <div class="space-y-8">
        <div class="bg-linear-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md border border-purple-400/20 rounded-lg p-8">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-3">
            <span class="w-10 h-10 bg-linear-to-br from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">📧</span>
            Email
          </h3>
          <p class="text-gray-300 mb-2">nik2polistico@gmail.com</p>
          <p class="text-gray-400">I'll get back to you within 24 hours</p>
        </div>

        <div class="bg-linear-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md border border-purple-400/20 rounded-lg p-8">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-3">
            <span class="w-10 h-10 bg-linear-to-br from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">📱</span>
            Phone
          </h3>
          <p class="text-gray-300 mb-2">+63 9676595166</p>
          <p class="text-gray-400">Available for calls Mon-Fri, 9-5 EST</p>
        </div>

        <div class="bg-linear-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md border border-purple-400/20 rounded-lg p-8">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-3">
            <span class="w-10 h-10 bg-linear-to-br from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">🌐</span>
            Social
          </h3>
          <div class="flex gap-4">
            <a href="https://github.com/nikopolistico" class="text-purple-400 hover:text-purple-300 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/niko-polistico-750991330/" class="text-purple-400 hover:text-purple-300 transition-colors">LinkedIn</a>
          </div>
        </div>

        <div class="bg-linear-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md border border-purple-400/20 rounded-lg p-8">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-3">
            <span class="w-10 h-10 bg-linear-to-br from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">📍</span>
            Location
          </h3>
          <p class="text-gray-300 mb-2">Remote / Flexible</p>
          <p class="text-gray-400">Available for projects worldwide</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  alert('Message sent successfully!')
}
</script>
