import React from "react";
import parisImage from "../assets/paris.PNG";
import dokyoImage from "../assets/dokyo.png";
import satoriniImage from "../assets/santorini.png";
const destinations = [
  {
    image: parisImage,
    title: "파리",
    description: "로맨틱한 에펠탑의 도시",
  },
  {
    image: dokyoImage,
    title: "도쿄",
    description: "현대와 전통이 공존하는 도시",
  },
  {
    image: satoriniImage,
    title: "산토리니",
    description: "지중해의 푸른 바다와 하얀 집들",
  },
];


function DestinationCard() {
  return (
    <div style={styles.container}>
      {destinations.map((dest, index) => (
        <div key={index} style={styles.card}>
          <h2>{dest.title}</h2>
          <p>{dest.description}</p>
          <img src={dest.image} alt={dest.title} style={styles.image} />
        </div>
      ))}
    </div>
  );
}

export default DestinationCard;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    padding: "2rem",
    flexWrap: "wrap",
  },
  card: {
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};