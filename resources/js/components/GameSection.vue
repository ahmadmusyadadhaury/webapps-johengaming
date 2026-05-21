<template>
  <section id="topup" class="py-20 relative">
    
    <!-- Decorative background glow -->
    <div class="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
        <span class="text-xs font-black uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-4 py-1.5 rounded-full border border-neon-cyan/25">
          🎮 GAME STORE
        </span>
        <h2 class="text-3xl sm:text-4.5xl font-black mt-4 leading-tight">
          PILIH PLATFORM
          <span class="bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-cyan bg-clip-text text-transparent">
            GAME TERFAVORIT
          </span> ANDA
        </h2>
        <p class="text-gray-400 text-sm sm:text-base mt-4 font-semibold">
          Proses otomatis, 100% legal, termurah, dan terpercaya. Silakan pilih game atau voucher digital di bawah ini.
        </p>

        <!-- Search Bar and Category Tabs -->
        <div class="mt-8 flex flex-col md:flex-row items-center gap-4 justify-between glassmorphism p-2.5 rounded-2xl border-white/10">
          <!-- Category Tabs -->
          <div class="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
              :class="[
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-neon-purple to-neon-magenta text-white shadow-lg shadow-neon-purple/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              ]"
            >
              <span>{{ tab.icon }}</span>
              {{ tab.label }}
            </button>
          </div>

          <!-- Search Input -->
          <div class="relative w-full md:w-80">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Cari game kesayanganmu..." 
              class="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-neon-cyan transition-all text-white placeholder-gray-500"
            />
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>

      </div>

      <!-- Tab 1: Top Up Game Grid -->
      <Transition name="fade" mode="out-in">
        <div v-if="activeTab === 'games'" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <div 
            v-for="(game, index) in filteredGames" 
            :key="game.id"
            @click="openCheckoutModal(game, 'topup')"
            class="group cursor-pointer rounded-2xl glassmorphism border border-white/10 hover:border-neon-cyan/40 p-3 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-neon-cyan/5 relative overflow-hidden"
            data-aos="zoom-in"
            :data-aos-delay="index * 50"
          >
            <!-- Hot ribbon -->
            <span v-if="game.isHot" class="absolute top-3 right-3 z-10 bg-gradient-to-r from-neon-magenta to-neon-purple text-[8px] font-black tracking-widest px-2.5 py-1 rounded-md uppercase border border-white/10 animate-pulse">
              HOT
            </span>

            <!-- Image thumbnail with glow border overlay -->
            <div class="relative rounded-xl overflow-hidden aspect-[3/4] mb-4">
              <img 
                :src="game.thumbnail" 
                :alt="game.title" 
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#09090e] via-[#09090e]/10 to-transparent opacity-60"></div>
            </div>

            <!-- Product detail Info -->
            <div class="space-y-1 text-center">
              <h3 class="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-white group-hover:text-neon-cyan transition-colors">
                {{ game.title }}
              </h3>
              <p class="text-[9px] sm:text-xs text-gray-400 font-semibold tracking-wide">
                {{ game.publisher }}
              </p>
              <div class="pt-2 text-[10px] sm:text-xs font-black text-neon-cyan">
                Mulai Rp {{ formatPrice(game.minPrice) }}
              </div>
            </div>

            <!-- Button trigger -->
            <button class="mt-4 w-full py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-wider group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-neon-magenta group-hover:text-white transition-all">
              Top Up
            </button>
          </div>
        </div>

        <!-- Tab 2: Joki Game List -->
        <div v-else-if="activeTab === 'joki'" id="joki" class="space-y-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Information Grid (Left) -->
            <div class="lg:col-span-5 space-y-6" data-aos="fade-right">
              <div class="glassmorphism border border-white/10 rounded-3xl p-6 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-2xl"></div>
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-neon-purple/20 border border-neon-purple/30 rounded-xl flex items-center justify-center text-neon-purple">
                    🏆
                  </div>
                  <div>
                    <h3 class="text-lg font-black tracking-wide text-glow-purple uppercase">Joki Rank Pro</h3>
                    <p class="text-xs text-gray-400 font-bold uppercase">Joki Terpercaya & Cepat Naik</p>
                  </div>
                </div>

                <div class="mt-6 space-y-4 text-xs text-gray-300">
                  <div class="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                    <span class="text-neon-cyan">✔</span>
                    <p>Dikerjakan oleh pro player e-sports berperingkat global tier.</p>
                  </div>
                  <div class="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                    <span class="text-neon-cyan">✔</span>
                    <p>Kerahasiaan akun & keamanan data 100% terjaga rapi.</p>
                  </div>
                  <div class="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                    <span class="text-neon-cyan">✔</span>
                    <p>Estimasi penyelesaian paling cepat (1-2 tier per hari).</p>
                  </div>
                </div>
              </div>

              <!-- Joki Client Review -->
              <div class="glassmorphism border border-white/10 rounded-3xl p-6">
                <div class="flex items-center gap-1 text-neon-cyan text-sm mb-3">⭐⭐⭐⭐⭐</div>
                <p class="text-xs text-gray-300 italic">
                  "Joki Mobile Legends di Johengaming emang gila! Dari Mythic V ke Mythical Glory cuma butuh waktu 2 hari aja. Akun aman dan fast response."
                </p>
                <div class="mt-4 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-neon-purple/40 border border-neon-purple flex items-center justify-center text-[10px] font-bold">R</div>
                  <div>
                    <h4 class="text-xs font-bold">Ronaldo S.</h4>
                    <p class="text-[9px] text-gray-400">Epic Player</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Joki Order Calculator Form (Right) -->
            <div class="lg:col-span-7 glassmorphism border border-white/10 rounded-3xl p-8 relative overflow-hidden" data-aos="fade-left">
              <h3 class="text-xl font-black uppercase tracking-wide bg-gradient-to-r from-white to-neon-purple bg-clip-text text-transparent">
                Kalkulator Order Joki
              </h3>
              <p class="text-xs text-gray-400 mt-1">
                Hitung estimasi biaya joki akun Mobile Legends Anda di bawah ini secara otomatis.
              </p>

              <form @submit.prevent="handleJokiOrder" class="space-y-6 mt-6">
                
                <!-- Account Info -->
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">WhatsApp</label>
                    <input 
                      v-model="jokiForm.whatsapp" 
                      type="text" 
                      placeholder="0812xxxxxx" 
                      required 
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-neon-purple transition-all text-white"
                    />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Pilih Game</label>
                    <select 
                      v-model="jokiForm.game"
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-neon-purple transition-all text-white"
                    >
                      <option value="ml" class="bg-[#09090e]">Mobile Legends</option>
                      <option value="pubg" class="bg-[#09090e]">PUBG Mobile</option>
                      <option value="ff" class="bg-[#09090e]">Free Fire</option>
                    </select>
                  </div>
                </div>

                <!-- Tier Selection -->
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Rank Sekarang</label>
                    <select 
                      v-model="jokiForm.currentRank" 
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-neon-purple transition-all text-white"
                    >
                      <option v-for="tier in tiers" :key="tier.id" :value="tier.value" class="bg-[#09090e]">{{ tier.label }}</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Target Rank</label>
                    <select 
                      v-model="jokiForm.targetRank" 
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-neon-purple transition-all text-white"
                    >
                      <option v-for="tier in filteredTargetTiers" :key="tier.id" :value="tier.value" class="bg-[#09090e]">{{ tier.label }}</option>
                    </select>
                  </div>
                </div>

                <!-- Details & Calculation -->
                <div class="p-4 rounded-2xl bg-neon-purple/10 border border-neon-purple/20 flex justify-between items-center">
                  <div>
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Total Pembayaran</p>
                    <p class="text-xl sm:text-2xl font-black text-neon-cyan">Rp {{ formatPrice(calculatedJokiPrice) }}</p>
                  </div>
                  <button 
                    type="submit" 
                    class="px-6 py-3.5 bg-gradient-to-r from-neon-purple to-neon-magenta hover:from-neon-magenta hover:to-neon-cyan text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-neon-purple/20"
                  >
                    ⚡ Order Cepat
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>

        <!-- Tab 3: Voucher Digital -->
        <div v-else-if="activeTab === 'voucher'" id="voucher" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <div 
            v-for="(voucher, index) in filteredVouchers" 
            :key="voucher.id"
            @click="openCheckoutModal(voucher, 'voucher')"
            class="group cursor-pointer rounded-2xl glassmorphism border border-white/10 hover:border-neon-magenta/40 p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-neon-magenta/5 relative overflow-hidden"
            data-aos="zoom-in"
            :data-aos-delay="index * 50"
          >
            <!-- Icon Voucher -->
            <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-neon-magenta to-neon-purple flex items-center justify-center mb-4 text-xl font-bold text-white shadow-md">
              {{ voucher.icon }}
            </div>

            <!-- Voucher Title -->
            <div class="space-y-1">
              <h3 class="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-white group-hover:text-neon-magenta transition-colors">
                {{ voucher.title }}
              </h3>
              <p class="text-[9px] sm:text-xs text-gray-400 font-semibold tracking-wide">
                {{ voucher.category }}
              </p>
              <div class="pt-2 text-[10px] sm:text-xs font-black text-neon-magenta">
                Mulai Rp {{ formatPrice(voucher.minPrice) }}
              </div>
            </div>

            <!-- Trigger Button -->
            <button class="mt-4 w-full py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-wider group-hover:bg-gradient-to-r group-hover:from-neon-magenta group-hover:to-neon-purple group-hover:text-white transition-all">
              Beli Voucher
            </button>
          </div>
        </div>
      </Transition>

    </div>

    <!-- Checkout Modal popup (Dynamic for top up & voucher) -->
    <Transition name="fade">
      <div v-if="isCheckoutOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div class="relative w-full max-w-2xl glassmorphism border border-white/10 rounded-3xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] shadow-2xl">
          <!-- Close btn -->
          <button 
            @click="closeCheckout"
            class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Modal Title -->
          <div class="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-neon-purple to-neon-cyan flex items-center justify-center text-xl font-bold">
              🎮
            </div>
            <div>
              <h3 class="text-lg font-black tracking-wide text-white uppercase">Checkout: {{ checkoutItem.title }}</h3>
              <p class="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Layanan Instant Johengaming</p>
            </div>
          </div>

          <!-- Checkout Body -->
          <form @submit.prevent="submitCheckout" class="space-y-6">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <!-- Left Column: Input Target Data -->
              <div class="space-y-4">
                <h4 class="text-xs font-black text-neon-cyan uppercase tracking-widest">1. Lengkapi Data Akun</h4>
                
                <div class="space-y-3">
                  <div class="grid grid-cols-2 gap-2" v-if="checkoutType === 'topup'">
                    <div>
                      <label class="block text-[9px] font-black text-gray-400 uppercase mb-1">User ID / Player ID</label>
                      <input 
                        type="text" 
                        placeholder="12345678" 
                        required
                        class="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-neon-cyan transition-all text-white"
                      />
                    </div>
                    <div>
                      <label class="block text-[9px] font-black text-gray-400 uppercase mb-1">Zone ID / Server</label>
                      <input 
                        type="text" 
                        placeholder="(1234)" 
                        required
                        class="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-neon-cyan transition-all text-white"
                      />
                    </div>
                  </div>

                  <div v-else>
                    <label class="block text-[9px] font-black text-gray-400 uppercase mb-1">Nomor WhatsApp Pembeli</label>
                    <input 
                      type="text" 
                      placeholder="0812xxxxxxxx" 
                      required
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-neon-cyan transition-all text-white"
                    />
                  </div>

                  <div>
                    <label class="block text-[9px] font-black text-gray-400 uppercase mb-1">Pilih Item Pembelian</label>
                    <select 
                      v-model="selectedPrice" 
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-neon-cyan transition-all text-white"
                    >
                      <option 
                        v-for="pkg in checkoutItem.packages" 
                        :key="pkg.name" 
                        :value="pkg.price" 
                        class="bg-[#09090e]"
                      >
                        {{ pkg.name }} - Rp {{ formatPrice(pkg.price) }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Right Column: Choose Payment -->
              <div class="space-y-4">
                <h4 class="text-xs font-black text-neon-magenta uppercase tracking-widest">2. Pilih Metode Pembayaran</h4>
                
                <div class="grid grid-cols-2 gap-2 h-44 overflow-y-auto pr-1">
                  <div 
                    v-for="pm in paymentMethods" 
                    :key="pm.id"
                    @click="selectedPayment = pm.id"
                    class="p-2.5 rounded-xl border cursor-pointer flex flex-col justify-between transition-all"
                    :class="[
                      selectedPayment === pm.id 
                        ? 'border-neon-magenta bg-neon-magenta/10 shadow-md shadow-neon-magenta/10' 
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    ]"
                  >
                    <span class="text-xs font-black text-white">{{ pm.name }}</span>
                    <span class="text-[9px] text-neon-cyan mt-1">Admin fee: Rp {{ pm.fee }}</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Footer summary checkout -->
            <div class="p-4 rounded-2xl bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
              <div>
                <p class="text-[9px] text-gray-400 uppercase tracking-widest font-black">Estimasi Total Pembayaran</p>
                <p class="text-xl sm:text-2xl font-black text-neon-cyan">
                  Rp {{ formatPrice(selectedPrice + (paymentMethods.find(p => p.id === selectedPayment)?.fee || 0)) }}
                </p>
              </div>
              <button 
                type="submit" 
                class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-cyan text-white text-xs font-black tracking-widest rounded-xl transition-all shadow-lg hover:shadow-neon-cyan/25 uppercase border border-white/10"
              >
                Bayar Sekarang
              </button>
            </div>

          </form>

        </div>
      </div>
    </Transition>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('games')
