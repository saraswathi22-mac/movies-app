// import "./App.css";
// import {details} from './db';

// function App() {
//   return (
//     <div className="container">
//         {details.map(detail => {
//           const {id, name, genre} = detail;
//           return (
//             <span key={id}>
//               <h2>{name} {'->'} {genre}</h2>
//             </span>
//           )
//         })}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Menu from "./Entertainment";
import Categories from "./Categories";
import { details } from "./db";
const allCategories = ["all", ...new Set(details.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(details);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(details);
      return;
    }
    const newItems = details.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Entertainment</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
