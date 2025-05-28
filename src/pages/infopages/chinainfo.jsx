import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import Chinaplace1 from "src/assets/chinaPic/chinaplace1.png";
import Chinaplace2 from "src/assets/chinaPic/chinaplace2.png";
import Chinaplace3 from "src/assets/chinaPic/chinaplace3.png";
import Chinaplace4 from "src/assets/chinaPic/chinaplace4.png";
import Chinaplace5 from "src/assets/chinaPic/chinaplace5.png";
import Chinaplace6 from "src/assets/chinaPic/chinaplace6.png";
import Chinaplace7 from "src/assets/chinaPic/chinaplace7.png";
import Chinaplace8 from "src/assets/chinaPic/chinaplace8.png";
import Chinaplace9 from "src/assets/chinaPic/chinaplace9.png";
import Chinaplace10 from "src/assets/chinaPic/chinaplace10.png";
import Chinaplace11 from "src/assets/chinaPic/chinaplace11.png";
import Chinaplace12 from "src/assets/chinaPic/chinaplace12.png";
import Chinaplace13 from "src/assets/chinaPic/chinaplace13.png";
import Chinaplace14 from "src/assets/chinaPic/chinaplace14.png";
import Chinaplace15 from "src/assets/chinaPic/chinaplace15.png";
import Chinaplace16 from "src/assets/chinaPic/chinaplace16.png";

import Chinafood1 from "src/assets/chinaPic/chinafood1.png";
import Chinafood2 from "src/assets/chinaPic/chinafood2.png";
import Chinafood3 from "src/assets/chinaPic/chinafood3.png";
import Chinafood4 from "src/assets/chinaPic/chinafood4.png";
import Chinafood5 from "src/assets/chinaPic/chinafood5.png";
import Chinafood6 from "src/assets/chinaPic/chinafood6.png";
import Chinafood7 from "src/assets/chinaPic/chinafood7.png";
import Chinafood8 from "src/assets/chinaPic/chinafood8.png";
import Chinafood9 from "src/assets/chinaPic/chinafood9.png";
import Chinafood10 from "src/assets/chinaPic/chinafood10.png";
import Chinafood11 from "src/assets/chinaPic/chinafood11.png";
import Chinafood12 from "src/assets/chinaPic/chinafood12.png";

import Chinahouse1 from "src/assets/chinaPic/chinahouse1.png";
import Chinahouse2 from "src/assets/chinaPic/chinahouse2.png";
import Chinahouse3 from "src/assets/chinaPic/chinahouse3.png";
import Chinahouse4 from "src/assets/chinaPic/chinahouse4.png";
import Chinahouse5 from "src/assets/chinaPic/chinahouse5.png";
import Chinahouse6 from "src/assets/chinaPic/chinahouse6.png";
import Chinahouse7 from "src/assets/chinaPic/chinahouse7.png";
import Chinahouse8 from "src/assets/chinaPic/chinahouse8.png";
import Chinahouse9 from "src/assets/chinaPic/chinahouse9.png";
import Chinahouse10 from "src/assets/chinaPic/chinahouse10.png";
import Chinahouse11 from "src/assets/chinaPic/chinahouse11.png";
import Chinahouse12 from "src/assets/chinaPic/chinahouse12.png";

import "./chinainfo.css";

