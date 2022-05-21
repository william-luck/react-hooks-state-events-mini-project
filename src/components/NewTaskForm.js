import React, { useState } from "react";


function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState('Code')

  function handleNameChange(event) {
    setNewName(event.target.value)
    // console.log(event.target.value)
  }

  function handleCategoryChange(event) {
    setNewCategory(event.target.value)  
    // console.log(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      text: newName,
      category: newCategory
    }
    // console.log(newItem)

    onTaskFormSubmit(newItem)
  }



  const categoriesToRender = categories.filter(category => {
    if (category !== 'All') return true
  })


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNameChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categoriesToRender.map(category => <option key={category}>{category}</option>)
          })
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
