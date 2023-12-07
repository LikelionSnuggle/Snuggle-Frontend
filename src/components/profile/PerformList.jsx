import { ReactComponent as Loyalty } from "../../assets/all-icon-loyalty.svg";

function PerformList() {
  const List = ({ date, title, tags }) => {
    return (
      <div className="pt-2 pb-4">
        <p className="mb-4 text-lightGrey text-[14px] font-medium">{date}</p>
        <div className="w-full border-background border rounded-lg p-4">
          <p className="font-bold text-darkGrey text-[14px]">{title}</p>
          <div className="bg-background h-[1px] w-full my-4" />
          <div className="h-[208px] w-full bg-[#D9D9D9] mb-4" />
          <div className="flex items-center gap-[6px]">
            <Loyalty />
            {tags.map((tag) => {
              return (
                <p className="py-[3px] px-[6px] bg-[#E7E7E7] rounded-[5px] text-[10px]">
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 pt-2">
      <List
        date="10.07"
        title="스너글 라운지 공연"
        tags={["라이브", "라운지", "희망", "안산와스타디움"]}
      />
      <List
        date="09.28"
        title="스너글 라운지 공연"
        tags={["소규모", "레전드", "가을", "잠실종합운동장"]}
      />
    </div>
  );
}

export default PerformList;
