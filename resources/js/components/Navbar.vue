<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b"
    :class="[
      isScrolled 
        ? 'bg-[#09090e]/85 backdrop-blur-md border-white/10 shadow-neon-purple/5 py-3' 
        : 'bg-transparent border-transparent py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-neon-cyan/20 group-hover:scale-105 transition-transform duration-300 p-1">
            <img src="/images/logo.png" alt="JohenGaming Logo" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col">
            <span class="font-black text-lg tracking-wider bg-gradient-to-r from-white via-neutral-200 to-neon-cyan bg-clip-text text-transparent group-hover:text-neon-cyan transition-colors duration-300">
              JOHEN<span class="text-neon-magenta">GAMING</span>
            </span>
            <span class="text-[9px] text-gray-400 tracking-widest uppercase -mt-1 font-bold">Premium Store</span>
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1">
          <router-link 
            v-for="item in menuItems" 
            :key="item.name" 
            :to="item.path"
            class="px-4 py-2 rounded-xl text-sm font-semibold tracking-wide text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-all duration-300 relative group"
            active-class="text-neon-cyan bg-white/5"
          >
            {{ item.label }}
            <!-- Active indicator dot -->
            <span class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </router-link>
        </div>

        <!-- Buttons -->
        <div class="hidden md:flex items-center gap-4">
          <button @click="openAuthModal('login')" class="text-sm font-bold tracking-wide text-gray-300 hover:text-white transition-colors duration-300">
            Masuk
          </button>
          <button 
            @click="openAuthModal('register')" 
            class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold tracking-wide text-white rounded-xl group bg-gradient-to-br from-neon-purple via-neon-magenta to-neon-cyan hover:text-white focus:ring-2 focus:outline-none focus:ring-neon-purple/50"
          >
            <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-[#09090e] rounded-10px group-hover:bg-opacity-0">
              Daftar Sekarang
            </span>
          </button>
        </div>

        <!-- Mobile Menu Trigger -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-neon-cyan transition-colors"
          aria-label="Toggle Menu"
        >
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <Transition name="fade">
      <div 
        v-if="isMobileMenuOpen" 
        @click="isMobileMenuOpen = false" 
        class="fixed inset-0 top-[70px] bg-black/60 backdrop-blur-sm z-30 md:hidden"
      ></div>
    </Transition>

    <!-- Mobile Drawer Menu -->
    <Transition name="slide-left">
      <div 
        v-if="isMobileMenuOpen" 
        class="fixed top-[70px] right-0 bottom-0 w-72 bg-[#0c0c16]/95 border-l border-white/10 z-40 p-6 md:hidden flex flex-col justify-between"
      >
        <div class="space-y-4">
          <router-link 
            v-for="item in menuItems" 
            :key="item.name" 
            :to="item.path"
            @click="isMobileMenuOpen = false"
            class="flex items-center px-4 py-3 rounded-xl text-base font-bold tracking-wide text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-all duration-300"
            active-class="text-neon-cyan bg-white/5"
          >
            {{ item.label }}
          </router-link>
        </div>

        <div class="space-y-3 pt-6 border-t border-white/10">
          <button 
            @click="isMobileMenuOpen = false; openAuthModal('login')" 
            class="w-full py-3 rounded-xl border border-white/10 text-center font-bold text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Masuk
          </button>
          <button 
            @click="isMobileMenuOpen = false; openAuthModal('register')" 
            class="w-full py-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-magenta text-center font-bold text-sm text-white hover:shadow-lg hover:shadow-neon-purple/30 transition-all"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </Transition>

    <!-- Auth Modal -->
    <Transition name="fade">
      <div v-if="isAuthModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div class="relative w-full max-w-md glassmorphism border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl shadow-neon-purple/10">
          <!-- Close btn -->
          <button 
            @click="isAuthModalOpen = false"
            class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Glowing blobs inside modal -->
          <div class="absolute -top-12 -left-12 w-32 h-32 bg-neon-purple/20 rounded-full blur-2xl"></div>
          <div class="absolute -bottom-12 -right-12 w-32 h-32 bg-neon-cyan/20 rounded-full blur-2xl"></div>

          <!-- Title -->
          <div class="text-center mb-6 relative">
            <h3 class="text-2xl font-black tracking-wide bg-gradient-to-r from-white via-neon-cyan to-neon-purple bg-clip-text text-transparent uppercase">
              {{ authType === 'login' ? 'Selamat Datang' : 'Buat Akun Baru' }}
            </h3>
            <p class="text-xs text-gray-400 mt-2">
              {{ authType === 'login' ? 'Masuk untuk memantau status pesanan dan joki Anda.' : 'Daftar dan nikmati cashback & promo eksklusif gamers!' }}
            </p>
          </div>

          <!-- Forms -->
          <form @submit.prevent="handleAuthSubmit" class="space-y-4 relative">
            <div v-if="authType === 'register'">
              <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Nama Lengkap</label>
              <input 
                type="text" 
                placeholder="Masukkan nama Anda" 
                required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-cyan transition-all text-white placeholder-gray-600"
              />
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Email / No. Handphone</label>
              <input 
                type="text" 
                placeholder="gamingpartner@gmail.com" 
                required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-cyan transition-all text-white placeholder-gray-600"
              />
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-cyan transition-all text-white placeholder-gray-600"
              />
            </div>

            <button 
              type="submit" 
              class="w-full py-3.5 bg-gradient-to-r from-neon-purple to-neon-magenta hover:from-neon-magenta hover:to-neon-cyan text-white text-sm font-bold tracking-widest rounded-xl transition-all duration-500 shadow-lg hover:shadow-neon-cyan/20 border border-white/15 uppercase mt-6"
            >
              {{ authType === 'login' ? 'Masuk Akun' : 'Daftar Sekarang' }}
            </button>
          </form>

          <!-- Toggle -->
          <div class="text-center mt-6 text-xs text-gray-400 relative">
            {{ authType === 'login' ? 'Belum punya akun?' : 'Sudah punya akun?' }}
            <button 
              @click="authType = (authType === 'login' ? 'register' : 'login')" 
              class="text-neon-cyan hover:underline ml-1 font-bold"
            >
              {{ authType === 'login' ? 'Daftar di sini' : 'Masuk di sini' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>

  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isAuthModalOpen = ref(false)
const authType = ref('login')

const menuItems = [
  { name: 'home', label: 'Home', path: '/' },
  { name: 'topup', label: 'Top Up Game', path: '/#topup' },
  { name: 'joki', label: 'Joki Rank', path: '/#joki' },
  { name: 'voucher', label: 'Voucher', path: '/#voucher' },
  { name: 'promo', label: 'Promo Gila', path: '/#promo' },
  { name: 'cek-transaksi', label: 'Cek Transaksi', path: '/cek-transaksi' },
  { name: 'leaderboard', label: 'Leaderboard', path: '/leaderboard' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const openAuthModal = (type) => {
  authType.value = type
  isAuthModalOpen.value = true
}

const handleAuthSubmit = () => {
  alert(`${authType.value === 'login' ? 'Login' : 'Pendaftaran'} berhasil! Selamat datang di JohenGaming.`)
  isAuthModalOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(100%);
}

/* Custom rounded corner trick for button */
.rounded-10px {
  border-radius: 10px;
}
</style>
