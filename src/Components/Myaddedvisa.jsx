import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./Provider/Authprovider";

const MyAddedVisa = () => {
  const [visas, setVisas] = useState([]); 
  const [editingVisa, setEditingVisa] = useState(null); 
  const { user } = useContext(AuthContext); 

 
  useEffect(() => {
    const fetchVisas = async () => {
      if (!user) return;
      try {
        const response = await fetch(`http://localhost:5000/my-visas/${user.uid}`);
        const data = await response.json();
        setVisas(data);
      } catch (error) {
        console.error("Error fetching visas:", error);
      }
    };
    fetchVisas();
  }, [user]);

  // Delete visa 
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:5000/delete-visa/${id}`, {
            method: "DELETE",
          });
          const result = await response.json();

          if (result.deletedCount > 0) {
            Swal.fire("Deleted!", "Visa has been deleted.", "success");
            setVisas((prevVisas) => prevVisas.filter((visa) => visa._id !== id)); 
          } else {
            Swal.fire("Failed to delete visa", "", "error");
          }
        } catch (error) {
          console.error("Error deleting visa:", error);
          Swal.fire("Failed to delete visa", "", "error");
        }
      }
    });
  };


  const handleEdit = (visa) => {
    setEditingVisa(visa);
  };

  // Update visa
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/update-visa/${editingVisa._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingVisa),
        }
      );
      const result = await response.json();

      if (result.modifiedCount > 0) {
        Swal.fire("Visa updated successfully!", "", "success");

        setVisas((prevVisas) =>
          prevVisas.map((visa) =>
            visa._id === editingVisa._id ? { ...editingVisa } : visa
          )
        ); 
        setEditingVisa(null);
      } else {
        Swal.fire("No changes made to the visa", "", "info");
      }
    } catch (error) {
      console.error("Error updating visa:", error);
      Swal.fire("Failed to update visa", "", "error");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Added Visas</h1>
      {user ? (
        visas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visas.map((visa) => (
              <div key={visa._id} className="border p-4 rounded-lg shadow-md">
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="w-full h-40 object-cover"
                />
                <h2 className="text-xl font-semibold">{visa.countryName}</h2>
                <p><strong>Visa Type:</strong> {visa.visaType}</p>
                <p><strong>Processing Time:</strong> {visa.processingTime}</p>
                <p><strong>Fee:</strong> ${visa.fee}</p>
                <p><strong>Validity:</strong> {visa.validity}</p>
                <p><strong>Application Method:</strong> {visa.applicationMethod}</p>
                <div className="flex justify-between mt-4">
                  <button
                    className="btn btn-outline btn-primary"
                    onClick={() => handleEdit(visa)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline btn-error"
                    onClick={() => handleDelete(visa._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No visas added yet.</p>
        )
      ) : (
        <p className="text-center text-gray-500">Please log in to view your visas.</p>
      )}

      {editingVisa && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Edit Visa</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label>Country Name</label>
                <input
                  type="text"
                  value={editingVisa.countryName}
                  onChange={(e) =>
                    setEditingVisa({ ...editingVisa, countryName: e.target.value })
                  }
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label>Visa Type</label>
                <input
                  type="text"
                  value={editingVisa.visaType}
                  onChange={(e) =>
                    setEditingVisa({ ...editingVisa, visaType: e.target.value })
                  }
                  className="input input-bordered w-full"
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-error"
                  onClick={() => setEditingVisa(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisa;
