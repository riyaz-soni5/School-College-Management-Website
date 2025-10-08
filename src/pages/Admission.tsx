import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Admission() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    program: "",
    queries: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.address ||
      !formData.phone ||
      !formData.program ||
      !formData.queries
    ) {
      toast.error("Please fill in all the fields!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    toast.success("Your admission form has been submitted!", {
      position: "top-center",
      autoClose: 3000,
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      program: "",
      queries: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 relative bg-[url('src/assets/imgs/admission-page-img.png')] bg-cover bg-center">
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Container to wrap both image content and form */}
        <div className="container relative z-10 flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
            <h1 className="text-[#154480] text-2xl font-bold text-center mb-2">
              ADMISSION
            </h1>
            <p className="text-gray-600 text-center mb-6 whitespace-nowrap">
              Our admission counselors will sort down your queries. We will get
              back to you shortly.
            </p>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Row 2 */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Row 4 */}
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className={`border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 
                  ${
                    formData.program
                      ? "text-black font-bold"
                      : "text-gray-500 font-normal"
                  }`}
              >
                <option value="" disabled hidden>
                  Select Programs
                </option>
                <option value="see">SEE</option>
                <option value="plus2">+2 NEB</option>
              </select>

              {/* Row 5 */}
              <textarea
                name="queries"
                placeholder="Your Queries"
                value={formData.queries}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 h-24"
              ></textarea>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#154480] text-white font-bold px-4 py-2 rounded hover:bg-blue-900"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
