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
        <form className="bg-[#fff] flex flex-col items-center pb-4 px-[40px]">
          <Image src="/instaIcon.svg" alt="instagram" width="130" height="50" />
          <div className="flex flex-col gap-3">
            <AuthInput onChange={changeUserHandler} value={userValue} title="Телефон, имя пользователя или эл. адрес" />
            <AuthInput onChange={changePasswordHandler} value={passwordValue} title="Пароль" />
          </div>
        </form>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default login;