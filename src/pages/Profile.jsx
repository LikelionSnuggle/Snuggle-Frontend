import React, { useState } from 'react'
import tagIcon from '../assets/all-icon-tag.svg'

const TextInput = ({ label, value, onChange, onKeyPress, customStyle, isContent }) => {
    const inputStyle = `text-[22px] ml-4 mr-4`;

    const inputClass = isContent
    ? 'rounded-xl px-3'
    : 'text-[22px] border-b bg-gray-100 border-gray-300 focus:outline-none focus:border-orange-400 px-3 py-2 mx-4 h-12';


    return (
      <div className="mb-4 flex flex-col font-['IBM-Plex-Sans']">
        <label className="text-lightGrey text-[22px] font-bold mt-8 ml-4 flex-shrink-0">{label}</label>
        <textarea
          type="text"
          className={`${inputStyle} ${inputClass} ${customStyle || ''}`}
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

    const [selectedImage, setSelectedImage] = useState(null);
    const [inputValues, setInputValues] = useState({
      input1: '',
      input2: '',
      input6: '',
      tags: [],
    });
    const [externalLinks, setExternalLinks] = useState([]);
    const [newLink, setNewLink] = useState('');
    
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

    const handleAddLink = () => {
        if (newLink.trim() !== '') {
          setExternalLinks((prevLinks) => [...prevLinks, newLink.trim()]);
          setNewLink('');
        }
    };
    
    const handleRemoveLink = (index) => {
        const updatedLinks = [...externalLinks];
        updatedLinks.splice(index, 1);
        setExternalLinks(updatedLinks);
    };

    const handleRegistSaveSelect = (value) => {
      setInputValues({
        ...inputValues,
        postSave: value,
      })
    }


    return (
      <div className={`font-['IBM-Plex-Sans'] text-justify`}>
        <div>
            <div className='pt-24'>
              <div className='flex items-center justify-center bg-gray-200 w-full h-80'
                onClick={handleImageClick}
                style={{ cursor: 'pointer'}}
              >
                <img className={'w-8 h-8'} src={'../images/camera.png'} alt="camera"/>  
              </div>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <div className='flex justify-center items-center'>
                <div className='h-16 w-16 bg-gray-300 rounded-full mt-6'>
                    {selectedImage ? (
                    <img src={selectedImage} alt="" style={{ maxWidth: '100%', maxHeight: '100%'}} />
                    ) : (
                    <div className=''/>
                    )}
                </div>
            </div>
        </div>
        <div>
          <div className='flex justify-center items-center text-[24px] h-14'>
            <TextInput
                value={inputValues.input1}
                onChange={(e) => handleChange(e, 'input1')}
                customStyle='rounded-xl px-3 h-12 text-center font-bold text-[24px]'
                isContent
            />
          </div>
          <div>
          <TextInput
                label=""
                value={inputValues.input1}
                onChange={(e) => handleChange(e, 'input1')}
                customStyle='focus:outline-none px-3 py-2 border-b bg-gray-100 border-gray-300 focus:border-orange-400 '
            />
          </div>
          <div>
            <TextInput
              label="소개"
              value={inputValues.input2}
              onChange={(e) => handleChange(e, 'input2')} 
              customStyle='mt-2 border-gray-300 border rounded-xl px-3 h-32'
              isContent
            />
          </div>
          <div>
            <p className="text-[22px] font-bold mt-10 ml-4">외부 링크</p>
            <div className="flex items-center mt-4">
                <input
                    type="text"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                    placeholder="외부 링크를 입력하세요"
                    className="ml-4 p-2 border border-gray-300 rounded"
                />
                <button onClick={handleAddLink} className="ml-2 bg-orange-400 text-white p-2 rounded">
                    추가
                </button>
            </div>
            <div>
                {externalLinks.map((link, index) => (
                    <div key={index} className="text-[20px] flex items-center mt-2 ml-6">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            {link}
                        </a>
                        <button onClick={() => handleRemoveLink(index)} className="ml-2 text-red-500">
                            삭제
                        </button>
                    </div>
                ))}
            </div>
          </div>
          <div>
            <div className='flex'>
              <img className={'w-8 ml-4 mt-10'} src={tagIcon} alt='tag'/>
              <p className="text-lightGrey text-[22px] font-bold mt-10 ml-2">태그 설정</p>
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
              <RegistOrSaver
                savedValue={inputValues.postSave}
                onSave={handleRegistSaveSelect}
              />
          </div>        
        </div>
      </div>
    )
  };