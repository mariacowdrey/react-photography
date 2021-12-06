import React from 'react';
import photo from '../../assets/images/jimandlori.jpg';

function Gallery(props) {
  const currentCategory = {
    name: "Wedding",
    description: "Wedding photography",
  };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
          <img
            src={photo}
            alt="Wedding Example"
            className="img-thumbnail mx-1"
          />
      </div>

    </section>
  );
}
export default Gallery;