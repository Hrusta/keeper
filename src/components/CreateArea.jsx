import React, { useState } from "react";

function CreateArea(props) {
  const [content, setContent] = useState({
    title: "",
    text: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContent((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          text: prevValue.text
        };
      } else if (name === "text") {
        return {
          title: prevValue.title,
          text: value
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={content.title}
        />
        <textarea
          name="text"
          onChange={handleChange}
          placeholder="Take a note..."
          value={content.text}
          rows="3"
        />
        <button
          type="button"
          onClick={() => {
            props.onAdd(content.text, content.title);
            setContent({ title: "", text: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
