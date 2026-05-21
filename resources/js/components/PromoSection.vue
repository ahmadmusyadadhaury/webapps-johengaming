<template>
  <section id="promo" class="py-20 relative overflow-hidden bg-gradient-to-b from-[#09090e] to-[#0c0c16]">
    
    <!-- Decorative neon lines and circles -->
    <div class="absolute top-[30%] left-[-15%] w-[450px] h-[450px] bg-neon-magenta/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header with Countdown -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16" data-aos="fade-down">
        <div class="lg:col-span-6 space-y-4 text-center lg:text-left">
          <span class="text-xs font-black uppercase tracking-widest text-neon-magenta bg-neon-magenta/10 px-4 py-1.5 rounded-full border border-neon-magenta/25">
            🔥 PROMO TERBATAS
          </span>
          <h2 class="text-3xl sm:text-4.5xl font-black leading-tight text-white">
            SERBU PROMO GILA<br/>
            <span class="bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              GAMERS SEJATI!
            </span>
          </h2>
          <p class="text-gray-400 text-sm font-semibold max-w-xl mx-auto lg:mx-0">
            Jangan sampai ketinggalan flash sale dan cashback gila-gilaan khusus hari ini. Top up sekarang sebelum waktu promo berakhir!
          </p>
        </div>

        <!-- Countdown Timer Block (Right) -->
        <div class="lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
          <div class="glassmorphism border-neon-magenta/30 p-6 rounded-3xl text-center max-w-sm w-full shadow-neon-magenta/10">
            <h4 class="text-xs font-black uppercase text-neon-magenta tracking-widest mb-3">Sisa Waktu Flash Sale</h4>
            
            <div class="flex justify-center items-center gap-3">
              <div class="bg-white/5 border border-white/10 rounded-2xl p-3 w-16 sm:w-20">
                <span class="text-2xl sm:text-3xl font-black text-neon-cyan">{{ hours }}</span>
                <span class="block text-[9px] uppercase tracking-wider text-gray-400 mt-1">Jam</span>
              </div>
              <span class="text-2xl font-black text-neon-magenta animate-pulse">:</span>
              <div class="bg-white/5 border border-white/10 rounded-2xl p-3 w-16 sm:w-20">
                <span class="text-2xl sm:text-3xl font-black text-neon-purple">{{ minutes }}</span>
                <span class="block text-[9px] uppercase tracking-wider text-gray-400 mt-1">Menit</span>
              </div>
              <span class="text-2xl font-black text-neon-magenta animate-pulse">:</span>
              <div class="bg-white/5 border border-white/10 rounded-2xl p-3 w-16 sm:w-20">
                <span class="text-2xl sm:text-3xl font-black text-neon-magenta">{{ seconds }}</span>
                <span class="block text-[9px] uppercase tracking-wider text-gray-400 mt-1">Detik</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Promo Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(promo, index) in promos" 
          :key="promo.id"
          class="relative group rounded-3xl glassmorphism border border-white/10 hover:border-neon-purple/40 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-neon-purple/5"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Shiny colorful top border line -->
          <div class="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-cyan"></div>

          <!-- Promo Badge Ribbon -->
          <span class="absolute top-4 right-4 bg-gradient-to-r from-neon-magenta to-neon-purple text-[9px] font-black tracking-widest px-3 py-1.5 rounded-lg uppercase border border-white/10 shadow-md">
            DISKON {{ promo.discount }}
          </span>

          <!-- Icon & Header Info -->
          <div>
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-neon-purple/20 to-neon-magenta/20 border border-neon-purple/30 flex items-center justify-center text-2xl mb-6 shadow-inner">
              {{ promo.icon }}
            </div>
            
            <h3 class="text-lg font-black text-white group-hover:text-neon-cyan transition-colors uppercase leading-snug">
              {{ promo.title }}
            </h3>
            <p class="text-gray-400 text-xs mt-2 font-semibold">
              {{ promo.description }}
            </p>
          </div>

          <!-- Promo Code & Action -->
          <div class="mt-8 space-y-4">
            <div class="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-3">
              <div>
                <span class="block text-[8px] uppercase tracking-widest text-gray-500 font-bold">Kode Voucher</span>
                <span class="font-black text-sm tracking-wider text-neon-cyan font-mono">{{ promo.code }}</span>
              </div>
              <button 
                @click="copyCode(promo.code)"
                class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-neon-cyan hover:text-black hover:border-neon-cyan text-xs font-bold transition-all uppercase tracking-wider"
              >
                Kopas
              </button>
            </div>

            <a 
              href="#topup" 
              class="block w-full text-center py-3 bg-gradient-to-r from-neon-purple to-neon-magenta text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:shadow-lg hover:shadow-neon-purple/20 transition-all border border-white/10"
            >
              Gunakan Promo
            </a>
          </div>

        </div>
      </div>

      <!-- Why Choose Us block within Promo page -->
      <div class="mt-24 glassmorphism border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <!-- background glows -->
        <div class="absolute bottom-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl"></div>
        
        <div class="text-center max-w-2xl mx-auto mb-12" data-aos="zoom-in">
          <span class="text-[10px] font-black uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-4 py-1.5 rounded-full border border-neon-cyan/25">
            💎 KEUNGGULAN KAMI
          </span>
          <h3 class="text-2xl sm:text-3.5xl font-black mt-4 leading-tight">
            KENAPA HARUS DI JOHENGAMING?
          </h3>
          <p class="text-gray-400 text-xs sm:text-sm mt-3 font-semibold">
            Berikut adalah pilar pelayanan utama kami yang membuat kami menjadi pilihan jutaan gamers di seluruh Indonesia.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="feature.title" 
            class="space-y-3 group text-center sm:text-left"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-cyan/40 group-hover:bg-neon-cyan/10 flex items-center justify-center text-xl transition-all duration-300 mx-auto sm:mx-0">
              {{ feature.icon }}
            </div>
            <h4 class="font-extrabold text-sm text-white uppercase tracking-wider group-hover:text-neon-cyan transition-colors">
              {{ feature.title }}
            </h4>
            <p class="text-gray-400 text-xs leading-relaxed font-semibold">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const hours = ref('02')
