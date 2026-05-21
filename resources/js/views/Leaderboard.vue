<template>
  <div class="min-h-[80vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    
    <!-- Header -->
    <div class="text-center mb-12" data-aos="fade-down">
      <span class="text-xs font-black uppercase tracking-widest text-neon-magenta bg-neon-magenta/10 px-4 py-1.5 rounded-full border border-neon-magenta/25">
        🏆 The Best Gamers
      </span>
      <h1 class="text-3xl sm:text-5xl font-black mt-6 leading-tight text-white uppercase">
        Top <span class="bg-gradient-to-r from-neon-purple to-neon-magenta bg-clip-text text-transparent">Leaderboard</span>
      </h1>
      <p class="text-gray-400 text-sm mt-4 font-semibold max-w-2xl mx-auto">
        Daftar pembeli terbanyak (Sultan) di JohenGaming bulan ini. Kumpulkan total transaksi terbanyak dan raih hadiah eksklusif mingguan!
      </p>
    </div>

    <!-- Leaderboard Table -->
    <div class="glassmorphism rounded-3xl border border-white/10 overflow-hidden relative" data-aos="fade-up" data-aos-delay="100">
      <div class="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-white/5 border-b border-white/10 text-xs font-black uppercase tracking-widest text-gray-400">
              <th class="py-4 px-6">Rank</th>
              <th class="py-4 px-6">Sultan Gamers</th>
              <th class="py-4 px-6 text-center">Total Transaksi</th>
              <th class="py-4 px-6 text-right">Badge</th>
            </tr>
          </thead>
          <tbody class="text-sm font-semibold text-white">
            <tr 
              v-for="(user, index) in topUsers" 
              :key="user.id"
              class="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <td class="py-4 px-6">
                <!-- Trophy for top 3 -->
                <span v-if="index === 0" class="text-3xl drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]">🥇</span>
                <span v-else-if="index === 1" class="text-2xl drop-shadow-[0_0_8px_rgba(192,192,192,0.8)]">🥈</span>
                <span v-else-if="index === 2" class="text-2xl drop-shadow-[0_0_8px_rgba(205,127,50,0.8)]">🥉</span>
                <span v-else class="text-lg font-black text-gray-500 w-8 inline-block text-center">#{{ index + 1 }}</span>
              </td>
              <td class="py-4 px-6">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-tr border border-white/20 p-0.5" 
                    :class="index === 0 ? 'from-yellow-400 to-yellow-600' : 'from-neon-purple to-neon-cyan'">
                    <img :src="user.avatar" class="w-full h-full object-cover rounded-full bg-[#09090e]"/>
                  </div>
                  <div>
                    <h4 class="font-black" :class="index === 0 ? 'text-yellow-400 text-glow-yellow' : 'text-white'">
                      {{ user.name }}
                    </h4>
                    <p class="text-[10px] text-gray-500 mt-0.5 tracking-wider">{{ user.id }}</p>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6 text-center">
                <span class="font-mono text-neon-cyan font-bold bg-neon-cyan/10 px-3 py-1 rounded-lg border border-neon-cyan/20">
                  Rp {{ formatPrice(user.totalSpent) }}
                </span>
              </td>
              <td class="py-4 px-6 text-right">
                <span class="text-xs font-black uppercase px-3 py-1 rounded-full text-white" :class="user.badgeClass">
                  {{ user.badge }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const topUsers = [
  {
    name: 'Xavier Gaming',
    id: 'JG-8821***',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&q=80',
    totalSpent: 12500000,
    badge: 'Mythic Sultan',
    badgeClass: 'bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_10px_rgba(220,38,38,0.5)]'
  },
  {
    name: 'Putri Sarah',
    id: 'JG-1024***',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    totalSpent: 8340000,
    badge: 'Legend',
    badgeClass: 'bg-gradient-to-r from-neon-purple to-neon-magenta shadow-[0_0_10px_rgba(157,78,221,0.5)]'
  },
  {
    name: 'Budi E-Sports',
    id: 'JG-4491***',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    totalSpent: 5120000,
    badge: 'Epic Pro',
    badgeClass: 'bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
  },
  {
    name: 'Dimas Pro',
    id: 'JG-3312***',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    totalSpent: 4200000,
    badge: 'Grandmaster',
    badgeClass: 'bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
  },
  {
    name: 'Cici Healer',
    id: 'JG-9921***',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    totalSpent: 3800000,
    badge: 'Grandmaster',
    badgeClass: 'bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
  }
]

const formatPrice = (val) => {
  return new Intl.NumberFormat('id-ID').format(val)
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.text-glow-yellow {
  text-shadow: 0 0 10px rgba(250, 204, 21, 0.6);
}
</style>
