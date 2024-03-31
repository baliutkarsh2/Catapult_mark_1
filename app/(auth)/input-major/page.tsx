import React from 'react';
import Link from 'next/link';

export default function InputMajor() {
  // List of majors provided by you
  const majors = [
    "Choose",
    "Accounting",
    "Actuarial Science",
    "Aeronautical and Astronautical Engineering",
    "Aeronautical Engineering Technology",
    "Aerospace Financial Analysis",
    "African American Studies",
    "Agricultural Communication",
    "Agricultural Economics",
    "Agricultural Education",
    "Agronomy",
    "Animal Sciences",
    "Anthropology",
    "Applied Data Science",
    "Applied Exercise and Health",
    "Aquatic Sciences",
    "Arabic",
    "Art and Design",
    "Asian Studies",
    "Astrophysics",
    "Biochemistry",
    "Biological Engineering",
    "Biology",
    "Biomedical Engineering",
    "Biotechnology Innovation and Regulatory Science",
    "Botany and Plant Pathology",
    "Building Construction Management",
    "Business Analytics and Information Management",
    "Chemical Engineering",
    "Chemistry",
    "Chinese",
    "Civil Engineering",
    "Climate Change Science",
    "Communication",
    "Comparative Literature",
    "Computer Engineering",
    "Computer Graphics Technology",
    "Computer Science",
    "Construction Engineering Management",
    "Creative Writing",
    "Crop Science",
    "Cybersecurity",
    "Data Science",
    "Dietetics",
    "Early Childhood Education and Exceptional Needs",
    "Earth and Atmospheric Sciences",
    "Economics",
    "Educational Studies",
    "Electrical Engineering",
    "Engineering Education",
    "Engineering Physics",
    "English",
    "Entomology",
    "Environmental and Natural Resources Engineering",
    "Environmental Geosciences",
    "Environmental and Ecological Engineering",
    "Environmental Science",
    "Ethnography",
    "Exercise Science",
    "Family and Consumer Sciences Education",
    "Farm Management",
    "Film and Video Studies",
    "Financial Counseling and Planning",
    "Fisheries and Aquatic Sciences",
    "Food Science",
    "Forensic Science",
    "Forestry",
    "French",
    "Gender Studies",
    "Genetics",
    "Geography",
    "Geology",
    "German",
    "Global Engineering Studies",
    "Health and Human Sciences",
    "Health Sciences",
    "History",
    "Horticulture",
    "Human Services",
    "Industrial Design",
    "Industrial Engineering",
    "Information Systems",
    "Inorganic Chemistry",
    "Integrated Studio Arts",
    "Interior Design",
    "International Business",
    "Italian",
    "Japanese",
    "Jewish Studies",
    "Kinesiology",
    "Korean",
    "Landscape Architecture",
    "Latin American and Latino Studies",
    "Linguistics",
    "Management",
    "Management Information Systems",
    "Marketing",
    "Materials Engineering",
    "Mathematics",
    "Mechanical Engineering",
    "Medicinal Chemistry and Molecular Pharmacology",
    "Microbiology",
    "Multidisciplinary Engineering",
    "Music",
    "Natural Resources and Environmental Science",
    "Neuroscience",
    "Nuclear Engineering",
    "Nursing",
    "Nutrition Science",
    "Organizational Leadership and Supervision",
    "Philosophy",
    "Physical Education",
    "Physics",
    "Physiology",
    "Plant Genetics and Biotechnology",
    "Political Science",
    "Pre-Dental",
    "Pre-Law",
    "Pre-Medical",
    "Pre-Pharmacy",
    "Pre-Veterinary",
    "Professional Writing",
    "Psychology",
    "Public Health",
    "Public Relations and Strategic Communication",
    "Religious Studies",
    "Retail Management",
    "Robotics Engineering",
    "Russian",
    "Sales and Marketing",
    "Secondary Education",
    "Social Studies Education",
    "Sociology",
    "Software Engineering",
    "Spanish",
    "Speech, Language, and Hearing Sciences",
    "Statistics",
    "Supply Chain, Information, and Analytics",
    "Sustainable Biomaterials and Packaging",
    "Sustainable Food and Farming Systems",
    "Systems Analysis and Design",
    "Telecommunications Engineering Technology",
    "Theatre",
    "Transdisciplinary Studies in Technology",
    "Turf Management and Science",
    "UX Design",
    "Veterinary Nursing",
    "Visual Communication Design",
    "Wildlife",
    "Women’s, Gender, and Sexuality Studies",

  ];

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">What's your major?</h1>
            <p className="text-xl text-gray-400">Choose from the dropdown menu.</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="major">Major</label>
                  <select id="major" className="form-input w-full text-gray-300" required>
                    {majors.map((major, index) => (
                      <option key={index} value={major}>{major}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <Link href="/input-minor" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Next</Link>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              <Link href="/" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