const searchQuery = ref('')

const tabs = [
  { id: 'games', label: 'Top Up Game', icon: '🎮' },
  { id: 'joki', label: 'Joki Rank', icon: '🏆' },
  { id: 'voucher', label: 'Voucher Digital', icon: '💳' }
]

// Mock Games data
const games = ref([
  {
    id: 1,
    title: 'Mobile Legends',
    publisher: 'Moonton',
    minPrice: 1200,
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80',
    isHot: true,
    packages: [
      { name: '86 Diamonds', price: 19500 },
      { name: '172 Diamonds', price: 38000 },
      { name: '257 Diamonds', price: 58000 },
      { name: '706 Diamonds', price: 155000 },
      { name: '1412 Diamonds', price: 310000 }
    ]
  },
  {
    id: 2,
    title: 'Free Fire',
    publisher: 'Garena',
    minPrice: 1000,
    thumbnail: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=300&q=80',
    isHot: true,
    packages: [
      { name: '50 Diamonds', price: 8000 },
      { name: '70 Diamonds', price: 10000 },
      { name: '140 Diamonds', price: 20000 },
      { name: '355 Diamonds', price: 48000 },
      { name: '720 Diamonds', price: 95000 }
    ]
  },
  {
    id: 3,
    title: 'PUBG Mobile',
    publisher: 'Level Infinite',
    minPrice: 1500,
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=300&q=80',
    isHot: false,
    packages: [
      { name: '60 UC', price: 13500 },
      { name: '325 UC', price: 65000 },
      { name: '660 UC', price: 130000 },
      { name: '1800 UC', price: 345000 }
    ]
  },
  {
    id: 4,
    title: 'Valorant',
    publisher: 'Riot Games',
    minPrice: 15000,
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80',
    isHot: true,
    packages: [
      { name: '375 Points', price: 45000 },
      { name: '750 Points', price: 89000 },
      { name: '1375 Points', price: 155000 },
      { name: '2400 Points', price: 260000 }
    ]
  },
  {
    id: 5,
    title: 'Genshin Impact',
    publisher: 'COGNOSPHERE',
    minPrice: 16000,
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=300&q=80',
    isHot: false,
    packages: [
      { name: 'Blessing Welkin Moon', price: 62000 },
      { name: '60 Genesis Crystals', price: 16000 },
      { name: '300 Genesis Crystals', price: 79000 },
      { name: '980 Genesis Crystals', price: 245000 }
    ]
  },
  {
    id: 6,
    title: 'Roblox',
    publisher: 'Roblox Corporation',
    minPrice: 14000,
    thumbnail: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=300&q=80',
    isHot: false,
    packages: [
      { name: '80 Robux', price: 15000 },
      { name: '400 Robux', price: 75000 },
      { name: '800 Robux', price: 145000 },
      { name: '1700 Robux', price: 295000 }
    ]
  }
])

