import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/Authprovider";

const AllVisas = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all visas from the database
  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch("http://localhost:5000/all-visas");
        const data = await response.json();
        setVisas(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching visas:", error);
        setLoading(false);
      }
    };

    fetchVisas();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (visas.length === 0) {
    return <div className="text-center">No visas found.</div>;
  }

  return (
    <div>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">All Visas</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {visas.map((visa) => (
            <div
              key={visa._id}
              className="border rounded-md p-4 shadow-lg flex flex-col items-center"
            >
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{visa.countryName}</h2>
              <p className="text-sm mb-2">
                <strong>Visa Type:</strong> {visa.visaType}
              </p>
              <p className="text-sm mb-2">
                <strong>Processing Time:</strong> {visa.processingTime}
              </p>
              <p className="text-sm mb-2">
                <strong>Fee:</strong> ${visa.fee}
              </p>
              <p className="text-sm mb-4">{visa.description}</p>

              <p className="mt-4 text-gray-700">
                This visa is for {visa.visaType} purposes, with a processing time of {visa.processingTime}. The age restriction for this visa is {visa.ageRestriction} years. The fee for this visa is ${visa.fee}, and it is valid for {visa.validity}. You can apply for this visa through {visa.applicationMethod}. Make sure to check the required documents and apply on time.
              </p>

            </div>
          ))}
        </div>
      </div>



      <div className="flex justify-center mt-8 mb-8">

        <button onClick={() => {
          user ? (
            navigate('/visadetails')

          ) :
            (navigate('/login'))
        }

        }

          className="btn btn-outline btn-accent px-4 py-2 rounded-md">See Details</button>
      </div>






    </div>
  );
};

export default AllVisas;
