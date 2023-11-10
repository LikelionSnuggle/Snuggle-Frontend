function GrayInput({ placeholder, setValue, type }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const inputType = type ? type : "";

  return (
    <input
      className="w-full h-[56px] pl-[18px] border border-[#E8ECF4] rounded-lg bg-[#F7F8F9] placeholder:text-[15px] placeholder:text-[#ACACAC]"
      placeholder={placeholder}
      onChange={handleChange}
      type={inputType}
    />
  );
}

export default GrayInput;
