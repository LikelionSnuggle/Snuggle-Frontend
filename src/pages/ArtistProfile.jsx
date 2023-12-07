import { useState, useEffect } from "react";

import TopBar from "../components/TopBar";
import HashTag from "../components/HashTag";

import Introduction from "../components/profile/Introduction";
import Notification from "../components/profile/Notification";
import Calendar from "../components/profile/Calendar";

function ArtistProfile() {
  const [expanded, setExpanded] = useState(false);
  const [category, setCategory] = useState(0);

  const hashTag = ["어쿠스틱", "소규모", "릴랙스", "힐링"];
  useEffect(() => {
    setExpanded(false);
    setCategory(0);
  }, []);

  const introContainerStyle = !expanded
    ? "max-h-[2.8rem] overflow-hidden relative mb-[48px] px-[16px]"
    : "mb-[48px] px-[16px]";

  return (
    <div className="h-full">
      <TopBar />
      <div className="w-full h-[264px] bg-background"></div>
      <div className="pt-[16px] pb-[78px]">
        <div className="flex gap-[9px] px-[16px]">
          {hashTag.map((item) => (
            <HashTag text={item} />
          ))}
        </div>
        <div className="mt-[16px] flex items-center justify-between mb-[12px] px-[16px]">
          <div className="flex items-center gap-[16px]">
            <div className="h-[40px] w-[40px] rounded-full bg-[#D9D9D9]" />
            <p className="font-bold text-[20px]">멋쟁이 사자처럼</p>
          </div>
          <button className="h-[24px] w-[53px] rounded-lg text-[12px] text-lightGrey border-lightGrey border">
            팔로우
          </button>
        </div>
        <div className={introContainerStyle}>
          <p className="text-lightGrey text-[14px] font-medium">
            한양대학교 ERICA캠퍼스에서 탄생한 특별한 음악 그룹, 이들의 음악은
            오롯이 학문과 예술이 어우러져 만들어진다. 실용음악과 전공 학생으로
            이루어진 이 밴드는 각자의 학번과 개성이 고스란히 녹아있어, 그들만의
            독특한 사운드를 창조해내고 있다.
            <br />
            <br />
            15학번의 한승우와 김예은, 16학번의 음상훈, 그리고 전고은. 서로 다른
            학번에서 왔지만, 그들이 하나로 뭉쳐 만든 음악은 마치 다양한 퍼즐
            조각들이 하나로 어우러져 완성되는 듯한 아름다움을 품고 있다.
            <br />
            <br />
            한승우와 김예은은 실용음악과에서의 첫 해를 함께 시작했다. 두 사람은
            서로 다른 악기와 음악적 경험을 가지고 있어, 처음 만났을 때부터
            서로에게 큰 영감을 주었다. 한승우는 기타의 소리로 감성을 표현하며,
            김예은은 키보드를 통해 음악에 색다른 면모를 불어넣는다.
            <br />
            <br />
            하지만 음악은 단지 소리만으로 이루어지는 것이 아니다. 16학번
            음상훈과 전고은은 이 밴드에 새로 합류했을 때, 그들의 기술적인 명맥이
            이어졌다. 음상훈은 드럼을 통해 곡에 리듬을 불어넣으며, 전고은은
            베이스로 깊이 있는 톤을 만들어낸다. 이렇게 네 명의 멤버가 모여
            만들어내는 밴드의 화려한 음악은 듣는 이로 하여금 새로운 세계로
            빠져들게 만든다.
            <br />
            <br />
            이들은 무엇보다도 자신들의 음악에 대한 열정과 신념을 가지고 있다.
            한승우는 "우리는 단순히 음악을 연주하는 것이 아니라, 각자의 이야기와
            감정을 공유하고자 한다"고 말한다. 김예은은 "다양한 학번에서 온
            우리는 서로의 차이를 존중하면서 하나로 어우러져 음악을 만든다"며
            밴드의 독특한 특성을 강조한다.
            <br />
            <br />
            이 밴드의 무대는 항상 화려하고 다채로운 라이브 퍼포먼스로 가득하다.
            그들은 자주 캠퍼스 내에서 공연을 열고, 학우들과 교수님들을 놀라게
            만들며 자신들만의 음악적 세계를 전파하고 있다. 이들의 무대는 오롯이
            음악과 예술을 사랑하는 이들에게 큰 감동을 선사한다.
            <br />
            <br />
            한양대학교 ERICA캠퍼스 실용음악과 학생들로 이뤄진 이 특별한 밴드는
            다양한 학번과 전공을 가진 멤버들이 모여 만든 음악으로, 학문과 예술이
            만나는 아름다운 협업의 결정체이다. 그들의 음악은 오로지 학문적인
            지식뿐만 아니라, 각자의 개성과 열정이 어우러져 창조된다. 이들이
            만들어낸 음악은 학문과 예술의 경계를 뛰어넘어 새로운 음악적 표현을
            찾아가고, 그 결과로 듣는 이들에게 큰 감동을 선사하고 있다. 이 특별한
            밴드는 미래에 더 많은 사람들에게 그들만의 음악 세계를 선사할 것으로
            기대된다.
          </p>
          {!expanded ? (
            <button
              className="absolute top-[24px] right-0 text-[10px] bg-white pl-[20px] pr-7 font-medium text-lightGrey"
              style={{
                background: "rgb(2, 0, 36)",
                // eslint-disable-next-line
                background:
                  "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 18%)",
              }}
              onClick={() => setExpanded(true)}
            >
              더보기
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="border-b-background border-b px-[16px] relative h-[36.5px]">
          <button
            className={`text-[18px] pb-[8px] ${
              category === 0
                ? "text-signature border-b-signature border-b-[3px] font-bold"
                : "text-lightGrey"
            }`}
            onClick={() => setCategory(0)}
          >
            소개
          </button>
          <button
            className={`text-[18px] pb-[8px] absolute left-[76px] ${
              category === 1
                ? "text-signature border-b-signature border-b-[3px] font-bold"
                : "text-lightGrey"
            }`}
            onClick={() => setCategory(1)}
          >
            공지
          </button>
          <button
            className={`text-[18px] pb-[8px] absolute left-[136px] ${
              category === 2
                ? "text-signature border-b-signature border-b-[3px] font-bold"
                : "text-lightGrey"
            }`}
            onClick={() => setCategory(2)}
          >
            공연목록
          </button>
          <button
            className={`text-[18px] pb-[8px] absolute left-[232px] ${
              category === 3
                ? "text-signature border-b-signature border-b-[3px] font-bold"
                : "text-lightGrey"
            }`}
            onClick={() => setCategory(3)}
          >
            캘린더
          </button>
        </div>
        <div className="bg-white">
          {category === 0 ? <Introduction /> : ""}
          {category === 1 ? <Notification /> : ""}
          {category === 3 ? <Calendar /> : ""}
        </div>
      </div>
    </div>
  );
}

export default ArtistProfile;
