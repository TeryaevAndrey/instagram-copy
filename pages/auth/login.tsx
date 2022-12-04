import Image from "next/image";
import React, { FC } from "react";
import AuthInput from "../../components/AuthInput";

const login: FC = () => {
  const [userValue, setUserValue] = React.useState<string>("");
  const [passwordValue, setPasswordValue] = React.useState<string>("");

  const changeUserHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue(e.target.value);
  }

  const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  }

  return (
    <div className="flex gap-4 justify-center items-center h-[100vh]">
      <div className="relative w-[380px] h-[580px] bg-[url('/logTel.png')] bg-no-repeat bg-cover bg-center">
        <Image className="absolute right-[30px] bottom-[60px]" src="/logTelBg.png" alt="telBg" width="230" height="460" />
      </div>
      <div>
        <form className="auth-form bg-[#fff] flex flex-col items-center pb-5 px-[40px] rounded-[1px]">
          <Image src="/instaIcon.svg" alt="instagram" width="130" height="50" />
          <div className="flex flex-col gap-3">
            <AuthInput onChange={changeUserHandler} value={userValue} title="Телефон, имя пользователя или эл. адрес" />
            <AuthInput onChange={changePasswordHandler} value={passwordValue} title="Пароль" isPassword={true} type="password" />
          </div>
          <button className="w-[100%] min-h-[30px] py-[5px] px-[9px] bg-[#0095f6] rounded-[3px] mt-3 text-white text-[14px] font-semibold" type="submit">Войти</button>

        <div className="relative text-center uppercase mt-4 text-[#868585] z-[3] w-[100%]">
          <span className="bg-[#fff] relative p-1 z-[100] text-[13px] font-semibold">Или</span>
          <div className="auth-line"></div>
        </div>

        <a className="mt-5 flex gap-2 items-center text-[#385185] font-semibold" href="#">
          <Image src="/facebook.svg" alt="facebook" width="16" height="16" />
          <span>Войти через Facebook</span>
        </a>

        <a className="text-[#00376B] text-[12px] mt-3" href="#">Забыли пароль?</a>

        </form>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default login;