import React from 'react'

const texts = ['어쿠스틱', '소규모', '릭렉스', '힐링'];

export default function Mypage() {
  return (
    <div>
      <div className='bg-gray-100 h-96'>
        <p className='pl-6 pt-16 text-[24px] font-semibold text-neutral-400'>마이페이지</p>
        <div className='mx-48 mt-16 w-24 h-24 rounded-xl bg-gray-300'></div>
        <p className='flex justify-center items-center text-[24px] font-bold mt-4'>너글비글</p>
        <div className='flex justify-center items-center text-center'>
            {texts.map((text, index) => (
                <div
                    key={index}
                    className='ml-2 h-6 rounded bg-neutral-400 text-[16px] font text-white mt-2'
                    style={{ width: `${text.length * 21}px` }}
                >
                    {text}
                </div>
            ))}
        </div>
      </div>
      <div>
        <p className='ml-6 text-[24px] mt-7 font-light text-gray-500'>내 정보</p>
        <div className="border-b border-gray-300 w-full mt-7"></div>
      </div>
      <div>
        <p className='ml-6 text-[24px] mt-7 font-light text-gray-500'>계정 관리</p>
        <div className="border-b border-gray-300 w-full mt-7"></div>
      </div>
      <div>
        <p className='ml-6 text-[24px] mt-7 font-light text-gray-500'>공지사항</p>
        <div className="border-b border-gray-300 w-full mt-7"></div>
      </div>
      <div>
        <p className='ml-6 text-[24px] mt-7 font-light text-gray-500'>고객센터</p>
        <div className="border-b border-gray-300 w-full mt-7"></div>
      </div>
      <div>
        <p className='ml-6 text-[24px] mt-7 font-light text-gray-500'>버전정보</p>
        <div className="border-b border-gray-300 w-full mt-7"></div>
      </div>
    </div>
  )
};
