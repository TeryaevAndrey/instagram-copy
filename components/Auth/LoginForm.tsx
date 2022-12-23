import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useAppDispatch } from "../../store/hooks";
import { setUserInfo } from "../../store/userSlice";
import { ILoginUser, IUserInfo } from "../../types";
import Loader from "../Loader/Loader";
import AuthInput from "./AuthInput";

const LoginForm: FC = () => {
  const {request, loading, isSuccess} = useHttp();

  const dispatch = useAppDispatch();
  const router = useRouter();

  const [contact, setContact] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const changeUserHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value);
  };

  const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const formHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const readyData: ILoginUser = {
        contact,
        password,
      };

      const res = await request("/api/loginUser", "POST", readyData);
      
      const userInfo: IUserInfo = {
        token: res.token, 
        userId: res.userId,
        userName: res.userName
      }

      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      dispatch(setUserInfo({
        token: res.token,
        userId: res.userId,
        userName: res.userName
      }));

      if(isSuccess) router.push("/");

    } catch(err) {
      console.log(err);
    }
  }

  return (
    <form className="auth-form bg-[#fff] flex flex-col items-center pb-5 px-[40px] rounded-[1px]">
      <Image src="/instaIcon.svg" alt="instagram" width="130" height="50" />
      <div className="flex flex-col gap-3">
        <AuthInput
          onChange={changeUserHandler}
          value={contact}
          title="Телефон, имя пользователя или эл. адрес"
        />
        <AuthInput
          onChange={changePasswordHandler}
          value={password}
          title="Пароль"
          isPassword={true}
          type="password"
        />
      </div>
      <button
        onClick={formHandler}
        className="w-[100%] max-w-[258px] min-h-[30px] py-[5px] px-[9px] bg-[#0095f6] rounded-[3px] mt-3 text-white text-[14px] font-semibold flex items-center justify-center gap-2"
        type="submit"
      >
        {loading && <Loader style={{ width: "20px", padding: "3px", background: "#fff" }}/>}
        Войти
      </button>

      <div className="relative text-center uppercase mt-4 text-[#868585] z-[3] w-[100%]">
        <span className="bg-[#fff] relative p-1 z-[100] text-[13px] font-semibold">
          Или
        </span>
        <div className="auth-line"></div>
      </div>

      <a
        className="mt-5 flex gap-2 items-center text-[#385185] font-semibold"
        href="#"
      >
        <Image src="/facebook.svg" alt="facebook" width="16" height="16" />
        <span>Войти через Facebook</span>
      </a>

      <a className="text-[#00376B] text-[12px] mt-3" href="#">
        Забыли пароль?
      </a>
    </form>
  );
};

export default LoginForm;
