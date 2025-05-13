export default function TestimonialComponent() {
    const testimonials = [
      { name: "Sarah", comment: "Amazing quality and super fast delivery!" },
      { name: "Ali", comment: "Great support and beautiful products!" },
    ];
  
    return (
      <section id="testimonials" className="py-16 bg-white">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">What Our Customers Say</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow max-w-md">
              <p className="italic mb-2">"{t.comment}"</p>
              <p className="font-semibold">– {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  