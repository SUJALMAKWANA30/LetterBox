import React from 'react';

function Templates() {
  const templates = [1, 2, 3, 4]; // Placeholder for 4 templates

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Choose from our professional templates
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our templates are designed to be ATS-friendly and visually appealing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((id) => (
            <div
              key={id}
              className="group overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <img
                src={`https://picsum.photos/seed/${id + 10}/300/420`}
                alt={`Resume Template ${id}`}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="#"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View All Templates
          </a>
        </div>
      </div>
    </section>
  );
}

export default Templates;
