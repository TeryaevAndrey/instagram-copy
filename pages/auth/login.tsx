import Image from "next/image";
import React, { FC } from "react";
import LinkList from "../../components/Auth/LinkList";
import LoginForm from "../../components/Auth/LoginForm";

const login: FC = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div className="flex gap-4 justify-center items-center">
        <div className="relative w-[380px] h-[580px] bg-[url('/logTel.png')] bg-no-repeat bg-cover bg-center">
          <Image
            className="absolute right-[30px] bottom-[60px]"
            src="/logTelBg.png"
            alt="telBg"
            width="230"
            height="460"
          />
        </div>
        <div>
          <LoginForm />
          <div className="auth-form bg-[#fff] flex items-center px-[25px] py-[20px] rounded-[1px] mt-3">
            <p className="text-[14px] text-[#262626]">
              У вас ещё нет аккаунта?
              <a
                className="ml-1 text-[14px] text-[#0095F6] font-semibold"
                href="#"
              >
                Зарегистрироваться
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center mt-5">
            <span className="text-[14px] text-[#262626]">
              Установите приложение
            </span>
            <div className="mt-5 flex items-center gap-2">
              <a className="w-[110px] h-[40px] flex items-center" href="#">
                <Image
                  className="h-[40px]"
                  src="/google-download.png"
                  alt="google"
                  width="110"
                  height="40"
                />
              </a>
              <a className="w-[110px] h-[40px] flex items-center" href="#">
                <Image
                  src="/microsoft-download.png"
                  alt="microsoft"
                  width="110"
                  height="40"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center mt-[110px]">
        <LinkList />
        <div className="flex items-center gap-4 mt-3">
          <span className="text-[12px] text-[#8E8E8E]">Русский</span>
          <span className="text-[12px] text-[#8E8E8E]">
            © 2022 Instagram from Meta
          </span>
        </div>
      </footer>
    </div>
  );
};

export default login;
