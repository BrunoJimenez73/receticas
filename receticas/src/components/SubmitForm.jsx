import React, { useState } from 'react';

const SubmitForm = () => {
  const [recipe, setRecipe] = useState({ title: '', description: '', ingredients: '', instructions: '' });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted recipe:', recipe);
    // Here you would typically send the data to a server
    alert('Recipe submitted successfully!');
    setRecipe({ title: '', description: '', ingredients: '', instructions: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="submit-form">
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={recipe.title} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={recipe.description} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea id="ingredients" name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" name="instructions" value={recipe.instructions} onChange={handleChange} required />
      </div>
      <button type="submit">Submit Recipe</button>
      <style jsx>{`
        .submit-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        label {
          font-weight: bold;
        }
        input, textarea {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          background-color: #333;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        button:hover {
          background-color: #555;
        }
      `}</style>
    </form>
  );
};

export default SubmitForm;