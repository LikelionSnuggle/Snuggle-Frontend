import React from 'react';
import { useEffect, useState } from "react";

const {kakao} = window;

export default function KakaoMap() {
    useEffect(()=> {
        const container = document.getElementById('map');
        const options = {
          center : new kakao.maps.LatLng(37.296437931384084, 126.83517446295409),
          level : 3
        }
        const map = new kakao.maps.Map(container, options);
    }, [])
  

  return (
    <div id="map" style={{width : `480px`, height:`852px`}}></div>
  )
}
