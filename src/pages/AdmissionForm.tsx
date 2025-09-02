export default function AdmissionForm() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main section with full height between Nav & Footer */}
      <div className="flex-1 flex justify-center items-center bg-[#154480]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          {/* Title */}
          <h1 className="text-[#154480] text-2xl font-bold text-center mb-2">
            ADMISSION
          </h1>
          <p className="text-gray-600 text-center mb-6 whitespace-nowrap">
            Our admission counselors will sort down your queries. We will get
            back to you shortly.
          </p>

          {/* Form */}
          <form className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Row 2 */}
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Row 4 */}
            <input
              type="text"
              placeholder="Select Programs"
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Row 5 */}
            <input
              type="text"
              placeholder="Your Queries"
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

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
  );
}
