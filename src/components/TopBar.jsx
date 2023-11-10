import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowLeftIcon } from "../assets/all-icon-arrow_left.svg";
import { ReactComponent as SearchIcon } from "../assets/all-icon-search.svg";

function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-[16px] h-[51px] flex justify-between items-center pr-6">
      <button onClick={() => navigate(-1)}>
        <ArrowLeftIcon />
      </button>
      <button>
        <SearchIcon />
      </button>
    </div>
  );
}

export default TopBar;
