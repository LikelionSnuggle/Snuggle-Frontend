function RowButton({ backgroundColor, fontColor, text, onClick }) {
  const buttonStyles = `w-full max-w-[420px] h-[58.76px] font-semibold rounded-lg ${
    backgroundColor ? backgroundColor : "bg-signature"
  } ${fontColor ? fontColor : "text-white"}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {text}
    </button>
  );
}

export default RowButton;
