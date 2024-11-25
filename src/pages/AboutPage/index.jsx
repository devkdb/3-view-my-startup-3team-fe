import "./index.css";

function AboutPage() {
  return (
    <div id="aboutPage" className="about-page">
      <h1 className="about-page__header">프로젝트 소개</h1>
      <section className="about-page__section">
        <h2 className="about-page__title">1. 프로젝트 개요</h2>
        <p className="about-page__text">
          본 프로젝트는 Codeit FS 3기 교육과정으로 진행된 스타트업 정보 제공 및
          모의 투자 플랫폼입니다.
        </p>
        <p className="about-page__text">
          사용자들이 스타트업을 비교하고 모의 투자를 통해 시장 분석과 예측을
          경험할 수 있도록 설계되었습니다.
        </p>
        <p className="about-page__text">
          이 프로젝트는 실제 투자 없이도 가상의 투자 환경에서 스타트업의 성장을
          체험할 수 있도록 돕는 것을 목표로 합니다.
        </p>
        <p className="about-page__text">
          최근 개인 투자자들의 스타트업에 대한 관심이 증가함에 따라, 스타트업
          정보에 대한 접근성을 개선하고, 가상의 투자 환경에서 다양한 분석과
          비교를 경험할 수 있는 서비스입니다.
        </p>
      </section>

      <section className="about-page__section">
        <h2 className="about-page__title">2. 주요 기능</h2>
        <ul className="about-page__list">
          <li className="about-page__item">스타트업 관련 정보 조회</li>
          <li className="about-page__item">스타트업 비교 기능</li>
          <li className="about-page__item">모의 투자 기능</li>
          <li className="about-page__item">
            사용자 세션을 기반으로 한 맞춤형 비교 정보 제공
          </li>
          <li className="about-page__item">비교 기업 선택 및 비교 현황 조회</li>
          <li className="about-page__item">
            가상 투자 및 투자 내역 수정, 삭제
          </li>
        </ul>
      </section>

      <section className="about-page__section">
        <h2 className="about-page__title">3. 사용 기술 스택</h2>
        <p className="about-page__text">
          이 프로젝트는 최신 웹 기술을 활용하여 개발되었습니다.
        </p>
        <ul className="about-page__list">
          <li className="about-page__item">프론트엔드: React.js</li>
          <li className="about-page__item">백엔드: Node.js, Express</li>
          <li className="about-page__item">데이터베이스: PostgreSQL</li>
          <li className="about-page__item">스타일링: CSS Modules</li>
          <li className="about-page__item">배포: Netlify, Render, AWS</li>
        </ul>
      </section>

      <section className="about-page__section">
        <h2 className="about-page__title">4. 프로젝트의 특징 및 장점</h2>
        <ol className="about-page__list about-page__list--ordered">
          <li className="about-page__item">
            <strong>트랜잭션 처리를 통한 데이터 무결성 유지</strong>
            <p>
              투자 시 기업의 누적 투자 금액과 개인의 투자 내역을 트랜잭션으로
              처리하여 동시성 제어를 강화했습니다.
            </p>
          </li>
          <li className="about-page__item">
            <strong>세션 기반의 기업 비교 정보 유지</strong>
            <p>
              브라우저를 닫기 전까지 사용자의 기업 비교 정보를 세션을 통해
              지속적으로 유지합니다.
            </p>
          </li>
          <li className="about-page__item">
            <strong>동순위 항목에 대한 완벽한 정렬 구현</strong>
            <p>
              매번 API 요청 시 동일한 결과를 보장하여 데이터의 일관성을
              유지합니다.
            </p>
          </li>
          <li className="about-page__item">
            <strong>숫자 데이터의 가독성 향상</strong>
            <p>
              투자 금액 등의 숫자에 3자리마다 콤마를 삽입하여 가독성을
              향상시켰습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="about-page__section">
        <h2 className="about-page__title">5. 개발 팀 정보</h2>
        <p className="about-page__text">
          본 프로젝트는 Codeit FS 3기 Part2 3팀이 개발했습니다.
        </p>
        <ul className="about-page__list">
          <li className="about-page__item">팀장: 김두봉</li>
          <li className="about-page__item">
            팀원: 김혁진, 박지흔, 배진한, 임예지, 최종훈
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
