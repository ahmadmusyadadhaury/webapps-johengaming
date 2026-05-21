<template>
  <section class="py-20 relative overflow-hidden bg-[#0c0c16]">
    
    <!-- Neon grid patterns -->
    <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
    <div class="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Testimonials Header -->
      <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-down">
        <span class="text-xs font-black uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-4 py-1.5 rounded-full border border-neon-cyan/25">
          ⭐ TESTIMONI GAMERS
        </span>
        <h2 class="text-3xl sm:text-4.5xl font-black mt-4 leading-tight text-white">
          APA KATA
          <span class="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">
            MEREKA YANG PUAS?
          </span>
        </h2>
        <p class="text-gray-400 text-sm font-semibold mt-4">
          Lebih dari 50,000+ gamers dari pro-player hingga casual-player mempercayakan kebutuhan gaming mereka hanya kepada kami.
        </p>
      </div>

      <!-- Testimonials Slider (Swiper or Slider Grid for compatibility) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(testi, index) in testimonials" 
          :key="testi.id"
          class="glassmorphism border border-white/10 rounded-3xl p-6 relative group hover:border-neon-cyan/30 transition-all duration-300 hover:-translate-y-1"
          data-aos="zoom-in"
          :data-aos-delay="index * 150"
        >
          <!-- Quote Icon -->
          <span class="absolute top-6 right-6 text-4xl text-white/5 font-serif select-none">“</span>
          
          <!-- Stars -->
          <div class="flex items-center gap-1 text-neon-cyan text-sm mb-4">
            <span v-for="star in 5" :key="star">★</span>
          </div>

          <!-- Comment text -->
          <p class="text-xs sm:text-sm text-gray-300 italic leading-relaxed font-semibold">
            "{{ testi.comment }}"
          </p>

          <!-- User Profiling -->
          <div class="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
            <div class="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-tr from-neon-purple to-neon-magenta p-0.5 shadow-md">
              <img :src="testi.avatar" :alt="testi.name" loading="lazy" class="w-full h-full object-cover rounded-full bg-[#09090e]" />
            </div>
            <div>
              <h4 class="text-xs sm:text-sm font-black text-white uppercase tracking-wider">{{ testi.name }}</h4>
              <p class="text-[9px] text-neon-cyan uppercase tracking-widest font-black mt-0.5">{{ testi.game }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Accordion Block -->
      <div class="mt-28 max-w-4xl mx-auto" data-aos="fade-up">
        <div class="text-center mb-16">
          <span class="text-xs font-black uppercase tracking-widest text-neon-purple bg-neon-purple/10 px-4 py-1.5 rounded-full border border-neon-purple/25">
            ❓ FAQ HELPDESK
          </span>
          <h2 class="text-2xl sm:text-3.5xl font-black mt-4 text-white uppercase">
            PERTANYAAN YANG SERING DITANYAKAN
          </h2>
          <p class="text-gray-400 text-xs sm:text-sm mt-3 font-semibold">
            Punya kebingungan? Tenang, kami merangkum jawaban atas segala pertanyaan mendasar Anda di sini.
          </p>
        </div>

        <!-- Accordions -->
        <div class="space-y-4">
          <div 
            v-for="(faq, idx) in faqs" 
            :key="idx"
            class="glassmorphism rounded-2xl border transition-all duration-300 overflow-hidden"
            :class="[
              faq.isOpen 
                ? 'border-neon-purple bg-neon-purple/5 shadow-md shadow-neon-purple/5' 
                : 'border-white/10 hover:border-white/20'
            ]"
            data-aos="fade-left"
            :data-aos-delay="idx * 100"
          >
            <!-- Toggle header button -->
            <button 
              @click="toggleFaq(idx)"
              class="w-full px-6 py-4.5 text-left flex justify-between items-center text-sm font-bold uppercase tracking-wider transition-colors duration-300"
              :class="[faq.isOpen ? 'text-neon-cyan' : 'text-white hover:text-neon-cyan']"
            >
              <span>{{ faq.question }}</span>
              <span class="text-lg transition-transform duration-300" :class="{ 'rotate-180 text-neon-cyan': faq.isOpen }">
                ▼
              </span>
            </button>

            <!-- Slide Content pane -->
            <Transition 
              name="expand"
              @enter="enter"
              @after-enter="afterEnter"
              @leave="leave"
            >
              <div v-show="faq.isOpen" class="px-6 pb-5 text-xs text-gray-400 leading-relaxed font-semibold border-t border-white/5 pt-4">
                {{ faq.answer }}
              </div>
            </Transition>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 1,
    name: 'Windi Kartika',
    game: 'Mobile Legends Gamer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    comment: 'Sumpah kaget banget! Diamond MLBB masuk ga nyampe 5 detik setelah pembayaran QRIS kelar. Harganya paling murah dari semua store sebelah. Bakal langganan terus sih!'
  },
  {
    id: 2,
    name: 'Kevin Pratama',
    game: 'Valorant Tournament Player',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    comment: 'Recommended banget buat gamers yang nyari Valorant Points aman & cepat. Kemarin checkout malem-malem pas ada flash sale tetep instan dikirim. Servernya Johengaming top-notch.'
  },
  {
    id: 3,
    name: 'Zulkipli R.',
    game: 'Joki Rank Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    comment: 'Layanan joki rank terbaik yang pernah saya coba. Akun saya dikerjakan dengan sangat rapih oleh pro player mereka. Win rate melonjak tajam dari Epic langsung tembus Mythic!'
  }
])

