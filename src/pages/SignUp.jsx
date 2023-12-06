import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GrayInput from "../components/GrayInput";
import RowButton from "../components/RowButton";
import { ReactComponent as IconSuccess } from "../assets/all-icon-success.svg";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [onChangeName, setOnChangeName] = useState(true);
  const [onChangeEmail, setOnChangeEmail] = useState(true);
  const [onChangePw, setOnChangePw] = useState(true);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  useEffect(() => {
    setOnChangeName(true);
  }, [name]);

  useEffect(() => {
    setOnChangeEmail(true);
  }, [email]);

  useEffect(() => {
    setOnChangePw(true);
  }, [pw, pwCheck]);

  const handleNext = () => {
    // 유효성 검사 : 영문, 숫자, 특수문자 포함 8자 이상
    const regex =
      //eslint-disable-next-line
      /^(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
    const isValidPw = regex.test(pwCheck);

    // 이메일 유효성 검사 정규식
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailRegex.test(email);

    if (
      pw === pwCheck &&
      pw !== "" &&
      pwCheck !== "" &&
      isValidPw &&
      isValidEmail &&
      name !== ""
    ) {
      setSignUpSuccess(true);
    } else if (name === "") {
      setOnChangeName(false);
    } else if (!isValidEmail) {
      setOnChangeEmail(false);
    } else if (pw !== pwCheck || pw === "" || pwCheck === "" || !isValidPw) {
      setOnChangePw(false);
    }
  };

  const finishHandler = () => {
    setSignUpSuccess(false);
    navigate("/login");
  };

  if (!signUpSuccess) {
    return (
      <div className="h-full flex justify-center px-[31px] flex-col">
        <div className="flex flex-col gap-3 mb-6">
          <GrayInput placeholder="유저 이름" setValue={setName} />
          {!onChangeName ? (
            <p style={{ color: "red" }}>유저 이름을 다시 확인하세요.</p>
          ) : (
            ""
          )}
          <GrayInput placeholder="이메일 주소" setValue={setEmail} />
          {!onChangeEmail ? (
            <p style={{ color: "red" }}>이메일 주소를 다시 확인하세요.</p>
          ) : (
            ""
          )}
          <GrayInput placeholder="비밀번호" setValue={setPw} type="password" />
          <GrayInput
            placeholder="비밀번호 인증"
            setValue={setPwCheck}
            type="password"
          />
          {!onChangePw ? (
            <p style={{ color: "red" }}>비밀번호를 다시 확인하세요.</p>
          ) : (
            ""
          )}
        </div>
        <RowButton text="회원가입" onClick={handleNext} />
      </div>
    );
  } else {
    return (
      <div className="h-full flex justify-center items-center flex-col px-[20px]">
        <IconSuccess />
        <p className="font-bold text-[26px] mt-[35px] text-[#1E232C] mb-[5px]">
          가입완료 했습니다
        </p>
        <p className="text-[#8391A1] text-[15px] mb-[86px]">
          스너글에 오신 것을 환영해요!
        </p>
        <RowButton
          text="홈 화면으로 돌아가기"
          backgroundColor="bg-[#323232]"
          onClick={finishHandler}
        />
      </div>
    );
  }
}
