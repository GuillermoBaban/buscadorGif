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
      <p>{title}</p>
      <p>{type}</p>
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
