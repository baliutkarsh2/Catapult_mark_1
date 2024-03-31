import React from 'react';
import Link from 'next/link';

export default function InputMinors() {
  // List of minors provided by you
  const minors = [
    "Choose",
    "Aerospace Studies Minor",
  "African American Studies Minor",
  "Agricultural Systems Management Minor",
  "Airframe and Powerplant Maintenance Minor",
  "American Studies Minor",
  "Animal Science Minor",
  "Anthropology Minor",
  "Arabic Language and Culture Minor",
  "Architectural Engineering Minor",
  "Art and Design Studio Minor",
  "Art History Minor",
  "Asian American Studies Minor",
  "Asian Studies Minor",
  "Astronomy Minor",
  "Biochemistry Minor",
  "Biological Sciences Minor",
  "Biometrics Minor",
  "Biotechnology Minor",
  "Business Economics Minor",
  "Business French Minor",
  "Chemistry Minor",
  "Chinese Minor",
  "Classical Studies Minor",
  "Communication Minor",
  "Computer and Information Technology Minor",
  "Computer Science Minor",
  "Construction Engineering Minor",
  "Construction Graphics Minor",
  "Construction Management Minor",
  "Creative Writing Minor",
  "Critical Disability Studies Minor",
  "Crop Science Minor",
  "Dance Minor",
  "Design and Innovation Minor",
  "Earth, Atmospheric, and Planetary Sciences Minor",
  "Economics Minor",
  "Electrical and Computer Engineering Minor",
  "Electrical Engineering Technology Minor",
  "Electronic and Time-Based Art Minor",
  "Engineering and Public Policy Minor",
  "English Minor",
  "Environmental and Ecological Engineering Minor",
  "Environmental Politics and Policy Minor",
  "Event and Meeting Management Minor",
  "Farm Management Minor",
  "Fermentation Sciences Minor",
  "Film and Video Studies Minor",
  "Fisheries and Aquatic Sciences Minor",
  "Food and Agribusiness Management Minor",
  "Food Science Minor",
  "Foods and Nutrition Minor",
  "Forensic Sciences Minor",
  "Forest Ecosystems Minor",
  "French Cultural Studies Minor",
  "French Minor",
  "Furniture Design Minor",
  "German Minor",
  "Global Food and Agriculture Systems Minor",
  "Global Liberal Arts Studies Minor",
  "Global Studies Minor",
  "History Minor",
  "Horticulture Minor",
  "HTM International Studies Minor",
  "Human Development and Family Studies Minor",
  "Human Resource Management Minor",
  "Human Rights Studies Minor",
  "Innovation and Transformational Change Minor",
  "Insect Biology Minor",
  "Intellectual Property Law for Engineers Minor",
  "International Studies in Agriculture Minor",
  "Islamic Studies Minor",
  "Italian Minor",
  "Japanese Minor",
  "Jewish Studies Minor",
  "Landscape and Turf Minor",
  "Landscape Management Minor",
  "Latin American and Latino Studies Minor",
  "Law and Society Minor",
  "Learning Sciences in Educational Studies Minor",
  "LGBT Studies Minor",
  "Linguistics Minor",
  "Management Minor",
  "Manufacturing Minor",
  "Materials Science and Engineering Minor",
  "Mathematics Minor",
  "Military Science and Leadership Minor",
  "Music History and Theory Minor",
  "Native American and Indigenous Studies Minor",
  "Natural Resources and Environmental Science Minor",
  "Naval Science Minor",
  "Nuclear Engineering Minor",
  "Nutrition Minor",
  "Organizational Leadership Minor",
  "Peace Studies Minor",
  "Pet Food Processing Minor",
  "Philosophy Minor",
  "Physics Minor",
  "Plant Biology Minor",
  "Plant Pathology Minor",
  "Political Science Minor",
  "Portuguese Minor",
  "Product Lifecycle Management Minor",
  "Professional Writing Minor",
  "Psychology Minor",
  "Radiological Health Sciences Minor",
  "Religious Studies Minor",
  "Russian Minor",
  "Sociology Minor",
  "Soil Science Minor",
  "Spanish for the Professions Minor",
  "Spanish Minor",
  "Statistics Minor",
  "Supply Chain Management Technology Minor",
  "Sustainable Engineering Minor",
  "Sustainable Environments Minor",
  "Theatre Minor",
  "Theatre Design and Production Minor",
  "Turf Management Minor",
  "Unmanned Aerial Systems Minor",
  "Urban Forestry Minor",
  "Weed Science Minor",
  "Wildlife Science Minor",
  "Women’s, Gender, & Sexuality Studies Minor",
  "Wood Products Manufacturing Technology Minor",
  ];

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">What's your minor?</h1>
            <p className="text-xl text-gray-400">Choose from the dropdown menu.</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="minrr">Minor</label>
                  <select id="minor" className="form-input w-full text-gray-300" required>
                    {minors.map((minor, index) => (
                      <option key={index} value={minor}>{minor}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <Link href="/input_year" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Next</Link>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              <Link href="/input-major" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
