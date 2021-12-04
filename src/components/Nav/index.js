import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

function Nav() {
    const categories = [
        { name: "Wedding", description: "Wedding photography" },
        { name: "Engagement", description: "Engagement photos" },
        {
          name: "Landscape",
          description: "Fields, sunsets, and the beauty of nature",
        },
      ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
    <h2>
      <a href="/">
        <span><FontAwesomeIcon icon={faCameraRetro} /></span> Maria Cowdrey Photography
      </a>
    </h2>
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#about" onClick={() => handleClick()}>
            About me
          </a>
        </li>
        <li className={"mx-2"}>
          <span onClick={() => handleClick()}>
              Contact
              </span>
        </li>
        {
        categories.map((category) => (
        <li className="mx-1" key={category.name} >
          <span onClick={() => { handleClick(); }}>
            {category.name}
          </span>
        </li>
      ))}
        
      </ul>
    </nav>
  </header>
  );
}

export default Nav;