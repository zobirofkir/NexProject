import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ProductComponent() {
  const products = [
    { name: "Product 1", price: "$49.99", image: "/images/product1.jpg" },
    { name: "Product 2", price: "$29.99", image: "/images/product2.jpg" },
    { name: "Product 3", price: "$99.99", image: "/images/product3.jpg" },
  ];

  return (
    <section
      id="products"
      className="relative py-24 bg-white dark:bg-black min-h-screen overflow-hidden transition-colors duration-300"
    >
      {/* Lottie Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <DotLottieReact
          src="https://lottie.host/3969eb6c-ce9c-407e-baf0-e2445526d695/8ReoPrVYsO.lottie"
          loop
          autoplay
        />
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h3 className="text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight">
          Our Products
        </h3>
        <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
          High quality. Great prices. Delivered with care.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6 relative z-10">
        {products.map((prod, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-md hover:shadow-xl transform transition hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {prod.name}
              </h4>
              <p className="text-lg text-purple-600 dark:text-purple-400 font-bold">
                {prod.price}
              </p>
              <button className="mt-4 inline-block bg-purple-600 dark:bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
