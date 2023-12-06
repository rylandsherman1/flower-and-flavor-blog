import React, { useState } from "react";

const BlogSubmitForm = ({ onPostSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostSubmit(formData);
    setFormData({
      title: "",
      content: "",
      date: "",
    });
    setShowForm(false);
  };

  return (
    <div>
      <button
        className="bg-custom-brown hover:bg-custom-darker-brown text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowForm(!showForm)}
      >
        Post Blog
      </button>

      {showForm && (
        <form
          className="mt-4 p-4 bg-custom-post-bg rounded shadow"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Content:
            </label>
            <textarea
              name="content"
              id="content"
              value={formData.content}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Date:
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            type="submit"
            className="bg-custom-brown hover:bg-custom-darker-brown text-white font-bold py-2 px-4 rounded"
          >
            Submit Post
          </button>
        </form>
      )}
    </div>
  );
};

export default BlogSubmitForm;
