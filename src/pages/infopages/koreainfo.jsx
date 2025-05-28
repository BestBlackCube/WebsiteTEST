import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import Seoulplace1 from "src/assets/koreaPic/koreaplace1.png";
import Seoulplace2 from "src/assets/koreaPic/koreaplace2.png";
import Seoulplace3 from "src/assets/koreaPic/koreaplace3.png";
import Seoulplace4 from "src/assets/koreaPic/koreaplace4.png";
import Seoulplace5 from "src/assets/koreaPic/koreaplace5.png";
import Seoulplace6 from "src/assets/koreaPic/koreaplace6.png";
import Seoulplace7 from "src/assets/koreaPic/koreaplace7.png";
import Seoulplace8 from "src/assets/koreaPic/koreaplace8.png";
import Seoulplace9 from "src/assets/koreaPic/koreaplace9.png";
import Seoulplace10 from "src/assets/koreaPic/koreaplace10.png";
import Seoulplace11 from "src/assets/koreaPic/koreaplace11.png";
import Seoulplace12 from "src/assets/koreaPic/koreaplace12.png";

import Seoulfood1 from "src/assets/koreaPic/koreafood1.png";
import Seoulfood2 from "src/assets/koreaPic/koreafood2.png";
import Seoulfood3 from "src/assets/koreaPic/koreafood3.png";
import Seoulfood4 from "src/assets/koreaPic/koreafood4.png";
import Seoulfood5 from "src/assets/koreaPic/koreafood5.png";
import Seoulfood6 from "src/assets/koreaPic/koreafood6.png";
import Seoulfood7 from "src/assets/koreaPic/koreafood7.png";
import Seoulfood8 from "src/assets/koreaPic/koreafood8.png";
import Seoulfood9 from "src/assets/koreaPic/koreafood9.png";

import Seoulhouse1 from "src/assets/koreaPic/koreahouse1.png";
import Seoulhouse2 from "src/assets/koreaPic/koreahouse2.png";
import Seoulhouse3 from "src/assets/koreaPic/koreahouse3.png";
import Seoulhouse4 from "src/assets/koreaPic/koreahouse4.png";
import Seoulhouse5 from "src/assets/koreaPic/koreahouse5.png";
import Seoulhouse6 from "src/assets/koreaPic/koreahouse6.png";
import Seoulhouse7 from "src/assets/koreaPic/koreahouse7.png";
import Seoulhouse8 from "src/assets/koreaPic/koreahouse8.png";

import "./koreainfo.css";

