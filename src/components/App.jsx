import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(text, title) {
    setItems((prevItems) => {
      return [...prevItems, { text, title }];
    });
  }

  function deleteItem(id){
    setItems(prevItems => {
      return items.filter((item,index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      <ul>
        {items.map((content, index) => (
          <Note
            key={index}
            id={index}
            title={content.title}
            text={content.text}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
