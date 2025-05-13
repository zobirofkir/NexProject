import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function TestimonialComponent() {
  const testimonials = [
    { name: "Sarah", comment: "Amazing quality and super fast delivery!" },
    { name: "Ali", comment: "Great support and beautiful products!" },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-16 bg-white dark:bg-black text-white h-screen overflow-hidden"
    >
      {/* Lottie Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-60">
        <DotLottieReact
          src="https://lottie.host/3969eb6c-ce9c-407e-baf0-e2445526d695/8ReoPrVYsO.lottie"
          loop
          autoplay
        />
      </div>

      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">
          What Our Customers Say
        </h3>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Our customers love us! Here's what they're saying:
        </p>
      </div>

      {/* Testimonials */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 p-8 rounded-lg shadow-xl max-w-sm w-full transform transition duration-300 hover:scale-105"
          >
            <p className="italic text-lg text-gray-200 mb-4">"{t.comment}"</p>
            <p className="font-semibold text-lg text-white">– {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
