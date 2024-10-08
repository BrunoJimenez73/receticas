import React, { useState, useEffect, useRef } from 'react';

const RecipeList = ({ recipes }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const recipeListRef = useRef(null);

  useEffect(() => {
    const handleCategoryChange = () => {
      if (recipeListRef.current) {
        const newCategory = recipeListRef.current.getAttribute('data-selected-category');
        setSelectedCategory(newCategory || '');
      }
    };

    const observer = new MutationObserver(handleCategoryChange);
    
    if (recipeListRef.current) {
      observer.observe(recipeListRef.current, { attributes: true, attributeFilter: ['data-selected-category'] });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setFilteredRecipes(
      selectedCategory
        ? recipes.filter(recipe => recipe.category === selectedCategory)
        : recipes
    );
  }, [selectedCategory, recipes]);

  return (
    <div className="recipe-list" ref={recipeListRef}>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <div className="recipe-content">
            <h2>{recipe.title}</h2>
            <p><strong>Categoría:</strong> {recipe.category}</p>
            <p><strong>Dificultad:</strong> {recipe.difficulty}</p>
            <p><strong>Autor:</strong> {recipe.author}</p>
            <p><strong>Tiempo de preparación:</strong> {recipe.prepTime}</p>
            <p><strong>Ingredientes:</strong> {recipe.ingredients.join(', ')}</p>
            <a href={`/recipes/${recipe.id}`} className="view-recipe">Ver receta completa</a>
          </div>
        </div>
      ))}
      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        .recipe-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        .recipe-card:hover {
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .recipe-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .recipe-content {
          padding: 1rem;
        }
        h2 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }
        p {
          margin: 0.5rem 0;
        }
        .view-recipe {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }
        .view-recipe:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default RecipeList;