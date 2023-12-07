function NotificationContent({ date, title, content }) {
  return (
    <>
      <div className="flex items-center mt-[-10px]">
        <div className="rounded-full h-2 w-2 bg-signature" />
        <p className="text-darkGrey font-medium text-[14px] ml-[10px]">
          {date}
        </p>
      </div>
      <div className="flex pl-[3.5px] mt-[-6px] gap-[44px]">
        <div className=" border-l border-lightGrey border-dotted" />
        <div className="mt-4 w-full border-background p-[24px] border rounded-lg mb-[34px]">
          <p className="font-bold text-darkGrey text-[14px]">{title}</p>
          <div className="bg-lightGrey h-[1px] w-full my-4"></div>
          <p
            style={{ whiteSpace: "pre-line" }}
            className="font-medium text-[14px] text-lightGrey"
          >
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default NotificationContent;
