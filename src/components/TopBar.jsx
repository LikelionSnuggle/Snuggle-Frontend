import { useNavigate } from "react-router-dom";

import IconArrowLeft from "../assets/All-icon-prev";
import { ReactComponent as SearchIcon } from "../assets/all-icon-search.svg";

function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-[16px] h-[51px] flex justify-between items-center pr-6">
      <button onClick={() => navigate(-1)}>
        <IconArrowLeft width={38} height={38} fill="#ACACAC" />
      </button>
      <button>
        <SearchIcon />
      </button>
    </div>
  );
}

export default TopBar;
