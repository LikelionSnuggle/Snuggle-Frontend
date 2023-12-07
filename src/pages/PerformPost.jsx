import React, { useState } from 'react'
import tagIcon from '../assets/all-icon-tag.svg'

const TextInput = ({ label, value, onChange, onKeyPress }) => {
  return (
    <div className="mb-4 flex flex-col font-['IBM-Plex-Sans']">
      <label className="text-lightGrey text-[22px] font-bold mt-8 ml-4 flex-shrink-0">{label}</label>
      <input
        type="text"
        className="text-[22px] border-b bg-gray-100 border-gray-300 focus:outline-none focus:border-orange-400 h-12 px-3 py-2 mx-4 mt-2"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

const TicketPriceSelector = ({ selectedValue, onSelect }) => {
  return (
    <div className="flex items-center text-[19px] font-['IBM-Plex-Sans'] w-[240px] mt-6 ml-4">
      <div
        className={`w-1/2 h-12 rounded-3xl flex items-center justify-center cursor-pointer ${
          selectedValue === '무료' ? 'bg-neutral-400' : 'bg-gray-200'
        }`}
        onClick={() => onSelect('무료')}
        style={{ zIndex: selectedValue === '무료' ? 1 : 0}}
      >무료</div>
      <div
        className={`w-1/2 h-12 rounded-3xl flex items-center justify-center cursor-pointer ${
          selectedValue === '유료' ? 'bg-neutral-400' : 'bg-gray-200'
        }`}
        onClick={() => onSelect('유료')}
        style={{ zIndex: selectedValue === '유료' ? 1 : 0, position: 'relative', left: '-35px' }}
      >유료</div>
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


export default function PerformPost() {

    const [selectedImage, setSelectedImage] = useState([]);
    const [inputValues, setInputValues] = useState({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      tags: [],
    });
    
    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onload = () => {
            setSelectedImage((prev) => [...prev, reader.result] )
            // setSelectedImage(reader.result);
            addImageBox(); 
          };

          reader.readAsDataURL(file);
        }
    
    };

    // const handleImageClick = () => {
    //   document.getElementById('fileInput').click();
    // };

    const addImageBox = () => {
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        images: [...(prevInputValues.images || []), selectedImage],
      }));
    };

    const handleChange = (e, inputName) => {
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [inputName]: e.target.value,
      }));
    };

    const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      // 엔터를 누르면 입력된 값을 표시하고, 입력 상자는 비우기
      handleDisplay();
    }
  };

    const handleDisplay = () => {
      if (inputValues.input6.trim() !== '') {
        //최대 8개의 태그만 허용
        if (inputValues.tags.length < 8) {
          setInputValues((prevInputValues) => ({
            ...prevInputValues,
            input6: '',
            tags: [...(prevInputValues.tags || []), inputValues.input6.trim()],
          }));
        }
      }
    };

    const handleRemoveTag = (index) => {
      setInputValues((prevInputValues) => {
        const newTags = [...prevInputValues.tags];
        newTags.splice(index, 1);
        return {
          ...prevInputValues,
          tags: newTags,
        };
      });
    };


    const handleTicketPriceSelect = (value) => {
      setInputValues({
        ...inputValues,
        ticketPrice: value,
      });
    };

    const handleRegistSaveSelect = (value) => {
      setInputValues({
        ...inputValues,
        postSave: value,
      })
    }


    return (
      <div className={`flex flex-col font-['IBM-Plex-Sans'] text-justify`}>
        <div>
            <p className="text-lightGrey text-[22px] font-bold mt-24 ml-4">공연목록</p>
            <div className='flex'>
              <div className='flex items-center justify-center bg-gray-200 w-[90px] h-[90px] rounded-2xl mt-6 ml-4'
                // onClick={handleImageClick}
                style={{ cursor: 'pointer'}}
              >
                {selectedImage.length === 0 ? <img className={'w-8 h-8'} src={'../images/camera.png'} alt="camera"/> : selectedImage.map((item) => {
                  return (<img src={item} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />)
                })}
                {/* {selectedImage ? (
                  <img src={selectedImage} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                ) : (
                  <img className={'w-8 h-8'} src={'../images/camera.png'} alt="camera"/>
                )} */}
              </div>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className='flex items-center justify-center bg-neutral-400 w-[90px] h-[90px] rounded-2xl mt-6 ml-4'>
                {/* {selectedImage ? (
                  <img src={selectedImage} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                ) : ( */}
                  <label htmlFor="fileInput" style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                    <div className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center text-gray-500">
                      +
                    </div>
                  </label>
                {/* )} */}
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>
        </div>
        <div>
          <div>
            <TextInput
              label="공연 이름"
              value={inputValues.input1}
              onChange={(e) => handleChange(e, 'input1')}
            />
            <TextInput
              label="날짜 및 시간"
              value={inputValues.input2}
              onChange={(e) => handleChange(e, 'input2')}
            />
            <TextInput
              label="공연 참여자"
              value={inputValues.input3}
              onChange={(e) => handleChange(e, 'input3')}
            />
            <TextInput
              label="소개글"
              value={inputValues.input4}
              onChange={(e) => handleChange(e, 'input4')}
            />
          </div>
          <div>
            <p className="text-lightGrey text-[22px] font-bold mt-8 ml-4">티켓 가격</p>
            <div>
              <TicketPriceSelector
                selectedValue={inputValues.ticketPrice}
                onSelect={handleTicketPriceSelect}
              />
            </div>
            <div className="border-b border-gray-300 focus:outline-none w-[440px] ml-4 mr-4 mt-6"></div>
          </div>
          <div>
            <div className='flex'>
              <img className={'w-8 ml-4 mt-8'} src={tagIcon} alt='tag'/>
              <p className="text-lightGrey text-[22px] font-bold mt-8 ml-2">태그 설정</p>
            </div>
            <div>
              <div className='flex flex-wrap'>
                {inputValues.tags && inputValues.tags.map((tag, index) => (
                  <div key={index} className='flex items-center justify-between w-24 h-8 pl-2 bg-gray-200 rounded-2xl mt-4 ml-4'>
                    {tag}
                    <button
                    className="mr-2 text-gray-500 focus:outline-none"
                    onClick={() => handleRemoveTag(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              <TextInput
                label=""
                value={inputValues.input6}
                onChange={(e) => handleChange(e, 'input6')}
                onKeyPress={handleEnterPress}
              />
            </div>
          </div>
          <div>
            <TextInput
              label="연락처"
              value={inputValues.input5}
              onChange={(e) => handleChange(e, 'input5')}
            />
          </div>
          <div>
            <p className="text-lightGrey text-[22px] font-bold mt-8 ml-4">장소</p>
            <div className="border-b border-gray-300 focus:outline-none w-[440px] ml-4 mr-4 mt-6"></div>
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