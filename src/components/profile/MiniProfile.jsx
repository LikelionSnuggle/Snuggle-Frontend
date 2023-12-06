function MiniProfile({ img, name, part }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-gray-400 h-[48px] w-[48px]" />
      <p className="font-medium text-[14px] mt-2">{name}</p>
      <p className="font-medium text-[12px] mt-1 text-lightGrey">{part}</p>
    </div>
  );
}

export default MiniProfile;
