import Link from "next/link";
import { FC } from "react";
import DownloadApp from "../../components/Auth/DownloadApp";
import Footer from "../../components/Auth/Footer";
import RegForm from "../../components/Auth/RegForm";

const Reg: FC = () => {
  return (
    <div className="flex flex-col items-center mt-3">
      <RegForm />
      <div className="auth-form w-[347px] bg-[#fff] flex items-center px-[25px] py-[20px] rounded-[1px] mt-3 justify-center">
        <p className="text-[14px] text-[#262626]">
          Есть аккаунт?
          <Link
            className="ml-1 text-[14px] text-[#0095F6] font-semibold"
            href="/auth/login"
          >
            Вход
          </Link>
        </p>
      </div>
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default Reg;
