import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import Japanplace1 from "src/assets/japanPic/japanplace1.png";
import Japanplace2 from "src/assets/japanPic/japanplace2.png";
import Japanplace3 from "src/assets/japanPic/japanplace3.png";
import Japanplace4 from "src/assets/japanPic/japanplace4.png";
import Japanplace5 from "src/assets/japanPic/japanplace5.png";
import Japanplace6 from "src/assets/japanPic/japanplace6.png";
import Japanplace7 from "src/assets/japanPic/japanplace7.png";
import Japanplace8 from "src/assets/japanPic/japanplace8.png";
import Japanplace9 from "src/assets/japanPic/japanplace9.png";
import Japanplace10 from "src/assets/japanPic/japanplace10.png";
import Japanplace11 from "src/assets/japanPic/japanplace11.png";
import Japanplace12 from "src/assets/japanPic/japanplace12.png";
import Japanplace13 from "src/assets/japanPic/japanplace13.png";
import Japanplace14 from "src/assets/japanPic/japanplace14.png";
import Japanplace15 from "src/assets/japanPic/japanplace15.png";

import Japanfood1 from "src/assets/japanPic/japanfood1.png";
import Japanfood2 from "src/assets/japanPic/japanfood2.png";
import Japanfood3 from "src/assets/japanPic/japanfood3.png";
import Japanfood4 from "src/assets/japanPic/japanfood4.png";
import Japanfood5 from "src/assets/japanPic/japanfood5.png";
import Japanfood6 from "src/assets/japanPic/japanfood6.png";
import Japanfood7 from "src/assets/japanPic/japanfood7.png";
import Japanfood8 from "src/assets/japanPic/japanfood8.png";
import Japanfood9 from "src/assets/japanPic/japanfood9.png";
import Japanfood10 from "src/assets/japanPic/japanfood10.png";
import Japanfood11 from "src/assets/japanPic/japanfood11.png";
import Japanfood12 from "src/assets/japanPic/japanfood12.png";

import Japanhouse1 from "src/assets/japanPic/japanhouse1.png";
import Japanhouse2 from "src/assets/japanPic/japanhouse2.png";
import Japanhouse3 from "src/assets/japanPic/japanhouse3.png";
import Japanhouse4 from "src/assets/japanPic/japanhouse4.png";
import Japanhouse5 from "src/assets/japanPic/japanhouse5.png";
import Japanhouse6 from "src/assets/japanPic/japanhouse6.png";
import Japanhouse7 from "src/assets/japanPic/japanhouse7.png";
import Japanhouse8 from "src/assets/japanPic/japanhouse8.png";
import Japanhouse9 from "src/assets/japanPic/japanhouse9.png";
import Japanhouse10 from "src/assets/japanPic/japanhouse10.png";
import Japanhouse11 from "src/assets/japanPic/japanhouse11.png";
import Japanhouse12 from "src/assets/japanPic/japanhouse12.png";

import "./japaninfo.css";