function Koreainfo() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const region = params.get("region");

  const seoulRef = useRef(null);
  const gyeongjuRef = useRef(null);
  const busanRef = useRef(null);
  const jejuRef = useRef(null);

  useEffect(() => {
    const scrollMap = {
      seoul: seoulRef,
      gyeongju: gyeongjuRef,
      busan: busanRef,
      jeju: jejuRef,
    };
    scrollMap[region]?.current?.scrollIntoView({ behavior: "smooth" });
  }, [region]);

  return (
    <div style={{ padding: "2rem" }}>
      <div ref={seoulRef} clasName = "region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">서울의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Seoulplace1} alt="경복궁" className="tour-image" />
               <div className="image-caption">경복궁</div>
            </div>
            <div className ="tour-item">
               <img src={Seoulplace2} alt="남산타워" className="tour-image" />
               <div className="image-caption">남산타워</div>
            </div>
            <div className ="tour-item">
               <img src={Seoulplace3} alt="광화문" className="tour-image" />
               <div className="image-caption">광화문</div>
            </div>
          </div>

         <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">서울의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Seoulfood1} alt="불고기" className="tour-image" />
               <div className="image-caption">불고기</div>
            </div>
            <div className ="tour-item">
               <img src={Seoulfood2} alt="비빔밥" className="tour-image" />
               <div className="image-caption">비빔밥</div>
            </div>
            <div className ="tour-item">
               <img src={Seoulfood3} alt="떢볶이" className="tour-image" />
               <div className="image-caption">떢볶이</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">서울의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Seoulhouse1} alt="롯데호텔" className="tour-image" />
               <div className="image-caption">롯데호텔</div>
            </div>
            <div className ="tour-item">
               <img src={Seoulhouse2} alt="신라호텔" className="tour-image" />
               <div className="image-caption">신라호텔</div>
            </div>
          </div>
      </div>

      <div ref={gyeongjuRef} clasName = "region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">경주의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
               <div className = "tour-item">
               <img src={Seoulplace4} alt="관광지" className="tour-image" />
            <div className="image-caption">불국사</div>
            </div>
            <div className = "tour-item">
               <img src={Seoulplace5} alt="불국사" className="tour-image" />
               <div className="image-caption">첨성대</div>    
            </div>
            <div className = "tour-item">
               <img src={Seoulplace6} alt="안압지" className="tour-image" />
               <div className="image-caption">안압지</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">경주의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Seoulfood4} alt="경주빵" className="tour-image" />
               <div className="image-caption">경주빵</div>
            </div>
            <div className ="tour-item">
               <img src={Seoulfood5} alt="황남빵" className="tour-image" />
               <div className="image-caption">황남빵</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">경주의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Seoulhouse3} alt="한옥스테이" className="tour-image" />
               <div className="image-caption">한옥스테이</div>
            </div>
            <div className ="tour-item">
               <img src={Seoulhouse4} alt="전통호텔" className="tour-image" />
               <div className="image-caption">전통호텔</div>
            </div>
          </div>
      </div>
      <div ref={busanRef} className ="region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">부산의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Seoulplace7} alt="관광지" className="tour-image" />
               <div className="image-caption">해운대</div>
            </div>
            <div className = "tour-item">
               <img src={Seoulplace8} alt="불국사" className="tour-image" />
               <div className="image-caption">광안리</div>
            </div>
            <div className = "tour-item">
               <img src={Seoulplace9} alt="안압지" className="tour-image" />
               <div className="image-caption">자갈치시장</div>       
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">부산의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Seoulfood6} alt="밀면" className="tour-image" />
               <div className="image-caption">밀면</div>
            </div>
            <div className ="tour-item">
               <img src={Seoulfood7} alt="돼지국밥" className="tour-image" />
               <div className="image-caption">돼지국밥</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">부산의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Seoulhouse5} alt="해운대 리조트" className="tour-image" />
               <div className="image-caption">해운대 리조트</div>
            </div>
            <div className ="tour-item">
               <img src={Seoulhouse6} alt="게스트하우스" className="tour-image" />
               <div className="image-caption">게스트하우스</div>
            </div>
          </div>
      </div>
      <div ref={jejuRef} className = "region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">제주도의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Seoulplace10} alt="관광지" className="tour-image" />
               <div className="image-caption">한라산</div>
            </div>
            <div className = "tour-item">
               <img src={Seoulplace11} alt="불국사" className="tour-image" />
               <div className="image-caption">성산일출봉</div>
            </div>
            <div className = "tour-item">
               <img src={Seoulplace12} alt="안압지" className="tour-image" />
               <div className="image-caption">협재해수욕장</div>       
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">제주도의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Seoulfood8} alt="흑돼지" className="tour-image" />
               <div className="image-caption">흑돼지</div>
            </div>
            <div className ="tour-item">
               <img src={Seoulfood9} alt="갈치조림" className="tour-image" />
               <div className="image-caption">갈치조림</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">제주도의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Seoulhouse7} alt="풀빌라" className="tour-image" />
               <div className="image-caption">풀빌라</div>
            </div>
            <div className ="tour-item">
               <img src={Seoulhouse8} alt="리조트" className="tour-image" />
               <div className="image-caption">리조트</div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Koreainfo;