// Mock Vouchers data
const vouchers = ref([
  {
    id: 1,
    title: 'Google Play Gift Card',
    category: 'Voucher',
    minPrice: 22000,
    icon: '🤖',
    packages: [
      { name: 'Voucher Rp 20.000', price: 22000 },
      { name: 'Voucher Rp 50.000', price: 53500 },
      { name: 'Voucher Rp 100.000', price: 105000 }
    ]
  },
  {
    id: 2,
    title: 'Steam Wallet IDR',
    category: 'Voucher',
    minPrice: 15000,
    icon: '♨',
    packages: [
      { name: 'Steam Wallet Rp 12.000', price: 15000 },
      { name: 'Steam Wallet Rp 45.000', price: 54000 },
      { name: 'Steam Wallet Rp 90.000', price: 107000 }
    ]
  },
  {
    id: 3,
    title: 'PlayStation Network Card',
    category: 'Voucher',
    minPrice: 105000,
    icon: '🎮',
    packages: [
      { name: 'PSN Card Rp 100.000', price: 107000 },
      { name: 'PSN Card Rp 300.000', price: 319000 }
    ]
  },
  {
    id: 4,
    title: 'Spotify Premium Gift Card',
    category: 'Voucher',
    minPrice: 54000,
    icon: '🎵',
    packages: [
      { name: 'Spotify 1 Bulan Premium', price: 54000 },
      { name: 'Spotify 3 Bulan Premium', price: 159000 }
    ]
  },
  {
    id: 5,
    title: 'Discord Nitro Gift',
    category: 'Voucher',
    minPrice: 29000,
    icon: '💬',
    packages: [
      { name: 'Discord Nitro Classic (1 Mo)', price: 29000 },
      { name: 'Discord Nitro Boost (1 Mo)', price: 95000 }
    ]
  }
])