function Japaninfo() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const region = params.get("region");

  const TokyoRef = useRef(null);
  const KyotoRef = useRef(null);
  const OsakaRef = useRef(null);
  const SapporoRef = useRef(null);

  useEffect(() => {
    const scrollMap = {
      tokyo: TokyoRef,
      kyoto: KyotoRef,
      osaka: OsakaRef,
      sapporo: SapporoRef,
    };
    scrollMap[region]?.current?.scrollIntoView({ behavior: "smooth" });
  }, [region]);

  return (
    <div style={{ padding: "2rem" }}>
      <div ref={TokyoRef} clasName = "region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">도쿄의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Japanplace1} alt="도쿄 타워" className="tour-image" />
               <div className="image-caption">도쿄 타워</div>
            </div>
            <div className ="tour-item">
               <img src={Japanplace2} alt="시부야 스크램블 교차로" className="tour-image" />
               <div className="image-caption">시부야 스크램블 교차로</div>
            </div>
            <div className ="tour-item">
               <img src={Japanplace3} alt="아사쿠사 센소지" className="tour-image" />
               <div className="image-caption">아사쿠사 센소지</div>
            </div>
            <div className ="tour-item">
               <img src={Japanplace4} alt="도쿄 디즈니랜드" className="tour-image" />
               <div className="image-caption">도쿄 디즈니랜드</div>
            </div>
          </div>

         <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">도쿄의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Japanfood1} alt="스시" className="tour-image" />
               <div className="image-caption">스시</div>
            </div>
            <div className ="tour-item">
               <img src={Japanfood2} alt="라멘" className="tour-image" />
               <div className="image-caption">라멘</div>
            </div>
            <div className ="tour-item">
               <img src={Japanfood3} alt="몬자야키" className="tour-image" />
               <div className="image-caption">몬자야키</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">도쿄의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Japanhouse1} alt="파크 하얏트 도쿄" className="tour-image" />
               <div className="image-caption">파크 하얏트 도쿄</div>
            </div>
            <div className ="tour-item">
               <img src={Japanhouse2} alt="도쿄 돔 호텔" className="tour-image" />
               <div className="image-caption">도쿄 돔 호텔</div>
            </div>
            <div className ="tour-item">
               <img src={Japanhouse3} alt="에어비앤비" className="tour-image" />
               <div className="image-caption">에어비앤비</div>
            </div>
          </div>
      </div>

      <div ref={KyotoRef} clasName = "region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">교토의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
               <div className = "tour-item">
               <img src={Japanplace5} alt="기요미즈데라" className="tour-image" />
            <div className="image-caption">기요미즈데라</div>
            </div>
            <div className = "tour-item">
               <img src={Japanplace6} alt="후시미이나리 타이사" className="tour-image" />
               <div className="image-caption">후시미이나리 타이사</div>    
            </div>
            <div className = "tour-item">
               <img src={Japanplace7} alt="아라시야마 대나무 숲" className="tour-image" />
               <div className="image-caption">아라시야마 대나무 숲</div>
            </div>
            <div className = "tour-item">
               <img src={Japanplace8} alt="금각사" className="tour-image" />
               <div className="image-caption">금각사</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">교토의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Japanfood4} alt="유도후" className="tour-image" />
               <div className="image-caption">유도후</div>
            </div>
            <div className ="tour-item">
               <img src={Japanfood5} alt="말차 디저트" className="tour-image" />
               <div className="image-caption">말차 디저트</div>
            </div>
            <div className ="tour-item">
               <img src={Japanfood6} alt="야사카 야키토리" className="tour-image" />
               <div className="image-caption">야사카 야키토리</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">교토의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Japanhouse4} alt="료칸" className="tour-image" />
               <div className="image-caption">료칸</div>
            </div>
            <div className ="tour-item">
               <img src={Japanhouse5} alt="호텔 오쿠라 교토" className="tour-image" />
               <div className="image-caption">호텔 오쿠라 교토</div>
            </div>
            <div className ="tour-item">
               <img src={Japanhouse6} alt="게스트하우스" className="tour-image" />
               <div className="image-caption">게스트하우스</div>
            </div>
          </div>
      </div>
      <div ref={OsakaRef} className ="region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">오사카의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Japanplace9} alt="오사카성" className="tour-image" />
               <div className="image-caption">오사카성</div>
            </div>
            <div className = "tour-item">
               <img src={Japanplace10} alt="도톤보리" className="tour-image" />
               <div className="image-caption">도톤보리</div>
            </div>
            <div className = "tour-item">
               <img src={Japanplace11} alt="유니버설 스튜디오 재팬" className="tour-image" />
               <div className="image-caption">유니버설 스튜디오 재팬</div>       
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">오사카의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Japanfood7} alt="타코야키" className="tour-image" />
               <div className="image-caption">타코야키</div>
            </div>
            <div className ="tour-item">
               <img src={Japanfood8} alt="오코노미야키" className="tour-image" />
               <div className="image-caption">오코노미야키</div>
            </div>
            <div className ="tour-item">
               <img src={Japanfood9} alt="호르몬야끼" className="tour-image" />
               <div className="image-caption">호르몬야끼</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">오사카의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Japanhouse7} alt="스위소텔 난카이 오사카" className="tour-image" />
               <div className="image-caption">스위소텔 난카이 오사카</div>
            </div>
            <div className ="tour-item">
               <img src={Japanhouse8} alt="호텔 몬토레 그라스미어 오사카" className="tour-image" />
               <div className="image-caption">호텔 몬토레 그라스미어 오사카</div>
            </div>
            <div className ="tour-item">
               <img src={Japanhouse9} alt="비즈니스 호텔 & 캡슐호텔" className="tour-image" />
               <div className="image-caption">비즈니스 호텔 & 캡슐호텔</div>
            </div>
          </div>
      </div>
      <div ref={SapporoRef} className = "region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">삿포로의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Japanplace12} alt="삿포로 맥주 박물관" className="tour-image" />
               <div className="image-caption">삿포로 맥주 박물관</div>
            </div>
            <div className = "tour-item">
               <img src={Japanplace13} alt="오도리 공원" className="tour-image" />
               <div className="image-caption">오도리 공원</div>
            </div>
            <div className = "tour-item">
               <img src={Japanplace14} alt="모이와산 전망대" className="tour-image" />
               <div className="image-caption">모이와산 전망대</div>       
            </div>
            <div className = "tour-item">
               <img src={Japanplace15} alt="홋카이도 구 본청사" className="tour-image" />
               <div className="image-caption">홋카이도 구 본청사</div>       
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">삿포로의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Japanfood10} alt="삿포로 미소라멘" className="tour-image" />
               <div className="image-caption">삿포로 미소라멘</div>
            </div>
            <div className ="tour-item">
               <img src={Japanfood11} alt="징기스칸" className="tour-image" />
               <div className="image-caption">징기스칸</div>
            </div>
            <div className ="tour-item">
               <img src={Japanfood12} alt="해산물 덮밥" className="tour-image" />
               <div className="image-caption">해산물 덮밥</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">삿포로의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Japanhouse10} alt="JR 타워 호텔 닛코 삿포로" className="tour-image" />
               <div className="image-caption">JR 타워 호텔 닛코 삿포로</div>
            </div>
            <div className ="tour-item">
               <img src={Japanhouse11} alt="온천 료칸" className="tour-image" />
               <div className="image-caption">온천 료칸</div>
            </div>
            <div className ="tour-item">
               <img src={Japanhouse12} alt="게스트하우스" className="tour-image" />
               <div className="image-caption">게스트하우스</div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Japaninfo;