const faqs = ref([
  {
    question: 'Bagaimana cara melakukan top up di Johengaming?',
    answer: 'Sangat mudah! Pilih game yang Anda inginkan, masukkan User ID & Server Game Anda, pilih paket diamond/item yang Anda inginkan, tentukan metode pembayaran (seperti QRIS atau E-Wallet), lalu lakukan transfer pembayaran. Sistem otomatis kami akan langsung mengirimkan produk game Anda secara real-time.',
    isOpen: false
  },
  {
    question: 'Berapa lama estimasi pengiriman Diamond/Voucher?',
    answer: 'Pengiriman kami didukung oleh sistem Payment Gateway terintegrasi yang instant 24 jam nonstop. Rata-rata transaksi sukses diselesaikan dan masuk ke dalam akun game Anda dalam waktu 3 hingga 10 detik setelah dana pembayaran diterima oleh sistem kami.',
    isOpen: false
  },
  {
    question: 'Apakah produk top up game di sini legal dan aman?',
    answer: 'Ya, 100% legal dan resmi! Kami bekerjasama secara langsung dengan pihak publisher game dan distributor resmi (authorized partner). Akun game Anda dijamin aman 100% bebas dari bahaya banned ataupun diamond minus.',
    isOpen: false
  },
  {
    question: 'Bagaimana jika terdapat kendala saat transaksi?',
    answer: 'Tenang, Anda bisa menghubungi tim Support CS kami yang bersiaga 24 jam nonstop setiap hari melalui WhatsApp Official kami di tombol pojok kanan bawah atau Live Chat Assistant di pojok kiri bawah. Kami siap membantu menyelesaikan kendala Anda sampai tuntas.',
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqs.value.forEach((faq, idx) => {
    if (idx === index) {
      faq.isOpen = !faq.isOpen
    } else {
      faq.isOpen = false
    }
  })
}

// Height Transitions helpers for smooth FAQ accordion sliding
const enter = (el) => {
  el.style.height = 'auto'
  const height = el.clientHeight
  el.style.height = '0px'
  el.offsetHeight // trigger reflow
  el.style.transition = 'height 300s ease' // Wait, actually standard CSS transition-all or style binding works
  el.style.height = height + 'px'
  el.style.overflow = 'hidden'
}
const afterEnter = (el) => {
  el.style.height = 'auto'
}
const leave = (el) => {
  const height = el.clientHeight
  el.style.height = height + 'px'
  el.offsetHeight // trigger reflow
  el.style.height = '0px'
  el.style.overflow = 'hidden'
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease-in-out;
}
.expand-enter-from,
.expand-leave-to {
  height: 0 !important;
  opacity: 0;
  padding-bottom: 0 !important;
  padding-top: 0 !important;
}
</style>
