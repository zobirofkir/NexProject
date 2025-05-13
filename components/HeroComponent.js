import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroComponent() {
  return (
    <section className="relative h-screen w-full  dark:from-black dark:to-gray-900 flex items-center justify-center px-6 overflow-hidden">
      
      {/* Lottie Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <DotLottieReact
          src="https://lottie.host/3969eb6c-ce9c-407e-baf0-e2445526d695/8ReoPrVYsO.lottie"
          loop
          autoplay
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Welcome to <span className="text-purple-600 dark:text-purple-400">MyShop</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Discover top-quality products at unbeatable prices.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
}
