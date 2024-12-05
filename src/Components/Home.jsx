import React, { useContext } from "react";
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpeg";
import usaImage from '../assets/usa.jpg'
import canadaImage from '../assets/canada.jpg'
import ukImage from '../assets/uk.jpg'
import australiaImage from '../assets/australia.jpg'
import germanyImage from '../assets/germany.jpg'
import japanImage from '../assets/japan.jpg'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/Authprovider";


const Home = () => {

  const {user} = useContext(AuthContext);

  const navigate = useNavigate();
 
  const latestVisas = [
    {
      id: 1,
      country: "USA",
      visa_type: "Tourist Visa",
      processing_time: "15 Days",
      fee: "$160",
      validity: "6 Months",
      application_method: "Online",
      image: usaImage,
    },
    {
      id: 2,
      country: "Canada",
      visa_type: "Student Visa",
      processing_time: "4 Weeks",
      fee: "$150",
      validity: "2 Years",
      application_method: "Offline",
      image: canadaImage,
    },
    {
      id: 3,
      country: "UK",
      visa_type: "Work Visa",
      processing_time: "3 Weeks",
      fee: "$200",
      validity: "5 Years",
      application_method: "Online",
      image: ukImage,
    },
    {
      id: 4,
      country: "Australia",
      visa_type: "PR Visa",
      processing_time: "6 Months",
      fee: "$2,500",
      validity: "Permanent",
      application_method: "Online",
      image: australiaImage,
    },
    {
      id: 5,
      country: "Germany",
      visa_type: "Job Seeker Visa",
      processing_time: "1 Month",
      fee: "$75",
      validity: "6 Months",
      application_method: "Offline",
      image: germanyImage,
    },
    {
      id: 6,
      country: "Japan",
      visa_type: "Business Visa",
      processing_time: "10 Days",
      fee: "$90",
      validity: "90 Days",
      application_method: "Online",
      image: japanImage,
    },
  ];

  return (
    <div className="w-3/4 mx-auto">
      {/* Carousel */}
      <div className="carousel w-full md:h-[500px]">
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

      {/* Latest visa Section */}

      <section className="mt-8 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
        Latest Visas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestVisas.map((visa) => (
          <div
            key={visa.id}
            className="card bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Country Image */}
            <img
              src={visa.image}
              alt={`${visa.country} Visa`}
              className="w-full h-40 object-cover"
            />
            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{visa.country}</h3>
              <p className="text-sm text-gray-600">
                <strong>Visa Type:</strong> {visa.visa_type}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Processing Time:</strong> {visa.processing_time}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Fee:</strong> {visa.fee}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Validity:</strong> {visa.validity}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Application Method:</strong> {visa.application_method}
              </p>
              
              {
                user? (
                  <button onClick={()=> navigate('/visadetails')} className="btn btn-outline btn-accent">See Details</button>
                ):
                (
                  <button onClick={()=> navigate('/login')} className="btn btn-outline btn-accent">See Details</button>
                )
              }
              
              
              
              
              
            </div>
          </div>
        ))}
      </div>
    </section>

        {/* 1st extra section */}

        <section className="mt-12 px-4 sm:px-8 bg-gray-50 py-8 rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          Visa Assistance Services
        </h2>
        <p className="text-gray-700 text-center mb-6">
          We provide expert assistance to make your visa application process seamless. Explore the services tailored to meet your needs:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Document Review</h3>
            <p className="text-sm text-gray-600">Ensure all your documents meet the requirements.</p>
          </div>
          <div className="text-center p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Application Filing</h3>
            <p className="text-sm text-gray-600">Let us handle your visa application filing process.</p>
          </div>
          <div className="text-center p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Interview Preparation</h3>
            <p className="text-sm text-gray-600">Ace your visa interview with our expert guidance.</p>
          </div>
        </div>
      </section>

      {/* 2nd extra section */}
      <section className="mt-12 px-4 sm:px-8 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Step 1</h3>
            <p className="text-sm text-gray-600">Sign up and create your profile.</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Step 2</h3>
            <p className="text-sm text-gray-600">Browse and select the visa type that suits your needs.</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Step 3</h3>
            <p className="text-sm text-gray-600">Submit your application and track its progress.</p>
          </div>
        </div>
      </section>
    

      


    </div>
  );
};

export default Home;
