import React, { useState } from 'react'
import tagIcon from '../assets/all-icon-tag.svg'

export default function PPostCollect() {
    const [isDeleted1, setDeleted1] = useState(false);
    const [isDeleted2, setDeleted2] = useState(false);

    const handleDelete1 = () => {
        setDeleted1(true);
    };

    const handleDelete2 = () => {
        setDeleted2(true);
    };

  return (
    <div>
        {!isDeleted1 && (
            <div>
                <div className='flex justify-center items-center'>
                    <p className='flex justify-center items-center text-center w-14 h-8 border border-gray-300 rounded-xl ml-72 text-gray-500 mt-24'>수정</p>
                    <p className='flex justify-center items-center text-center w-14 h-8 border border-gray-300 rounded-xl ml-5 text-gray-500 mt-24'
                        onClick={handleDelete1}
                    >삭제</p>
                </div>
                <div className='w-11/12 h-96 ml-5 mt-3 border border-gray-300 rounded-xl'>
                    <p className='ml-4 mt-3 text-[16px] text-neutral-500 font-medium'>게시글 이름</p>
                    <div className='justify-center items-center'>
                        <hr className='w-10/12 mt-2'></hr>
                        <div className='w-10/12 h-72 bg-neutral-400 mt-3'></div>
                    </div>
                    <div className='flex'>
                        <img className={'w-6 ml-4 mt-1.5'} src={tagIcon} alt='태그'/>
                        <div className='flex items-center justify-between w-16 h-6 pl-2 bg-gray-200 rounded-2xl mt-1.5 ml-2'></div>
                    </div>
                </div>
            </div>
        )}

        {!isDeleted2 && (
            <div>
                <div className='flex justify-center items-center'>
                    <p className='flex justify-center items-center text-center w-14 h-8 border border-gray-300 rounded-xl ml-72 text-gray-500 mt-12'>수정</p>
                    <p className='flex justify-center items-center text-center w-14 h-8 border border-gray-300 rounded-xl ml-5 text-gray-500 mt-12'
                        onClick={handleDelete2}
                    >삭제</p>
                </div>
                <div className='w-11/12 h-96 ml-5 mt-3 border border-gray-300 rounded-xl'>
                    <p className='ml-4 mt-3 text-[16px] text-neutral-500 font-medium'>게시글 이름</p>
                    <div className='justify-center items-center'>
                        <hr className='w-10/12 mt-2'></hr>
                        <div className='w-10/12 h-72 bg-neutral-400 mt-3'></div>
                    </div>
                    <div className='flex'>
                        <img className={'w-6 ml-4 mt-1.5'} src={tagIcon} alt='태그'/>
                        <div className='flex items-center justify-between w-16 h-6 pl-2 bg-gray-200 rounded-2xl mt-1.5 ml-2'></div>
                    </div>
                </div>
            </div>    
        )}
    </div>
  )
}