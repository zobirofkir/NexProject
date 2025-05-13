export default function ProductComponent() {
  const products = [
    { name: "Product 1", price: "$49.99", image: "/images/product1.jpg" },
    { name: "Product 2", price: "$29.99", image: "/images/product2.jpg" },
    { name: "Product 3", price: "$99.99", image: "/images/product3.jpg" },
  ];

  return (
    <section id="products" className="py-20 bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold text-gray-800 dark:text-white">Our Products</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">High quality. Great prices.</p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {products.map((prod, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 group border border-gray-100 dark:border-gray-800"
          >
            <div className="overflow-hidden">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{prod.name}</h4>
              <p className="text-lg text-purple-600 dark:text-purple-400 font-bold">{prod.price}</p>
              <button className="mt-4 bg-purple-600 dark:bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
