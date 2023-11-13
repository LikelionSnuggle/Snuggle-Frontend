import React from 'react'
import { Link } from 'react-router-dom';
import pinImg from '../assets/home/home-image-redpin.svg'

export default function NewPerform() {
  return (
    <div className={`bg-white w-full h-full`}>
      {/* 새로운 스테이지 소식 */}
      <div className='flex flex-col mx-[16px] mt-[16px] mb-[8px]'>
        <div className={`flex flex-row w-full h-fit justify-between items-center`}>
          <div className={`flex flex-row items-center`}>
            <p className={`font-semibold text-[22px] p-0 mr-1`}>새로운</p>
            <p className={`text-xl mr-1`}>스테이지</p>
            <p className={`text-xl mr-2`}>소식</p>
            <img src={pinImg}/>
          </div>
        </div>
        <p className={`text-zinc-400`}>가장 최근에 등록된 공연순으로 보여드립니다</p>
      </div>
    </div>
  )
}
