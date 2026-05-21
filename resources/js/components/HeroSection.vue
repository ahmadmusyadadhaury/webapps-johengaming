<template>
  <section class="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
    
    <!-- Background Animated Grid and glowing spots -->
    <div class="absolute inset-0 bg-grid-pattern opacity-60"></div>
    <div class="absolute top-[10%] left-[-10%] w-[350px] h-[350px] bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-neon-cyan/15 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- Floating Gaming Elements (Controller, Sword, Diamond, Coin) -->
    <div class="absolute top-24 left-[8%] animate-float pointer-events-none hidden lg:block" style="animation-delay: 0s;">
      <div class="w-12 h-12 rounded-2xl glassmorphism flex items-center justify-center border-neon-purple/30 text-neon-purple">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </div>
    </div>
    
    <div class="absolute bottom-24 left-[5%] animate-float pointer-events-none hidden lg:block" style="animation-delay: 2s; animation-duration: 7s;">
      <div class="w-14 h-14 rounded-2xl glassmorphism flex items-center justify-center border-neon-cyan/30 text-neon-cyan shadow-neon-cyan/10">
        <!-- Diamond Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </div>
    </div>

    <div class="absolute top-[20%] right-[8%] animate-float pointer-events-none hidden lg:block" style="animation-delay: 1s; animation-duration: 8s;">
      <div class="w-12 h-12 rounded-2xl glassmorphism flex items-center justify-center border-neon-magenta/30 text-neon-magenta shadow-neon-magenta/10">
        <!-- Controller Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      <!-- Text CTA Block (Left) -->
      <div class="lg:col-span-5 flex flex-col justify-center space-y-6 text-center lg:text-left mt-8 lg:mt-0" data-aos="fade-right">
        
        <!-- Premium Tag -->
        <div class="inline-flex items-center justify-center lg:justify-start">
          <span class="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-neon-purple/20 via-neon-magenta/20 to-neon-cyan/20 border border-neon-purple/40 text-neon-cyan flex items-center gap-2 animate-pulse">
            <span class="w-2 h-2 rounded-full bg-neon-cyan"></span>
            #1 Terpercaya & Instant Otomatis
          </span>
        </div>

        <!-- Big Headline -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          TOP UP GAME<br/>
          <span class="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">
            CEPAT, MURAH &
          </span><br/>
          <span class="text-white relative">
            AMAN 100%
            <span class="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"></span>
          </span>
        </h1>

        <!-- Short Subdescription -->
        <p class="text-gray-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 font-medium">
          Dapatkan Diamond, Voucher, & Jasa Joki Rank dengan harga termurah di Indonesia. Proses instan 24/7 otomatis tanpa nunggu lama!
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a 
            href="#topup" 
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-cyan text-white text-base font-extrabold uppercase tracking-wider text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-neon-purple/40 border border-white/10 hover:shadow-neon-cyan/35"
          >
            🚀 Top Up Sekarang
          </a>
          <a 
            href="#promo" 
            class="w-full sm:w-auto px-8 py-4 rounded-2xl glassmorphism hover:bg-white/5 text-white text-base font-extrabold uppercase tracking-wider text-center transition-all duration-300 hover:scale-105 border border-white/10 hover:border-neon-cyan/50 flex items-center justify-center gap-2"
          >
            🔥 Lihat Promo Gila
          </a>
        </div>

        <!-- Statistics Banner Grid -->
        <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-md mx-auto lg:mx-0">
          <div class="text-center lg:text-left">
            <h4 class="text-2xl sm:text-3xl font-black text-glow-cyan text-neon-cyan">100K+</h4>
            <p class="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-bold">Transaksi Sukses</p>
          </div>
          <div class="text-center lg:text-left border-x border-white/10 px-2">
            <h4 class="text-2xl sm:text-3xl font-black text-glow-purple text-neon-purple">50K+</h4>
            <p class="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-bold">Gamers Aktif</p>
          </div>
          <div class="text-center lg:text-left">
            <h4 class="text-2xl sm:text-3xl font-black text-glow-magenta text-neon-magenta">24/7</h4>
            <p class="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-bold">Layanan Online</p>
          </div>
        </div>

      </div>

      <!-- Banner Slider Block (Right) -->
      <div class="lg:col-span-7 w-full relative z-10 mt-6 lg:mt-0 px-2" data-aos="fade-left" data-aos-delay="200">
        <div class="relative rounded-3xl p-2 bg-gradient-to-r from-neon-purple/30 via-neon-magenta/30 to-neon-cyan/30 shadow-neon-purple/10 border border-white/10 overflow-hidden">
          
          <!-- Swiper container -->
          <swiper
            :modules="swiperModules"
            :slides-per-view="1"
            :space-between="20"
            :loop="true"
            :autoplay="{ delay: 5000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            :effect="'fade'"
            class="rounded-2xl overflow-hidden aspect-[16/9] w-full"
          >
            <swiper-slide v-for="(slide, idx) in slides" :key="idx" class="relative group overflow-hidden">
              <img 
                :src="slide.image" 
                :alt="slide.title" 
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[6s]"
              />
              <!-- Dark overlay with color glow -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
                <span class="text-neon-cyan text-xs font-black uppercase tracking-widest">{{ slide.category }}</span>
                <h3 class="text-2xl md:text-3.5xl font-black mt-1 leading-tight text-white text-glow-cyan">
                  {{ slide.title }}
                </h3>
                <p class="text-gray-300 text-xs md:text-sm mt-2 max-w-md font-semibold">
                  {{ slide.desc }}
                </p>
                <div class="mt-4 flex items-center gap-3">
                  <a :href="slide.link" class="px-5 py-2 rounded-xl bg-neon-cyan text-black font-extrabold text-xs uppercase hover:bg-white transition-all tracking-wider shadow-neon-cyan/20">
                    Serbu Sekarang
                  </a>
                  <span class="text-neon-magenta text-xs font-black bg-neon-magenta/15 px-3 py-1.5 rounded-lg border border-neon-magenta/25 uppercase">
                    Diskon {{ slide.discount }}
                  </span>
                </div>
              </div>
            </swiper-slide>
          </swiper>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'

