<template>
  <div class="min-h-screen bg-dark-bg text-white font-sans overflow-x-hidden relative bg-grid-pattern selection:bg-neon-purple selection:text-white">
    
    <!-- Floating Glowing Background Elements -->
    <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style="animation-duration: 8s;"></div>
    <div class="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" style="animation-duration: 12s;"></div>
    <div class="absolute bottom-[20%] left-1/3 w-[500px] h-[500px] bg-neon-magenta/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style="animation-duration: 10s;"></div>

    <!-- Main Loading Screen -->
    <Transition name="fade">
      <div v-if="isLoading" class="fixed inset-0 z-50 bg-[#09090e] flex flex-col items-center justify-center">
        <div class="relative flex items-center justify-center">
          <!-- Outer glowing rings -->
          <div class="w-24 h-24 rounded-full border-t-2 border-r-2 border-neon-cyan animate-spin"></div>
          <div class="absolute w-20 h-20 rounded-full border-b-2 border-l-2 border-neon-purple animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;"></div>
          <!-- Inner logo icon placeholder -->
          <div class="absolute w-12 h-12 flex items-center justify-center p-1.5 bg-white/5 rounded-xl border border-white/10 shadow-neon-cyan/20 animate-pulse">
            <img src="/images/logo.png" alt="JohenGaming Logo" class="w-full h-full object-contain" />
          </div>
        </div>
        <h2 class="mt-6 text-xl font-bold tracking-widest text-glow-cyan uppercase animate-pulse">
          Loading Platform...
        </h2>
        <p class="text-xs text-gray-500 mt-2 tracking-wide uppercase">Securing Connection</p>
      </div>
    </Transition>

    <!-- App Wrapper -->
    <div :class="{ 'opacity-0 scale-95': isLoading, 'opacity-100 scale-100': !isLoading }" class="transition-all duration-700 ease-out">
      <!-- Navbar -->
      <Navbar />

      <!-- Main Contents (Vue Router) -->
      <main class="pt-20">
        <router-view v-slot="{ Component }">
          <transition name="page-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <!-- Footer -->
      <Footer />

      <!-- Floating Buttons -->
      <!-- WhatsApp CTA -->
      <a 
        href="https://wa.me/628123456789" 
        target="_blank" 
        class="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white h-[60px] rounded-full shadow-lg hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-300 group flex items-center overflow-hidden"
        style="width: fit-content;"
        aria-label="Contact on WhatsApp"
      >
        <div class="w-[60px] h-[60px] flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-current" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </div>
        <span class="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:pr-6 transition-all duration-500 ease-in-out text-sm font-bold tracking-wide whitespace-nowrap">
          Ada Masalah? Hubungi Kami
        </span>
      </a>

      <!-- Live Chat UI Toggle Button -->
      <button 
        @click="toggleLiveChat"
        class="fixed bottom-6 left-6 z-40 bg-gradient-to-r from-neon-purple to-neon-magenta hover:from-neon-magenta hover:to-neon-purple text-white p-4 rounded-full shadow-lg shadow-neon-purple/30 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Open Live Chat"
      >
        <span class="relative flex h-3 w-3 mr-1" v-if="!isLiveChatOpen">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      <!-- Live Chat Widget -->
      <Transition name="slide-up">
        <div v-if="isLiveChatOpen" class="fixed bottom-24 left-6 z-50 w-80 md:w-96 glassmorphism rounded-2xl border border-neon-purple/30 shadow-2xl overflow-hidden">
          <!-- Header -->
          <div class="bg-gradient-to-r from-neon-purple/80 to-neon-magenta/80 px-4 py-3 flex justify-between items-center border-b border-white/10">
            <div class="flex items-center gap-2">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
              </span>
              <span class="font-bold text-sm uppercase tracking-wider">JohenGaming Assistant</span>
            </div>
            <button @click="toggleLiveChat" class="text-white hover:text-neon-cyan transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <!-- Chat Messages -->
          <div class="h-64 p-4 overflow-y-auto space-y-3 bg-[#0d0d19]/80 flex flex-col justify-end">
            <div class="flex items-start gap-2">
              <div class="bg-neon-purple/20 border border-neon-purple/30 text-xs p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                Halo Gamers! Ada yang bisa kami bantu hari ini? 🎮
              </div>
            </div>
            <div class="flex items-start gap-2 self-end justify-end w-full" v-for="(msg, idx) in chatMessages" :key="idx">
              <div class="bg-gradient-to-r from-neon-blue to-neon-purple text-xs p-3 rounded-2xl rounded-tr-none max-w-[80%]">
                {{ msg }}
              </div>
            </div>
          </div>
          <!-- Input -->
          <div class="p-3 border-t border-white/10 bg-[#0d0d19] flex gap-2">
            <input 
              v-model="newMsg" 
              @keyup.enter="sendChat" 
              type="text" 
              placeholder="Ketik pesan Anda..." 
              class="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-neon-cyan transition-all text-white placeholder-gray-500"
            />
            <button @click="sendChat" class="bg-neon-cyan text-black px-3 py-2 rounded-xl text-xs font-bold hover:bg-white transition-all shadow-neon-cyan/20">
              Kirim
            </button>
          </div>
        </div>
      </Transition>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const isLoading = ref(true)
const isLiveChatOpen = ref(false)
const chatMessages = ref([])
const newMsg = ref('')

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })

  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

const toggleLiveChat = () => {
  isLiveChatOpen.value = !isLiveChatOpen.value
}

const sendChat = () => {
  if (newMsg.value.trim()) {
    chatMessages.value.push(newMsg.value)
    newMsg.value = ''
    setTimeout(() => {
      chatMessages.value.push('Terima kasih atas pesannya! Tim support kami akan segera membalas lewat email/WA terdaftar Anda. 😊')
    }, 1500)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.3s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
