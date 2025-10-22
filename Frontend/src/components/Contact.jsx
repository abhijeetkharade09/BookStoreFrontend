import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after closing modal

/**
 * Contact Component (React + Tailwind)
 * ------------------------------------------------------
 * - Name, Email, Message fields with validation
 * - Displays Thank You modal after successful submission
 * - Includes "Close" button to return to Home page
 */

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  // Email validation regex
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(email)) newErrors.email = "Invalid email format.";

    setErrors(newErrors);

    // If valid, show modal
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);

      // Clear fields
      setFormData({ name: "", email: "", message: "" });

      // Show Thank You modal
      setShowModal(true);
    }
  };

  // Close modal and navigate to home page
  const handleClose = () => {
    setShowModal(false);
    navigate("/"); // 👉 CHANGE THIS PATH if your home route is different (e.g., "/home")
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Contact Form Container */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md  dark:bg-slate-900 dark:text-white">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6  dark:text-white">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1  dark:bg-slate-900 dark:text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none  dark:bg-slate-900 dark:text-white  dark:border-amber-50"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1  dark:bg-slate-900 dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1  dark:bg-slate-900 dark:text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 h-28 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Type your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-80 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              Your message has been successfully submitted. We’ll get back to you soon.
            </p>
            <button
              onClick={handleClose}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Close & Go Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
