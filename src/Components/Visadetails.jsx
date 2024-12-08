import React, { useState } from "react";

const VisaDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    appliedDate: new Date().toLocaleDateString(),
    fee: "$200",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // for database
    try {
      const response = await fetch("http://localhost:5000/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
   
        setShowModal(false);
    
    } catch (error) {
      // console.error(error);
      alert("An error occurred while submitting the application.");
    }
  };

  return (
    <div className="container mx-auto p-4">
     <div className="flex flex-col justify-center items-center">
     <h1 className="text-3xl font-bold mb-4">Visa Application</h1>
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 px-4 py-2 btn btn-outline btn-accent rounded-md"
      >
        Apply for a Visa
      </button>
     </div>

      {/* for showing modal */}
      {showModal && (
         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
         <div className="bg-white p-6 rounded-md shadow-lg w-96 relative">
           <h2 className="text-xl font-bold mb-4">Visa Application Form</h2>
           <form onSubmit={handleSubmit} className="space-y-4">
             <div>
               <label className="block text-sm font-medium mb-1">Email</label>
               <input
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleInputChange}
                 className="w-full border rounded-md p-2"
                 required
               />
             </div>
             <div>
               <label className="block text-sm font-medium mb-1">First Name</label>
               <input
                 type="text"
                 name="firstName"
                 value={formData.firstName}
                 onChange={handleInputChange}
                 className="w-full border rounded-md p-2"
                 required
               />
             </div>
             <div>
               <label className="block text-sm font-medium mb-1">Last Name</label>
               <input
                 type="text"
                 name="lastName"
                 value={formData.lastName}
                 onChange={handleInputChange}
                 className="w-full border rounded-md p-2"
                 required
               />
             </div>
             <div>
               <label className="block text-sm font-medium mb-1">Applied Date</label>
               <input
                 type="text"
                 name="appliedDate"
                 value={formData.appliedDate}
                 readOnly
                 className="w-full border rounded-md p-2 bg-gray-100"
               />
             </div>
             <div>
               <label className="block text-sm font-medium mb-1">Fee</label>
               <input
                 type="text"
                 name="fee"
                 value={formData.fee}
                 onChange={handleInputChange}
                 className="w-full border rounded-md p-2"
                 placeholder="Enter Visa Fee"
                 required
               />
             </div>
             <div>
               <button
                 type="submit"
                 className="w-full btn btn-outline btn-accent py-2 rounded-md"
               >
                 Apply
               </button>
             </div>
           </form>
          
           <button
             onClick={() => setShowModal(false)}
             className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
             style={{ zIndex: 100 }}  
           >
             Close
           </button>
         </div>
       </div>
      )}
    </div>
  );
};

export default VisaDetails;
