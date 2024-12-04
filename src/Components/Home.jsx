import React from "react";
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpeg";
import visa1 from "../assets/visa1.jpeg";
import visa2 from '../assets/visa2.jpeg'
import visa3 from '../assets/visa2.jpeg'
import visa4 from '../assets/visa3.jpeg'


const Home = () => {
  const latestVisas = [
    { id: 1, title: "USA Tourist Visa", description: "Explore the United States for tourism and leisure.", image: visa1 },
    { id: 2, title: "UK Work Visa", description: "Work in the United Kingdom with ease.", image: visa2},
    { id: 3, title: "Canada Student Visa", description: "Study in Canada with world-class education.", image: visa3},
    { id: 4, title: "Australia PR Visa", description: "Get permanent residency in Australia.", image: visa4},
  ];

  return (
    <div className="w-3/4 mx-auto">
      {/* Carousel */}
      <div className="carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full object-cover h-[500px]" alt="Banner 1" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full object-cover h-[500px]" alt="Banner 2" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full object-cover h-[500px]" alt="Banner 3" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      {/* Latest Visa Section */}
      <section className="mt-8 px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">Latest Visas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestVisas.map((visa) => (
            <div key={visa.id} className="card bg-white shadow-md rounded-lg overflow-hidden">
              <img src={visa.image} alt={visa.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{visa.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{visa.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

          {/* 1st extra section  */}

          <section className="mt-12 px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">Trusted Guidance</h3>
            <p className="mt-2 text-gray-600">We provide reliable visa consultation tailored to your needs.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">Hassle-Free Process</h3>
            <p className="mt-2 text-gray-600">Simplify your visa application with step-by-step guidance.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">Global Reach</h3>
            <p className="mt-2 text-gray-600">Get support for visas to the most popular destinations worldwide.</p>
          </div>
        </div>
      </section>

      {/* 2nd extra section */}

      <section className="mt-12 px-4 sm:px-8">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">Testimonials</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="text-center p-6 bg-white shadow-md rounded-lg">
      <p className="text-gray-600 italic">
        "Visa Navigator Portal made the process so easy! Highly recommend it."
      </p>
      <h4 className="mt-4 text-lg font-semibold text-gray-800">- John Doe</h4>
    </div>
    <div className="text-center p-6 bg-white shadow-md rounded-lg">
      <p className="text-gray-600 italic">
        "Excellent service! I got my visa approval in no time."
      </p>
      <h4 className="mt-4 text-lg font-semibold text-gray-800">- Jane Smith</h4>
    </div>
    <div className="text-center p-6 bg-white shadow-md rounded-lg">
      <p className="text-gray-600 italic">
        "The team was very supportive throughout the entire process."
      </p>
      <h4 className="mt-4 text-lg font-semibold text-gray-800">- Alex Brown</h4>
    </div>
  </div>
</section>




    </div>
  );
};

export default Home;
