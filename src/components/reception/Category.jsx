import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchCategories } from "../../api/category.api copy";

function Category() {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function loadCategories() {
      const response = await searchCategories();
      setCategories(response.data);
      setTitle("");
      
    }
    loadCategories().catch(setTitle("Offline, no connection to the server."));
  }, []);

  return (
    <>
      <div className="relative mx-auto max-w-7xl p-4 mb-8">
        <h1 className="text-5xl font-bold">Categories</h1>
        {title && (
          <p className="text-base font-thin mt-4 text-center">
            Offline, no connection to the server.
          </p>
        )}
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-8 justify-items-center items-center mb-20">
        {categories.map((category) => (
          <figure
            key={category.categoryId}
            className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          >
            <Link
              to={`/reception/category/${category.categoryId}/${category.name}`}
              
            >
              <img
                className="rounded-lg w-96 h-60 overflow-scroll"
                src={category.imgUrl}
                alt={category.name}
              />
              <figcaption className="font-extrabold uppercase absolute inset-0 flex items-center justify-center px-4 text-2xl text-white bg-black bg-opacity-30">
                <p>{category.name}</p>
              </figcaption>
            </Link>
            
          </figure>
          
        ))}
      </div>
      
    </>
  );
}

export default Category;
