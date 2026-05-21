<template>
  <div class="min-h-[80vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="max-w-3xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-12" data-aos="fade-down">
        <span class="text-xs font-black uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-4 py-1.5 rounded-full border border-neon-cyan/25">
          🔍 Lacak Pesanan
        </span>
        <h1 class="text-3xl sm:text-5xl font-black mt-6 leading-tight text-white uppercase">
          Cek Status <span class="text-neon-cyan">Transaksi</span>
        </h1>
        <p class="text-gray-400 text-sm mt-4 font-semibold">
          Lacak status pesanan top up, voucher, atau joki rank Anda secara real-time hanya dengan memasukkan Nomor Invoice / Pesanan di bawah ini.
        </p>
      </div>

      <!-- Tracking Form -->
      <div class="glassmorphism rounded-3xl border border-white/10 p-8 sm:p-10 relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
        <!-- Glow effect -->
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-neon-purple/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        <form @submit.prevent="checkTransaction" class="relative z-10 space-y-6">
          <div>
            <label class="block text-xs font-black text-white uppercase tracking-widest mb-3">Nomor Invoice / Transaksi</label>
            <div class="relative">
              <input 
                v-model="invoice"
                type="text" 
                placeholder="Contoh: INV-JG-123456789" 
                required
                class="w-full bg-[#09090e]/80 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-neon-cyan transition-all text-white font-mono uppercase tracking-wider shadow-inner"
              />
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-neon-cyan">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </div>

          <button 
            type="submit" 
            class="w-full py-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-sm font-black tracking-widest uppercase rounded-2xl hover:shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300 border border-white/10 flex items-center justify-center gap-2 group"
          >
            <span>Cari Pesanan</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>

      <!-- Dummy Search Result (Appears when searched) -->
      <Transition name="fade">
        <div v-if="searchResult" class="mt-8 glassmorphism border border-neon-cyan/30 rounded-3xl p-6 sm:p-8" data-aos="fade-up">
          <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div>
              <h3 class="text-white font-black text-lg">Detail Pesanan</h3>
              <p class="text-neon-cyan font-mono text-sm mt-1">{{ invoice }}</p>
            </div>
            <div class="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 font-bold text-xs uppercase tracking-widest">
              Sukses
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Item</p>
              <p class="text-white font-semibold">1412 Diamonds - Mobile Legends</p>
            </div>
            <div>
              <p class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Total Bayar</p>
              <p class="text-white font-semibold font-mono">Rp 310.000</p>
            </div>
            <div>
              <p class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Metode</p>
              <p class="text-white font-semibold">QRIS</p>
            </div>
            <div>
              <p class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Tanggal</p>
              <p class="text-white font-semibold">21 Mei 2026 15:30 WIB</p>
            </div>
          </div>
        </div>
      </Transition>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const invoice = ref('')
const searchResult = ref(false)

const checkTransaction = () => {
  searchResult.value = false
  // Simulate network request
  setTimeout(() => {
    searchResult.value = true
  }, 600)
}

onMounted(() => {
  window.scrollTo(0, 0)
})
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
</style>
