import React, { useState } from 'react'

const TextInput = ({ label, value, onChange, isContent}) => {
    const inputClass = isContent
    ? 'text-[22px] border-b bg-gray-100 border-gray-300 focus:outline-none focus:border-orange-400 h-48 px-3 py-2 mx-4 mt-2'
    : 'text-[22px] border-b bg-gray-100 border-gray-300 focus:outline-none focus:border-orange-400 h-12 px-3 py-2 mx-4 mt-2';

  return (
    <div className="mb-4 flex flex-col font-['IBM-Plex-Sans']">
      <label className="text-lightGrey text-[22px] font-bold mt-8 ml-4 flex-shrink-0">{label}</label>
      <textarea
        className={inputClass}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};


const RegistOrSaver = ({ savedValue, onSave }) => {
  return (
    <div className="text-[24px] font-['IBM-Plex-Sans'] w-full mt-16">
      <div
        className={`h-16 mx-4 rounded-2xl flex items-center justify-center cursor-pointer ${
          savedValue === '저장하기' ? 'bg-orange-400' : 'bg-gray-200'
        }`}
        onClick={() => onSave('저장하기')}
        style={{ zIndex: savedValue === '저장하기' ? 1 : 0}}
      >저장하기</div>
      <div
        className={`h-16 mx-4 my-5 rounded-2xl flex items-center justify-center cursor-pointer ${
          savedValue === '등록하기' ? 'bg-orange-400' : 'bg-gray-200'
        }`}
        onClick={() => onSave('등록하기')}
        style={{ zIndex: savedValue === '유료' ? 1 : 0}}
      >등록하기</div>
    </div>
  );
};


export default function NoticePost() {

    // const [selectedImage, setSelectedImage] = useState(null);
    const [inputValues, setInputValues] = useState({
      input1: '',
      input2: '',
      tags: [],
    });
    
    // const handleImageUpload = (event) => {
    //     const file = event.target.files[0];

    //     if (file) {
    //       const reader = new FileReader();

    //       reader.onload = () => {
    //         setSelectedImage(reader.result);
    //       };

    //       reader.readAsDataURL(file);
    //     }
    
    // };

    // const handleImageClick = () => {
    //   document.getElementById('fileInput').click();
    // };

    const handleChange = (e, inputName) => {
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [inputName]: e.target.value,
      }));
    };

    const handleRegistSaveSelect = (value) => {
      setInputValues({
        ...inputValues,
        postSave: value,
      })
    }


    return (
      <div className={`flex flex-col font-['IBM-Plex-Sans'] text-justify`}>
        {/* <div>
            <p className="text-lightGrey text-[22px] font-bold mt-24 ml-4">공연목록</p>
            <div className='flex'>
              <div className='flex items-center justify-center bg-gray-200 w-[90px] h-[90px] rounded-2xl mt-6 ml-4'
                onClick={handleImageClick}
                style={{ cursor: 'pointer'}}
              >
                {selectedImage ? (
                  <img src={selectedImage} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                ) : (
                  <img className={'w-8 h-8'} src={'../images/camera.png'} alt="camera"/>
                )}
              </div>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className='flex items-center justify-center bg-neutral-400 w-[90px] h-[90px] rounded-2xl mt-6 ml-4'
              />
              </div>
        </div> */}
        <div>
          <div className='mt-24'>
            <TextInput
              label="공지 제목"
              value={inputValues.input1}
              onChange={(e) => handleChange(e, 'input1')}
            />
            <TextInput
              label="내용"
              value={inputValues.input2}
              onChange={(e) => handleChange(e, 'input2')}
              isContent
            />
          </div>
          <div>
              <RegistOrSaver
                savedValue={inputValues.postSave}
                onSave={handleRegistSaveSelect}
              />
          </div>        
        </div>
      </div>
    )
  };
