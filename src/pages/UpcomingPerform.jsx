import React from 'react'
import { Link } from 'react-router-dom';
import handImg from '../assets/home/home-image-hand.svg'

export default function UpcomingPerform() {
  return (
    <div>
      {/* 공연일이 임박한 스테이지 */}
      <div className='flex flex-col mx-[16px] mt-[16px] mb-[8px]'>
        <div className={`flex flex-row w-full h-fit justify-between items-center`}>
          <div className={`flex flex-row items-center`}>
            <p className={`font-semibold text-[22px] p-0 m-0`}>공연일</p>
            <p className={`text-xl p-0 mr-1`}>이</p>
            <p className={`font-semibold text-[22px] mr-1`}>임박한</p>
            <p className={`text-xl mr-2`}>스테이지</p>
            <img src={handImg}/>
          </div>
        </div>
        <p className={`text-zinc-400`}>곧 공연하는 공연순으로 보여드립니다</p>
      </div>
    </div>
  )
}
