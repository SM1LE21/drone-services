const FormModal = ({ onClose, formType }) => {
    const handleSubmit = (event) => {
        // event.preventDefault(); // Used when testing to not always receive a form on FormSpree
        alert('Form submitted! We will get back to you soon.');
        onClose();
      };
      

    const renderTitle = () => {
        switch(formType) {
            case 'custom':
                return "Custom Request";
            case 'event':
                return "Event Photography";
            case 'realEstate':
                return "Real Estate Photography";
            default:
                return "Form";
        }
    };

    const renderPackageOptions = () => {
        switch(formType) {
            case 'event':
                return (
                    <>
                        <option value="299">Basic Coverage - €299</option>
                        <option value="595">Standard Package - €595</option>
                        <option value="895">Premium Package - €895</option>
                    </>
                );
            case 'realEstate':
                return (
                    <>
                        <option value="249">Basic Flyover - €249</option>
                        <option value="495">Standard Package - €495</option>
                        <option value="795">Premium Package - €795</option>
                    </>
                );
            default:
                return null;
        }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
        <div className="bg-white p-10 rounded-lg shadow-lg overflow-y-auto
                        w-full max-w-4xl sm:w-11/12 sm:max-w-full sm:h-11/12 sm:max-h-full sm:py-12
                        md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
                        style={{ maxHeight: "80vh" }}>  {/* Adjust maxHeight to manage modal height on small devices */}
          <form action="https://formspree.io/f/mayrvdll" method="POST" className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">{renderTitle()}</h2>
            {/* User Info Fields */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
              <input type="text" id="firstName" name="firstName" required 
                     className="input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Family Name:</label>
              <input type="text" id="lastName" name="lastName" required 
                     className="input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address:</label>
              <input type="email" id="email" name="email" required 
                     className="input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional):</label>
              <input type="tel" id="phone" name="phone" 
                     className="input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>

            {/* Date Picker Field */}
            <div>
              <label htmlFor="shootDateTime" className="block text-sm font-medium text-gray-700">Desired Date and Time of the Shoot (Optional):</label>
              <input type="datetime-local" id="shootDateTime" name="shootDateTime" 
                     className="input_dropdown mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>

            {/* Package Selection or Custom Project Details */}
            {formType === 'custom' ? (
              <div>
                <p className="text-sm text-gray-600">Pitch or explain your vision here, and we will get back to you to discuss it in detail.</p>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700">Project Details:</label>
                <textarea id="details" name="details" required placeholder="Start describing your project here..."
                          className="custom_input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
              </div>
            ) : (
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700">Choose a Package:</label>
                <select id="package" name="package" required 
                        className="input_dropdown mt-1 block w-full rounded-md focus:ring-opacity-50">
                  {renderPackageOptions()}
                </select>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mt-4">Additional Information (Optional):</label>
                <textarea id="additionalInfo" name="additionalInfo" placeholder="Add any additional details or requests here..."
                          className="custom_input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
              </div>
            )}

            <p className="text-sm text-gray-500">We typically respond to inquiries within 24 hours.</p>

            {/* Form Submission */}
            <div className="flex justify-between items-center">
              <button type="submit" className="button-17-primary inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                Submit
              </button>
              <button onClick={onClose} className="button-17 ml-4 inline-flex justify-center py-2 px-4 border  focus:outline-none focus:ring-2 focus:ring-offset-2">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default FormModal;