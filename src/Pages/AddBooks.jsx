import React, { useState } from 'react';

export default function AddBooks() {
  const [formData, setFormData] = useState({
    bookId: '',
    title: '',
    series: '',
    author: '',
    rating: '',
    description: '',
    language: '',
    isbn: '',
    genres: '',
    characters: '',
    publisher: '',
    publishDate: '',
    awards: '',
    numRatings: '',
    ratingsByStars: '',
    likedPercent: '',
    coverImg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Book Data:', formData);
    alert('Book data submitted! Check console for details.');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Insert Book Data</h2>

      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label className="block mb-1 font-medium capitalize" htmlFor={key}>
            {key}
          </label>
          <input
            type="text"
            id={key}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      ))}

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
