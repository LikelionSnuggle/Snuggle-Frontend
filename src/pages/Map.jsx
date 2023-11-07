import React from "react";
// import { useEffect, useState } from "react";
import KakaoMap from "../components/KakaoMap";

export default function Map() {
  return (
    <div className={`w-full h-full`}>
      <KakaoMap height="100rem" widht="100rem"/>
    </div>
  );
}