function Chinainfo() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const region = params.get("region");

  const BeijingRef = useRef(null);
  const ShanghaiRef = useRef(null);
  const XianRef = useRef(null);
  const GuilinRef = useRef(null);

  useEffect(() => {
    const scrollMap = {
      beijing: BeijingRef,
      shanghai: ShanghaiRef,
      xian: XianRef,
      guilin: GuilinRef,
    };
    scrollMap[region]?.current?.scrollIntoView({ behavior: "smooth" });
  }, [region]);

  return (
    <div style={{ padding: "2rem" }}>
      <div ref={BeijingRef} clasName = "region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">베이징의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Chinaplace1} alt="자금성" className="tour-image" />
               <div className="image-caption">자금성</div>
            </div>
            <div className ="tour-item">
               <img src={Chinaplace2} alt="만리장성" className="tour-image" />
               <div className="image-caption">만리장성</div>
            </div>
            <div className ="tour-item">
               <img src={Chinaplace3} alt="천안문 광장" className="tour-image" />
               <div className="image-caption">천안문 광장</div>
            </div>
            <div className ="tour-item">
               <img src={Chinaplace4} alt="이화원" className="tour-image" />
               <div className="image-caption">이화원</div>
            </div>
          </div>

         <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">베이징의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Chinafood1} alt="카오야" className="tour-image" />
               <div className="image-caption">카오야</div>
            </div>
            <div className ="tour-item">
               <img src={Chinafood2} alt="짜장면" className="tour-image" />
               <div className="image-caption">짜장면</div>
            </div>
            <div className ="tour-item">
               <img src={Chinafood3} alt="로우지아모" className="tour-image" />
               <div className="image-caption">로우지아모</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">베이징의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Chinahouse1} alt="페닌슐라 베이징" className="tour-image" />
               <div className="image-caption">페닌슐라 베이징</div>
            </div>
            <div className ="tour-item">
               <img src={Chinahouse2} alt="노보텔 베이징 시완호텔" className="tour-image" />
               <div className="image-caption">노보텔 베이징 시완호텔</div>
            </div>
            <div className ="tour-item">
               <img src={Chinahouse3} alt="호스텔" className="tour-image" />
               <div className="image-caption">호스텔</div>
            </div>
          </div>
      </div>

      <div ref={ShanghaiRef} clasName = "region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">상하이의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
               <div className = "tour-item">
               <img src={Chinaplace5} alt="동방명주탑" className="tour-image" />
            <div className="image-caption">동방명주탑</div>
            </div>
            <div className = "tour-item">
               <img src={Chinaplace6} alt="와이탄" className="tour-image" />
               <div className="image-caption">와이탄</div>    
            </div>
            <div className = "tour-item">
               <img src={Chinaplace7} alt="상하이 디즈니랜드" className="tour-image" />
               <div className="image-caption">상하이 디즈니랜드</div>
            </div>
            <div className = "tour-item">
               <img src={Chinaplace8} alt="유원" className="tour-image" />
               <div className="image-caption">유원</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">상하이의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Chinafood4} alt="샤오롱바오" className="tour-image" />
               <div className="image-caption">샤오롱바오</div>
            </div>
            <div className ="tour-item">
               <img src={Chinafood5} alt="상하이식 생선요리" className="tour-image" />
               <div className="image-caption">상하이식 생선요리</div>
            </div>
            <div className ="tour-item">
               <img src={Chinafood6} alt="성완탄" className="tour-image" />
               <div className="image-caption">성완탄</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">상하이의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Chinahouse4} alt="더 페닌슐라 상하이" className="tour-image" />
               <div className="image-caption">더 페닌슐라 상하이</div>
            </div>
            <div className ="tour-item">
               <img src={Chinahouse5} alt="푸동 메리어트 호텔" className="tour-image" />
               <div className="image-caption">푸동 메리어트 호텔</div>
            </div>
            <div className ="tour-item">
               <img src={Chinahouse6} alt="에어비앤비 & 게스트하우스" className="tour-image" />
               <div className="image-caption">에어비앤비 & 게스트하우스</div>
            </div>
          </div>
      </div>
      <div ref={XianRef} className ="region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">시안의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Chinaplace9} alt="병마용" className="tour-image" />
               <div className="image-caption">병마용</div>
            </div>
            <div className = "tour-item">
               <img src={Chinaplace10} alt="시안 성벽" className="tour-image" />
               <div className="image-caption">시안 성벽</div>
            </div>
            <div className = "tour-item">
               <img src={Chinaplace11} alt="대안탑" className="tour-image" />
               <div className="image-caption">대안탑</div>       
            </div>
            <div className = "tour-item">
               <img src={Chinaplace12} alt="회족거리" className="tour-image" />
               <div className="image-caption">회족거리</div>       
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">시안의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Chinafood7} alt="비앙비앙면" className="tour-image" />
               <div className="image-caption">비앙비앙면</div>
            </div>
            <div className ="tour-item">
               <img src={Chinafood8} alt="로우지아모" className="tour-image" />
               <div className="image-caption">로우지아모</div>
            </div>
            <div className ="tour-item">
               <img src={Chinafood9} alt="양고기수프" className="tour-image" />
               <div className="image-caption">양고기수프</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">시안의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Chinahouse7} alt="소피텔 시안 온 런민 스퀘어" className="tour-image" />
               <div className="image-caption">소피텔 시안 온 런민 스퀘어</div>
            </div>
            <div className ="tour-item">
               <img src={Chinahouse8} alt="홀리데이 인 익스프레스 시안" className="tour-image" />
               <div className="image-caption">홀리데이 인 익스프레스 시안</div>
            </div>
            <div className ="tour-item">
               <img src={Chinahouse9} alt="민박 & 호스텔" className="tour-image" />
               <div className="image-caption">민박 & 호스텔</div>
            </div>
          </div>
      </div>
      <div ref={GuilinRef} className = "region-section" style={{ marginBottom: "100px", border: "2px solid #ccc", padding: "1rem" }}>
          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">구이린의 지역 명소</div>
            </div>  
          </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Chinaplace13} alt="이강" className="tour-image" />
               <div className="image-caption">이강</div>
            </div>
            <div className = "tour-item">
               <img src={Chinaplace14} alt="양수오" className="tour-image" />
               <div className="image-caption">양수오</div>
            </div>
            <div className = "tour-item">
               <img src={Chinaplace15} alt="상비산" className="tour-image" />
               <div className="image-caption">상비산</div>       
            </div>
            <div className = "tour-item">
               <img src={Chinaplace16} alt="칠성공원" className="tour-image" />
               <div className="image-caption">칠성공원</div>       
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">구이린의 먹거리</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Chinafood10} alt="미펀" className="tour-image" />
               <div className="image-caption">미펀</div>
            </div>
            <div className ="tour-item">
               <img src={Chinafood11} alt="양고치꼬치" className="tour-image" />
               <div className="image-caption">양고치꼬치</div>
            </div>
            <div className ="tour-item">
               <img src={Chinafood12} alt="산초 닭찜" className="tour-image" />
               <div className="image-caption">산초 닭찜</div>
            </div>
          </div>

          <div className = "tour-row">
            <div className= "tour-card">
                <div className = "caption">구이린의 숙소</div>
            </div>  
        </div>
          <div className="tour-image-container">
            <div className = "tour-item">
               <img src={Chinahouse10} alt="샹그릴라 호텔 구이린" className="tour-image" />
               <div className="image-caption">샹그릴라 호텔 구이린</div>
            </div>
            <div className ="tour-item">
               <img src={Chinahouse11} alt="양수오 리조트" className="tour-image" />
               <div className="image-caption">양수오 리조트</div>
            </div>
            <div className ="tour-item">
               <img src={Chinahouse12} alt="게스트하우스" className="tour-image" />
               <div className="image-caption">게스트하우스</div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Chinainfo;