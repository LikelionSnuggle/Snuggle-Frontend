import React from 'react';
import { useEffect, useState } from "react";
import KakaoMap from '../components/KakaoMap';

const {kakao} = window;

export default function Map() {

  return (
    <div className={`w-full h-full`}>
        <KakaoMap />
    </div>
  )
}
