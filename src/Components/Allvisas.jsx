import React, { useEffect, useState } from "react";

const AllVisas = () => {
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Visas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
