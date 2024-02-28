// AdminSlideshowEdit.jsx

import React, { useState } from "react";

function Slideshow() {
  const [slides, setSlides] = useState([
    { id: 1, image: "", title: "", description: "", link: "", order: 1 },
    // Add more initial slides as needed
  ]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    setSlides((prevSlides) => {
      const updatedSlides = [...prevSlides];
      updatedSlides[index] = { ...updatedSlides[index], [name]: value };
      return updatedSlides;
    });
  };

  const handleImageChange = (index, e) => {
    const { files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setSlides((prevSlides) => {
          const updatedSlides = [...prevSlides];
          updatedSlides[index].image = e.target.result;
          return updatedSlides;
        });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Slides:", slides);
  };

  return (
    <div>
      <h2>Edit Slideshow</h2>
      <form onSubmit={handleSubmit}>
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <input type="file" onChange={(e) => handleImageChange(index, e)} />
            <input
              type="text"
              name="title"
              value={slide.title}
              onChange={(e) => handleInputChange(index, e)}
            />
            <input
              type="text"
              name="description"
              value={slide.description}
              onChange={(e) => handleInputChange(index, e)}
            />
            <input
              type="text"
              name="link"
              value={slide.link}
              onChange={(e) => handleInputChange(index, e)}
            />
            <input
              type="number"
              name="order"
              value={slide.order}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
        ))}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Slideshow;
