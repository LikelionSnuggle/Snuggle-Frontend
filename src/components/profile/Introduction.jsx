import MiniProfile from "./MiniProfile";
import { ReactComponent as Instagram } from "../../assets/all-icon-instagram.svg";
import { ReactComponent as Youtube } from "../../assets/all-icon-youtube.svg";
import { ReactComponent as Tiktok } from "../../assets/all-icon-tiktok.svg";

function Introduction() {
  return (
    <div className="w-full px-4 pt-4">
      <div className="border border-background h-[316px] rounded-lg pt-[28px] px-4">
        <div className="grid grid-cols-4">
          <MiniProfile name="김예은" part="기타" />
          <MiniProfile name="김민혁" part="드럼" />
          <MiniProfile name="한승우" part="키보드" />
          <MiniProfile name="전고은" part="보컬" />
        </div>
        <div className="h-[1px] w-full bg-background mt-4" />
        <p className="mt-[20px] font-medium text-[14px] text-lightGrey">
          Contact
        </p>
        <div className="w-full mt-[42px] flex px-[50px] justify-between">
          <Instagram />
          <Youtube />
          <Tiktok />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
