import React from "react";
import { formatDate } from "./untils";

function Recipe({ recipe }) {
  const { title, created, description, image, _id } = recipe;
  return (
    <summary>
      <img src={`img/${image}`} alt={title} />
      <h3>
        <a href={_id}>{title}</a>
      </h3>
      <p>{description}</p>
      <small>Published: {formatDate(created)}</small>
    </summary>
  );
}

export default Recipe;
