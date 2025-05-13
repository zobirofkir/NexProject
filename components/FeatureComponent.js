import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function FeatureComponent() {
  const features = [
    { title: "⚡ Fast Delivery", description: "Get your products delivered fast and securely." },
    { title: "💰 Best Prices", description: "Unbeatable prices for high-quality products." },
    { title: "📞 24/7 Support", description: "We’re here to help you anytime." },
  ];

  return (
    <section id="features" className="relative h-screen dark:bg-black bg-white overflow-hidden flex items-center justify-center px-4">
      {/* Background Lottie Animation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <DotLottieReact
          src="https://lottie.host/32decf28-65a2-4df3-abf9-cc9be79e6388/9mUY44bPhl.lottie"
          loop
          autoplay
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-12 dark:text-white text-black drop-shadow-lg">
          Why Shop With Us?
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <h4 className="text-xl font-semibold mb-3 dark:text-white">{feat.title}</h4>
              <p className="dark:text-white text-black">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
