import React from "react";
import { useEffect, useState } from "react";
import Modal from "react-modal";
// import MapCard from './MapCard';

const { kakao } = window;
Modal.setAppElement("#root");

export default function KakaoMap({ height, width }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    //지도를 표시할 container
    const mapContainer = document.getElementById("map");
    // 지도의 options
    const mapOptions = {
      center: new kakao.maps.LatLng(37.296437931384084, 126.83517446295409), //지도의 중심좌표
      level: 3, // 지도의 확대 레벨
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

    // 지도 중심좌표의 마커 생성하기
    // var centerMarker = new kakao.maps.Marker({
    //     position: map.getCenter()
    // });

    // 마커 이미지의 이미지 주소
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      var imageSize = new kakao.maps.Size(34, 45);
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });

      // 마커를 클릭했을 때 모달 열기
      kakao.maps.event.addListener(marker, "click", function () {
        const title = this.getTitle();
        const content = <div>{title}</div>; // 마커 클릭에 따라 표시할 컨텐츠를 정의

        setModalContent(content); // 모달 컨텐츠 설정
        setIsModalOpen(true); // 모달 열기
      });
    }
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div id="map" style={{ width: width , height: height }}>
        {isModalOpen && (
          <Modal
            className={`fixed top-1/2 left-1/2 
                        outline-none flex flex-col text-center`}
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                display: "grid",
                placeItems: "center",
                zIndex: 1,
              },
              content: {
                backgroundColor: "white",
                border: "none",
                width: "300px",
                height: "200px",
              },
            }}
          >
            {modalContent}
            <button onClick={() => setIsModalOpen(false)}>닫기</button>
          </Modal>
        )}
      </div>
    </div>
  );
}