// Payments List
const paymentMethods = ref([
  { id: 'qris', name: 'QRIS (Instant Otomatis)', fee: 0 },
  { id: 'gopay', name: 'GoPay', fee: 1000 },
  { id: 'dana', name: 'DANA', fee: 800 },
  { id: 'ovo', name: 'OVO', fee: 1200 },
  { id: 'shopeepay', name: 'ShopeePay', fee: 1000 },
  { id: 'bca', name: 'BCA Virtual Account', fee: 2000 },
  { id: 'mandiri', name: 'Mandiri Virtual Account', fee: 2000 }
])

// Joki Tiers
const tiers = [
  { id: 1, label: 'Grandmaster (Rp 3.000 / Bintang)', value: 'gm', pricePerStar: 3000 },
  { id: 2, label: 'Epic (Rp 5.000 / Bintang)', value: 'epic', pricePerStar: 5000 },
  { id: 3, label: 'Legend (Rp 8.000 / Bintang)', value: 'legend', pricePerStar: 8000 },
  { id: 4, label: 'Mythic (Rp 12.000 / Bintang)', value: 'mythic', pricePerStar: 12000 },
  { id: 5, label: 'Mythical Glory (Rp 18.000 / Bintang)', value: 'glory', pricePerStar: 18000 }
]

