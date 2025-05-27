import KoreaIamge from "../assets/Korea.png";
import KoreaDestinationCard from "../components/KoreaDestinationCard";
import KoreaMapSection from "../components/KoreaMapSection";

import seoul from "../assets/seoul.png";
import gyeongju from "../assets/gyeongju.png";
import busan from "../assets/busan.png";
import jeju from "../assets/jeju.png";

const KoreaDestinations = [
  {
    image: seoul,
    title: "서울",
    description: "역사와 현대가 어우러진 대한민국의 수도. 경복궁, 남산타워, 광화문 등 다양한 명소가 있습니다.",
  },
  {
    image: gyeongju,
    title: "경주",
    description: "천년의 고도, 신라의 수도였던 도시로 불국사, 석굴암, 첨성대 등 문화유산이 풍부합니다.",
  },
  {
    image: busan,
    title: "부산",
    description: "해운대, 광안리 해변과 같은 유명 해변과 자갈치 시장, 감천문화마을로 유명한 항구 도시입니다.",
  },
  {
    image: jeju,
    title: "제주도",
    description: "화산섬의 아름다움과 한라산, 협재 해변, 성산일출봉 등 천혜의 자연경관을 자랑합니다.",
  },
];
function KoreaPage() {
  return (
    <div calssName="Korea-page" style = {{padding: "2rem", textAlign: "center"}}>
      <h1>한국 소개 페이지</h1>
      <KoreaMapSection />
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", borderBottom: "3px solid #333", display: "inline-block", paddingBottom: "0.5rem" }}>
  한국 주요 관광지
</h1>
       <div style={styles.page}>
      <div style={styles.cardContainer}>
        {KoreaDestinations.map((item, idx) => (
          <KoreaDestinationCard
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

export default KoreaPage;