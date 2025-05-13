export default function FeatureComponent() {
    const features = [
      { title: "Fast Delivery", description: "Get your products delivered fast and securely." },
      { title: "Best Prices", description: "Unbeatable prices for high-quality products." },
      { title: "24/7 Support", description: "We’re here to help you anytime." },
    ];
  
    return (
      <section id="features" className="py-16 bg-white">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Why Shop With Us?</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="max-w-sm bg-gray-100 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">{feat.title}</h4>
              <p>{feat.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  