const jokiForm = ref({
  whatsapp: '',
  game: 'ml',
  currentRank: 'gm',
  targetRank: 'epic'
})

// Computeds for calculation
const filteredTargetTiers = computed(() => {
  const curIndex = tiers.findIndex(t => t.value === jokiForm.value.currentRank)
  return tiers.slice(curIndex + 1)
})

const calculatedJokiPrice = computed(() => {
  const currentTier = tiers.find(t => t.value === jokiForm.value.currentRank)
  const targetTier = tiers.find(t => t.value === jokiForm.value.targetRank)
  if (!currentTier || !targetTier) return 0
  
  // Simulated number of stars between selected tiers: say 5 stars per tier step
  const currentIndex = tiers.indexOf(currentTier)
  const targetIndex = tiers.indexOf(targetTier)
  const steps = targetIndex - currentIndex
  
  if (steps <= 0) return 0
  
  // Simple formula: steps * 5 stars * mid tier rate
  return steps * 5 * targetTier.pricePerStar
})

// Checkout management
const isCheckoutOpen = ref(false)
const checkoutItem = ref({})
const checkoutType = ref('topup')
const selectedPrice = ref(0)
const selectedPayment = ref('qris')

const openCheckoutModal = (item, type) => {
  checkoutItem.value = item
  checkoutType.value = type
  selectedPrice.value = item.packages[0].price
  isCheckoutOpen.value = true
}

const closeCheckout = () => {
  isCheckoutOpen.value = false
}

const submitCheckout = () => {
  alert(`Pesanan Anda untuk "${checkoutItem.value.title}" telah diterima! Silakan lakukan pembayaran di invoice berikutnya. Terima kasih.`)
  isCheckoutOpen.value = false
}

const handleJokiOrder = () => {
  alert(`Pesanan Joki Rank Mobile Legends berhasil dikalkulasi dengan estimasi biaya Rp ${formatPrice(calculatedJokiPrice.value)}! Admin kami akan menghubungi Anda di ${jokiForm.value.whatsapp} dalam waktu 10 menit.`)
}

// Helpers
const formatPrice = (val) => {
  return new Intl.NumberFormat('id-ID').format(val)
}

// Filter Computeds
const filteredGames = computed(() => {
  return games.value.filter(g => 
    g.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const filteredVouchers = computed(() => {
  return vouchers.value.filter(v => 
    v.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
