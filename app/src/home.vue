<template>
  <div class="home">
    <nav class="navbar">
      <h1>My Portfolio</h1>
    </nav>

    <main class="container">
      <section class="hero">
        <h1>Hi, I'm a Developer</h1>
        <p>Welcome to my portfolio</p>
      </section>

      <section class="about">
        <h2>About Me</h2>
        <p>Creating amazing web experiences with modern technologies.</p>
      </section>

      <section class="projects">
        <h2>Projects</h2>
        <div class="project-list">
          <div class="project-item">Project 1</div>
          <div class="project-item">Project 2</div>
          <div class="project-item">Project 3</div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.navbar {
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
}

.navbar h1 {
  margin: 0;
  font-size: 1.8rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 2rem 0;
}

.hero h1 {
  font-size: 3rem;
  margin: 0 0 0.5rem 0;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.about {
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem 0;
}

.about h2 {
  font-size: 1.8rem;
  margin-top: 0;
}

.projects {
  padding: 2rem 0;
}

.projects h2 {
  font-size: 1.8rem;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.project-item {
  background: rgba(255, 255, 255, 0.15);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
}

.project-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
}

footer {
  text-align: center;
  padding: 2rem;
  opacity: 0.8;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
