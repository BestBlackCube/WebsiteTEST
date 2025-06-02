import ChinaDestinationCard from "../components/ChinaDestinationCard";
import ChinaMapSection from "../components/ChinaMapSection";

import beijing from "../assets/beijing.png";
import shanghai from "../assets/shanghai.png";
import xian from "../assets/xian.png";
import guilin from "../assets/guilin.png";

const ChinaDestinations = [
  {
    image: beijing, // 예: 'beijing.png'
    title: "베이징",
    description: "중국의 수도이자 역사와 문화의 중심지. 자금성, 천안문 광장, 만리장성 등 세계적인 명소가 있습니다.",
  },
  {
    image: shanghai, // 예: 'shanghai.png'
    title: "상하이",
    description: "중국 경제의 중심 도시. 와이탄, 동방명주, 디즈니랜드 등 현대적 매력이 가득합니다.",
  },
  {
    image: xian, // 예: 'xian.png'
    title: "시안",
    description: "중국 고대의 수도로 역사 유적이 풍부한 도시. 진시황 병마용, 시안 성벽 등 볼거리가 많습니다.",
  },
  {
    image: guilin, // 예: 'guilin.png'
    title: "구이린",
    description: "아름다운 자연 경관으로 유명한 도시. 리강, 양수오의 카르스트 지형이 인상적입니다.",
  },
];
function ChinaPage() {
  return (
    <div calssName="China-page" style = {{padding: "2rem", textAlign: "center"}}>
      <h1>중국 소개 페이지</h1>
      <ChinaMapSection />
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", borderBottom: "3px solid #333", display: "inline-block", paddingBottom: "0.5rem" }}>
  중국 주요 관광지
</h1>
       <div style={styles.page}>
      <div style={styles.cardContainer}>
        {ChinaDestinations.map((item, idx) => (
          <ChinaDestinationCard
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

export default ChinaPage;