export default function HeroComponent() {
  return (
    <section className="h-screen w-full bg-gradient-to-br from-gray-100 to-white dark:from-black dark:to-gray-900 flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
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
