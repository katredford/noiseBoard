import React from "react";

function Nav() {
    const categories = [
        { name: "archive", description: "All previous noiseboards" },
        // {name: "contact", description:"sign up for updates or ask questions"},
      ];

      function categorySelected(name) {
        console.log(`${name} clicked`)
      }

    return (
        <header>
        <h1 className="title">
        <a href="./index.html">
          BBCM Noise Board
      </a>
    </h1>
    <nav>
    <ul className="flex-row">
      <li className="header nav">
        <a href="#about">
          About
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
       {categories.map((category) => (
        <li
          className="header nav ul "
          key={category.name}
        >
          <span onClick={categorySelected(category.name)}>
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