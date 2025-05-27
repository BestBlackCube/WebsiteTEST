import japanIamge from "../assets/japan.png";
import JapanDestinationCard from "../components/JapanDestinationCard";
import JapanMapSection from "../components/JapanMapSection";

import dokyo from "../assets/dokyo.png";
import kyoto from "../assets/kyoto.png";
import osaka from "../assets/osaka.png";
import satporo from "../assets/satporo.png";

const japanDestinations = [
  {
    image: dokyo,
    title: "도쿄",
    description: "역사와 현대가 공존하는 일본의 수도. 도쿄타워, 아사쿠사 절, 시부야 교차로 등 다양한 볼거리가 있습니다.",
  },
  {
    image: kyoto,
    title: "교토",
    description: "천년 고도로 불리는 전통의 도시. 기온 거리, 후시미이나리 신사, 금각사 등 아름다운 유산이 가득합니다.",
  },
  {
    image: osaka,
    title: "오사카",
    description: "다채로운 먹거리와 활기찬 분위기의 도시. 도톤보리, 오사카성, 유니버설 스튜디오 등 즐길 거리가 풍부합니다.",
  },
  {
    image: satporo,
    title: "삿포로",
    description: "자연과 축제가 어우러진 북쪽의 중심 도시. 삿포로 눈 축제, 오도리 공원, 삿포로 맥주 박물관 등이 유명합니다.",
  },
];
function JapanPage() {
  return (
    <div calssName="japan-page" style = {{padding: "2rem", textAlign: "center"}}>
      <h1>일본 소개 페이지</h1>
      <JapanMapSection />
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", borderBottom: "3px solid #333", display: "inline-block", paddingBottom: "0.5rem" }}>
  일본 주요 관광지
</h1>
       <div style={styles.page}>
      <div style={styles.cardContainer}>
        {japanDestinations.map((item, idx) => (
          <JapanDestinationCard
            key={idx}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
    </div>
    
  );
}const styles = {
  page: {
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  sub: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "2rem",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem",
  },
};

export default JapanPage;