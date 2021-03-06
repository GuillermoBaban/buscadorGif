import React from "react";
import { Link } from "wouter";

import "./category.css";

export default function Category({ name, options = [] }) {
  return (
    <div className="Category">
      <h3 className="Category-title">{name}</h3>
      <ul className="Category-list">
        {options.map((singleOption) => (
          <li key={singleOption.id}>
            <Link className="Category-link" to={`/gif/${singleOption.title}`}>
              {singleOption.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
