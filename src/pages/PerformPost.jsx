import React, { useState } from 'react'

const TextInput = ({ label, value, onChange }) => {
  return (
    <div className="mb-4 flex flex-col font-['IBM-Plex-Sans']">
      <label className="text-lightGrey text-[22px] font-bold mt-8 ml-4 flex-shrink-0">{label}</label>
      <input
        type="text"
        className="text-[22px] border-b border-gray-300 focus:outline-none focus:border-blue-500 px-3 py-2 w-[440px] h-12 ml-4 mr-4"
        value={value}
        onChange={onChange}
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
    <div className="position: fixed text-[19px] font-['IBM-Plex-Sans'] w-[400px] mt-6 ml-4">
      <div
        className={`h-16 rounded-2xl flex items-center justify-center cursor-pointer ${
          savedValue === '저장하기' ? 'bg-orange-400' : 'bg-gray-200'
        }`}
        onClick={() => onSave('저장하기')}
        style={{ zIndex: savedValue === '저장하기' ? 1 : 0}}
      >저장하기</div>
      <div
        className={`h-16 mt-4 rounded-2xl flex items-center justify-center cursor-pointer ${
          savedValue === '등록하기' ? 'bg-orange-400' : 'bg-gray-200'
        }`}
        onClick={() => onSave('등록하기')}
        style={{ zIndex: savedValue === '유료' ? 1 : 0, position: 'relative', left: '-35px' }}
      >등록하기</div>
    </div>
  );
};


export default function PerformPost() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [inputValues, setInputValues] = useState({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
    });
    
    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onload = () => {
            setSelectedImage(reader.result);
          };

          reader.readAsDataURL(file);
        }
    
    };

    const handleImageClick = () => {
      document.getElementById('fileInput').click();
    };

    const handleChange = (e, inputName) => {
      setInputValues({
        ...inputValues,
        [inputName]: e.target.value,
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
            <p className="text-lightGrey text-[22px] font-bold mt-8 ml-4">티켓가격</p>
            <div>
              <TicketPriceSelector
                selectedValue={inputValues.ticketPrice}
                onSelect={handleTicketPriceSelect}
              />
            </div>
            <div className="border-b border-gray-300 focus:outline-none w-[440px] ml-4 mr-4 mt-6"></div>
          </div>
          <div>
            <p className="text-lightGrey text-[22px] font-bold mt-8 ml-4">태그설정</p>
            <div className="border-b border-gray-300 focus:outline-none w-[440px] ml-4 mr-4 mt-6"></div>
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