const minutes = ref('45')
const seconds = ref('12')

let countdownInterval = null

const startCountdown = () => {
  let totalSeconds = 2 * 3600 + 45 * 60 + 12
  
  countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      totalSeconds = 3 * 3600 // Restart simulator timer
    }
    totalSeconds--
    
    const hrs = Math.floor(totalSeconds / 3600)
    const mins = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    
    hours.value = hrs.toString().padStart(2, '0')
    minutes.value = mins.toString().padStart(2, '0')
    seconds.value = secs.toString().padStart(2, '0')
  }, 1000)
}

onMounted(() => {
  startCountdown()
})

onUnmounted(() => {
  if (countdownInterval) clearInterval(countdownInterval)
})

const promos = ref([
  {
    id: 1,
    icon: '💳',
    title: 'CASHBACK 50% QRIS ALL GAMES',
    description: 'Promo cashback instan tanpa minimum order khusus pembayaran via QRIS otomatis. Berlaku untuk seluruh game & voucher digital.',
    discount: '50%',
    code: 'JOHENQRIS50'
  },
  {
    id: 2,
    icon: '💎',
    title: 'WEEKLY DIAMOND PASS 40% OFF',
    description: 'Beli Weekly Diamond Pass MLBB super murah hanya dengan menggunakan ID & Server. Instant delivery dalam waktu 5 detik.',
    discount: '40%',
    code: 'MLBBWEEKLY40'
  },
  {
    id: 3,
    icon: '💬',
    title: 'DISCORD NITRO PREMIUM SPECIAL SALE',
    description: 'Unlock fiturs premium, server boosting, emoji animasi, custom avatar, & badge spesial dengan diskon eksklusif.',
    discount: '20%',
    code: 'NITROGAMING'
  }
])

const features = [
  {
    icon: '⚡',
    title: 'Proses Instan Otomatis',
    desc: 'Semua transaksi diproses secara real-time oleh server kami tanpa perlu menunggu verifikasi admin manual.'
  },
  {
    icon: '💳',
    title: 'Metode Pembayaran Lengkap',
    desc: 'Mulai dari QRIS, E-Wallet (Dana, OVO, GoPay), Virtual Account Bank, hingga minimarket Alfamart & Indomaret.'
  },
  {
    icon: '🛡',
    title: 'Aman & Terpercaya',
    desc: 'Kami adalah partner resmi developer game. Dijamin 100% legal, aman, dan bebas dari resiko ban.'
  },
  {
    icon: '📞',
    title: 'Customer Service 24/7',
    desc: 'Tim customer service support profesional kami siap melayani dan mendampingi keluhan Anda setiap hari tanpa libur.'
  }
]

const copyCode = (code) => {
  navigator.clipboard.writeText(code)
  alert(`Kode promo "${code}" berhasil disalin ke clipboard!`)
}
</script>

<style scoped>
/* Scoped rules for glow effects */
.border-neon-magenta\/30 {
  border-color: rgba(255, 0, 127, 0.3);
}
</style>
