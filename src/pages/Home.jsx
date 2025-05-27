import React from "react";
import DestinationCard from "../components/DestinationCard.jsx";

function Home() {
  return (
    <div className="home-container" style={styles.hero}>
      <p>지금 가장 인기 있는 여행지를 만나보세요!</p>
      <DestinationCard />
    </div>
  );
}

export default Home;

const styles = {
  hero: {
    textAlign: "center",
    padding: "2rem",
    background: "#f5f5f5",
  },
};