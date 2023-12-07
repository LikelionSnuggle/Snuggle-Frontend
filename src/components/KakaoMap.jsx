import React from "react";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import PerformThumbnail from "../assets/performDetail-thumbnail.jpg";
// import MapCard from './MapCard';

const { kakao } = window;
Modal.setAppElement("#root");

export default function KakaoMap({ height, width }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    //지도를 표시할 container
    const mapContainer = document.getElementById("map");
    // 지도의 options
    const mapOptions = {
      center: new kakao.maps.LatLng(37.29639123114575, 126.83888515754965), //지도의 중심좌표
      level: 2, // 지도의 확대 레벨
    };
    // 지도 생성하기
    const map = new kakao.maps.Map(mapContainer, mapOptions);

    var positions = [
      {
        title: "한양대 에리카",
        latlng: new kakao.maps.LatLng(37.296437931384084, 126.83517446295409),
      },
      {
        title: "학생회관",
        latlng: new kakao.maps.LatLng(37.29747361269484, 126.83480846961646),
      },
      {
        title: "1공학관",
        latlng: new kakao.maps.LatLng(37.29761244503008, 126.83746427147501),
      },
      {
        title: "클러스터",
        latlng: new kakao.maps.LatLng(37.29639123114575, 126.83888515754965),
      },
    ];

    // 마커 이미지의 이미지 주소
    // var imageSrc =
    //   "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      //var imageSize = new kakao.maps.Size(34, 45);
      //var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        // image: markerImage, // 마커 이미지
      });

      kakao.maps.event.addListener(marker, "click", function () {
        setModalContent(this.getTitle()); // 클릭한 마커의 타이틀을 모달 내용으로 설정
        setIsOpen(true); // 모달 열기
      });
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div style={{ position: "relative" }}>
      <div id="map" style={{ width: width, height: height }}></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Perform Modal"
        className={`z-10 w-1/3 h-2/5 bg-white border-black border-2 rounded-lg`}
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          },
          content: {
            position: "relative",
            top: "auto",
            left: "auto",
            right: "auto",
            bottom: "auto",
          },
        }}
      >
        <img src={PerformThumbnail} alt="thumbnail" />
        <p className={`text-[24px] font-bold p-2`}>스너글 페스티벌 2023</p>
        {/* 날짜, 장소 */}
        <div className={`flex flex-row gap-2 px-2`}>
          <div className="flex flex-row w-fit h-fit px-[12px] py-[2px] bg-zinc-400 rounded-full gap-2 font-bold text-zinc-800">
            D-8
          </div>
          <div className="flex flex-row w-fit h-fit px-[12px] py-[2px] bg-signatureThin rounded-full gap-2 font-bold text-signature">
            학생회관 소극장
          </div>
        </div>
      </Modal>
    </div>
  );
}
