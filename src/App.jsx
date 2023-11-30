import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Gallery from "./components/Gallery";

import "./index.css";

function App() {
  const [category, setCategory] = useState(1);

  return (
    <div className="photo-gallery-container">
      <div className="slug-area">
        <h2>Gallery</h2>
        <p>Pages - Gallery</p>
      </div>
      <h2>Photo Gallery</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <Buttons category={category} setCategory={setCategory} />
      <Gallery category={category} />
    </div>
  );
}

export default App;
