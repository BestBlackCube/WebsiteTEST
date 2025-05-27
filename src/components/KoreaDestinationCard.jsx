import React from "react";
import "./KoreaDestinationCard.css"; // 스타일은 선택사항

function KoreaDestinationCard({ image, title, description }) {
  return (
    <div className="Korea-card">
      <img src={image} alt={title} className="Korea-card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
const styles = {
  card: {
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  image: {
     width: "250px",     // 이미지 너비 고정
    height: "180px",    // 이미지 높이 고정
    objectFit: "cover", // 비율 유지하며 꽉 채움
    display: "block",
    margin: "0 auto",
  },
  title: {
    margin: "1rem 0 0.5rem",
    fontSize: "1.2rem",
  },
  description: {
    padding: "0 1rem 1rem",
    fontSize: "0.95rem",
    color: "#555",
  },
};
export default KoreaDestinationCard;