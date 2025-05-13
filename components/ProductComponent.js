export default function ProductComponent() {
    const products = [
      { name: "Product 1", price: "$49.99", image: "/images/product1.jpg" },
      { name: "Product 2", price: "$29.99", image: "/images/product2.jpg" },
      { name: "Product 3", price: "$99.99", image: "/images/product3.jpg" },
    ];
  
    return (
      <section id="products" className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Our Products</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((prod, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-4 max-w-xs">
              <img src={prod.image} alt={prod.name} className="rounded mb-4 w-full h-48 object-cover" />
              <h4 className="text-lg font-semibold">{prod.name}</h4>
              <p className="text-blue-600 font-bold">{prod.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  