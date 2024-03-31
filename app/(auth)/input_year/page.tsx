import React from 'react';
import Link from 'next/link';

export default function ExpectedGraduationDate() {
  // Generate a range of years for the year dropdown
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, index) => currentYear + index);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">What is your Expected Graduation Date?</h1>
            <p className="text-xl text-gray-400">Select the month and year.</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3 mb-4">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="graduation-month">Month</label>
                  <select id="graduation-month" className="form-input w-full text-gray-300" required>
                    {months.map((month, index) => (
                      <option key={index} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="graduation-year">Year</label>
                  <select id="graduation-year" className="form-input w-full text-gray-300" required>
                    {years.map((year, index) => (
                      <option key={index} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <Link href="input-courses" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Next</Link>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              <Link href="/input-minor" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
