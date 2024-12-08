import { useState } from "react";
import Swal from "sweetalert2";


const Addvisa = () => {

    const [formData, setFormData] = useState({
        countryImage: "",
        countryName: "",
        visaType: "",
        processingTime: "",
        requiredDocuments: [],
        description: "",
        ageRestriction: "",
        fee: "",
        validity: "",
        applicationMethod: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        const { requiredDocuments } = formData;

        if (checked) {
            setFormData({
                ...formData,
                requiredDocuments: [...requiredDocuments, value],
            });
        } else {
            setFormData({
                ...formData,
                requiredDocuments: requiredDocuments.filter((doc) => doc !== value),
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/add-visa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.insertedId) {
                Swal.fire("Visa added successfully!");
                setFormData({
                    countryImage: "",
                    countryName: "",
                    visaType: "",
                    processingTime: "",
                    requiredDocuments: [],
                    description: "",
                    ageRestriction: "",
                    fee: "",
                    validity: "",
                    applicationMethod: "",
                });
            } else {
                Swal.error("Failed to add visa.");
            }
        } catch (error) {
            console.error("Error adding visa:", error);
            alert("An error occurred while adding the visa.");
        }
    };

    return (
        <div>

            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Add Visa</h1>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium mb-1">Country Image URL</label>
                        <input
                            type="text"
                            name="countryImage"
                            value={formData.countryImage}
                            onChange={handleInputChange}
                            className="w-full border rounded-md p-2"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Country Name</label>
                        <input
                            type="text"
                            name="countryName"
                            value={formData.countryName}
                            onChange={handleInputChange}
                            className="w-full border rounded-md p-2"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Visa Type</label>
                        <select
                            name="visaType"
                            value={formData.visaType}
                            onChange={handleInputChange}
                            className="w-full border rounded-md p-2"
                            required
                        >
                            <option value="" disabled>
                                Select Visa Type
                            </option>
                            <option value="Tourist Visa">Tourist Visa</option>
                            <option value="Student Visa">Student Visa</option>
                            <option value="Official Visa">Official Visa</option>
                        </select>
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Processing Time</label>
                        <input
                            type="text"
                            name="processingTime"
                            value={formData.processingTime}
                            onChange={handleInputChange}
                            className="w-full border rounded-md p-2"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Required Documents</label>
                        <div className="space-y-2">
                            <label>
                                <input
                                    type="checkbox"
                                    value="Valid Passport"
                                    onChange={handleCheckboxChange}
                                />
                                <span className="ml-2">Valid Passport</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="Visa Application Form"
                                    onChange={handleCheckboxChange}
                                />
                                <span className="ml-2">Visa Application Form</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="Recent Passport-Sized Photograph"
                                    onChange={handleCheckboxChange}
                                />
                                <span className="ml-2">Recent Passport-Sized Photograph</span>
                            </label>
                        </div>
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-full border rounded-md p-2"
                            rows="4"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Age Restriction</label>
                        <input
                            type="number"
                            name="ageRestriction"
                            value={formData.ageRestriction}
                            onChange={handleInputChange}
                            className="w-full border rounded-md p-2"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Fee</label>
                        <input
                            type="number"
                            name="fee"
                            value={formData.fee}
                            onChange={handleInputChange}
                            className="w-full border rounded-md p-2"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Validity</label>
                        <input
                            type="text"
                            name="validity"
                            value={formData.validity}
                            onChange={handleInputChange}
                            className="w-full border rounded-md p-2"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Application Method</label>
                        <input
                            type="text"
                            name="applicationMethod"
                            value={formData.applicationMethod}
                            onChange={handleInputChange}
                            className="w-full border rounded-md p-2"
                            required
                        />
                    </div>


                    <div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-1/2 btn btn-outline btn-accent py-2 rounded-md"
                            >
                                Add Visa
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Addvisa;