// Swiper standard CSS modules
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const swiperModules = [Autoplay, Pagination, EffectFade]

const slides = ref([
  {
    title: 'MOBILE LEGENDS: BANG BANG',
    category: 'PROMO BULANAN',
    desc: 'Top up Diamond hemat hingga 30% hari ini. Dapatkan skin Epic & Legend idaman kamu dengan pengiriman super cepat 5 detik!',
    discount: '30%',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    link: '#topup'
  },
  {
    title: 'VALORANT: PREMIER ACT',
    category: 'VOUCHER EXCLUSIVE',
    desc: 'Beli Valorant Points instant termurah seluruh Indonesia. Unlock skin Reaver & Prime kamu sekarang juga secara aman 100%!',
    discount: '15%',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=1200&q=80',
    link: '#topup'
  },
  {
    title: 'GENSHIN IMPACT: BLESSING WELKIN',
    category: 'LIMITED PACK',
    desc: 'Blessing of the Welkin Moon & Genesis Crystals super hemat. Proses instan otomatis hanya menggunakan UID & Server.',
    discount: '25%',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    link: '#topup'
  }
])
</script>

<style scoped>
/* Scoped adjustments for swiper pagination or layout height */
.text-glow-cyan {
  text-shadow: 0 0 8px rgba(0, 245, 212, 0.5);
}
.text-glow-purple {
  text-shadow: 0 0 8px rgba(157, 78, 221, 0.5);
}
.text-glow-magenta {
  text-shadow: 0 0 8px rgba(255, 0, 127, 0.5);
}
</style>
