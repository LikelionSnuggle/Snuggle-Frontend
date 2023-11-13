import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GrayInput from "../components/GrayInput";
import { ReactComponent as PWIcon } from "../assets/pw-visible.svg";
import RowButton from "../components/RowButton";

function Login() {
  const navigate = useNavigate();

  // eslint-disable-next-line
  const [email, setEmail] = useState();
  // eslint-disable-next-line
  const [pw, setPw] = useState();
  const [pwVisible, setPWVisible] = useState("password");

  const pwVisiblehandler = () => {
    setPWVisible((prev) => (prev === "password" ? "" : "password"));
  };

  return (
    <div className="h-full px-[31px] flex flex-col justify-between pb-[66px]">
      <div></div>
      <div className="">
        <GrayInput placeholder="이메일 입력" setValue={setEmail} />
        <div className="w-full h-[56px] border border-[#E8ECF4] rounded-lg bg-[#F7F8F9] flex items-center pr-[18px] mt-[15px] mb-[15px]">
          <input
            className="h-full w-full placeholder:text-[15px] placeholder:text-[#ACACAC] bg-[#F7F8F9] pl-[18px]"
            placeholder="비밀번호"
            onChange={setPw}
            type={pwVisible}
          />
          <button onClick={pwVisiblehandler}>
            <PWIcon />
          </button>
        </div>
        <div className="w-full flex justify-end pr-[9px]">
          <button className="font-semibold text-[#6A707C] mb-[31px]">
            비밀번호 찾기
          </button>
        </div>
        <RowButton text="로그인" />
      </div>
      <div className="flex justify-center">
        <p className="text-[15px]">아직 계정이 없으신가요?&nbsp;</p>
        <button
          className="text-[15px] text-[#F29D38] font-bold"
          onClick={() => navigate("/signup")}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;
