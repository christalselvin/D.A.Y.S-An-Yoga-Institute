import React, { useState } from "react";

export default function JobApply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    summary: ""
  });

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 3000) {
      // Handle file
      console.log("File selected:", file);
    } else {
      alert("Please upload a file with size up to 3 KB.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <h2 className="text-2xl md:text-3xl text-center mt-8">Application</h2>
      <form className="px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 mx-5">
          {/* Existing input fields */}
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="dob" className="text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              placeholder="Enter your DOB"
              className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
              value={formData.dob}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="gender" className="text-sm font-medium">Gender</label>
            <select
              id="gender"
              name="gender"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
              onChange={handleChange}
              value={formData.gender}
            >
              <option value="">Choose</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="phoneNumber" className="text-sm font-medium">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
              value={formData.phoneNumber}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="summary" className="text-sm font-medium">Summary</label>
            <textarea
              id="summary"
              name="summary"
              cols={10}
              rows={5}
              className="bg-gray-50 border border-gray-300 rounded-xl p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
              value={formData.summary}
            ></textarea>
          </div>
          {/* New input field for uploading resume */}
          <div className="flex flex-col gap-4">
            <label htmlFor="resume" className="text-sm font-medium">Upload Resume (Max 3 KB)</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="bg-gray-50 border border-gray-300 rounded-xl p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex justify-end mt-6 mr-10">
          <button type="submit" className="bg-blue-400 px-4 py-2 rounded-full inline-block hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </>
  );
}
