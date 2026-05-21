<template>
  <div>
    
    <!-- Payment Marquee Slider Section -->
    <section class="py-12 bg-[#09090e] border-t border-white/5 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 mb-6 text-center">
        <h4 class="text-xs font-black uppercase tracking-widest text-gray-500">Metode Pembayaran Terlengkap & Teraman</h4>
      </div>

      <div class="relative w-full flex overflow-x-hidden">
        <!-- Marquee track 1 -->
        <div class="animate-marquee whitespace-nowrap flex items-center gap-12 text-gray-400 font-extrabold tracking-wider">
          <div v-for="(pm, idx) in marqueePayments" :key="'m1-'+idx" class="inline-flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/5 hover:border-neon-cyan/30 hover:text-white transition-colors">
            <span class="text-xl">{{ pm.icon }}</span>
            <span class="text-xs uppercase tracking-widest">{{ pm.name }}</span>
          </div>
        </div>
        <!-- Marquee track 2 (Duplicate for infinite seamless loop) -->
        <div class="animate-marquee whitespace-nowrap flex items-center gap-12 text-gray-400 font-extrabold tracking-wider" aria-hidden="true">
          <div v-for="(pm, idx) in marqueePayments" :key="'m2-'+idx" class="inline-flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/5 hover:border-neon-cyan/30 hover:text-white transition-colors">
            <span class="text-xl">{{ pm.icon }}</span>
            <span class="text-xs uppercase tracking-widest">{{ pm.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Footer Block -->
    <footer class="bg-[#07070b] border-t border-white/10 pt-16 pb-8 text-gray-400 text-xs sm:text-sm relative overflow-hidden">
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
        
        <!-- Column 1: Info Brand -->
        <div class="md:col-span-4 space-y-4" data-aos="fade-up" data-aos-delay="100">
          <router-link to="/" class="flex items-center gap-2 group">
            <div class="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-neon-cyan/20 p-1">
              <img src="/images/logo.png" alt="JohenGaming Logo" class="w-full h-full object-contain" />
            </div>
            <span class="font-black text-base tracking-wider bg-gradient-to-r from-white via-neutral-200 to-neon-cyan bg-clip-text text-transparent">
              JOHEN<span class="text-neon-magenta">GAMING</span>
            </span>
          </router-link>
          
          <p class="text-xs leading-relaxed text-gray-500 font-semibold">
            Johengaming adalah platform penyedia layanan top up game, voucher digital, dan jasa joki rank game terpercaya, termurah, dan tercepat di Indonesia. Berdiri sejak tahun 2022 dengan 11.500 transaksi sukses.
          </p>

          <!-- Social media icons -->
          <div class="flex items-center gap-3 pt-2">
            <a href="#" class="w-8 h-8 rounded-xl bg-white/5 hover:bg-neon-cyan hover:text-black border border-white/10 flex items-center justify-center transition-all" aria-label="Instagram">
              📸
            </a>
            <a href="#" class="w-8 h-8 rounded-xl bg-white/5 hover:bg-neon-purple hover:text-white border border-white/10 flex items-center justify-center transition-all" aria-label="TikTok">
              🎵
            </a>
            <a href="#" class="w-8 h-8 rounded-xl bg-white/5 hover:bg-neon-blue hover:text-white border border-white/10 flex items-center justify-center transition-all" aria-label="YouTube">
              ▶
            </a>
            <a href="#" class="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#25D366] hover:text-white border border-white/10 flex items-center justify-center transition-all" aria-label="WhatsApp">
              💬
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="md:col-span-2 space-y-3" data-aos="fade-up" data-aos-delay="200">
          <h4 class="text-white text-xs font-black uppercase tracking-widest text-glow-cyan border-l-2 border-neon-cyan pl-2">Navigasi</h4>
          <ul class="space-y-2 text-xs font-semibold">
            <li><router-link to="/" class="hover:text-neon-cyan transition-colors">Home</router-link></li>
            <li><a href="/#topup" class="hover:text-neon-cyan transition-colors">Top Up Game</a></li>
            <li><a href="/#joki" class="hover:text-neon-cyan transition-colors">Jasa Joki Rank</a></li>
            <li><a href="/#voucher" class="hover:text-neon-cyan transition-colors">Voucher Digital</a></li>
            <li><a href="/#promo" class="hover:text-neon-cyan transition-colors">Promo Gila</a></li>
            <li><router-link to="/cek-transaksi" class="hover:text-neon-cyan transition-colors">Cek Transaksi</router-link></li>
            <li><router-link to="/leaderboard" class="hover:text-neon-cyan transition-colors">Leaderboard</router-link></li>
          </ul>
        </div>

        <!-- Column 3: Legal & Support -->
        <div class="md:col-span-3 space-y-3" data-aos="fade-up" data-aos-delay="300">
          <h4 class="text-white text-xs font-black uppercase tracking-widest text-glow-purple border-l-2 border-neon-purple pl-2">Legal & Support</h4>
          <ul class="space-y-2 text-xs font-semibold">
            <li><a href="#" class="hover:text-neon-purple transition-colors">Syarat & Ketentuan</a></li>
            <li><a href="#" class="hover:text-neon-purple transition-colors">Kebijakan Privasi</a></li>
            <li><a href="#" class="hover:text-neon-purple transition-colors">Hubungi CS Support</a></li>
            <li><a href="#" class="hover:text-neon-purple transition-colors">Kemitraan Reseller</a></li>
            <li><a href="#" class="hover:text-neon-purple transition-colors">Panduan Pembayaran</a></li>
          </ul>
        </div>

        <!-- Column 4: Contact details -->
        <div class="md:col-span-3 space-y-3 text-xs" data-aos="fade-up" data-aos-delay="400">
          <h4 class="text-white text-xs font-black uppercase tracking-widest text-glow-magenta border-l-2 border-neon-magenta pl-2">Lokasi & Kontak</h4>
          <p class="leading-relaxed text-gray-500 font-semibold">
            🏢 PT Johen Gaming Sukses Abadi<br/>
            Ruko Topaz Summarecon Bandung No.60, Cisaranten Kidul, Kec. Gedebage, Kota Bandung, Jawa Barat 40295
          </p>
          <p class="font-semibold text-gray-500">
            📧 support@johengaming.com<br/>
            📞 +62 812-3456-789 (WhatsApp Only)
          </p>
        </div>

      </div>

      <!-- Copyright section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-bold">
        <p>© 2026 PT JOHEN GAMING SUKSES ABADI. Hak Cipta Dilindungi.</p>
        <div class="flex items-center gap-4 uppercase tracking-widest text-[10px]">
          <span class="text-neon-cyan">SSL SECURED</span>
          <span class="text-neon-purple">OFFICIAL RESELLER</span>
        </div>
      </div>

    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const marqueePayments = ref([
  { name: 'QRIS', icon: '📱' },
  { name: 'DANA', icon: '💰' },
  { name: 'OVO', icon: '💎' },
  { name: 'GoPay', icon: '👝' },
  { name: 'ShopeePay', icon: '🧡' },
  { name: 'BCA Virtual Account', icon: '🏦' },
  { name: 'Mandiri VA', icon: '🏛' },
  { name: 'BRI VA', icon: '🏢' },
  { name: 'Alfamart', icon: '🛒' },
  { name: 'Indomaret', icon: '🏬' }
])
</script>

<style scoped>
.text-glow-cyan {
  text-shadow: 0 0 8px rgba(0, 245, 212, 0.4);
}
.text-glow-purple {
  text-shadow: 0 0 8px rgba(157, 78, 221, 0.4);
}
.text-glow-magenta {
  text-shadow: 0 0 8px rgba(255, 0, 127, 0.4);
}
</style>
