import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import DownloadApp from "../../components/Auth/DownloadApp";
import Footer from "../../components/Auth/Footer";
import LinkList from "../../components/Auth/LinkList";
import LoginForm from "../../components/Auth/LoginForm";

const login: FC = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center">
      <div className="flex gap-4 justify-center items-center mt-auto">
        <div className="relative w-[380px] h-[580px] bg-[url('/logTel.png')] bg-no-repeat bg-cover bg-center hidden lg:flex">
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
              <Link
                className="ml-1 text-[14px] text-[#0095F6] font-semibold"
                href="/auth/reg"
              >
                Зарегистрироваться
              </Link>
            </p>
          </div>
          <DownloadApp />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default login;
