import "./gif.css";
import { Link } from "wouter";

export default function Gif({
  id,
  title,
  url,
  username,
  type,
  trending_datetime,
}) {
  return (
    <div className="Gif">
      <h4>{title}</h4>
      <p className="mt-3">{type}</p>
      <p>{username}</p>
      <p>{trending_datetime}</p>
      <Link to={`/${id}`} className="Gif-link">
        <img
          loading="lazy"
          alt={title}
          src={url}
          style={{ cursor: "pointer" }}
        />
      </Link>
    </div>
  );
}
