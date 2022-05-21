import React, { useState } from "react";
import TaskList from "./TaskList";

function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  

  function handleClick(event) {
    // Set class name
    const buttonClicked = event.target
    buttonClicked.className = 'selected'

    // Set category to the button that was clicked
    // setSelectedCategory(event.target.innerText)

    onCategoryChange(event.target.textContent)   
  }





  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
        {categories.map(category => (
          <button 
            key={category} 
            onClick={handleClick}>
              {category}</button>
        ))}
    </div>
  );
}

export default CategoryFilter;
