import Image from 'next/image';
import React, { FC } from 'react';
import { IUser } from '../../types';
import AuthInput from './AuthInput';

const RegForm: FC = () => {
  const [contact, setContact] = React.useState<string>("");
  const [realName, setRealName] = React.useState<string>("");
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const changeContactHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value);
  }

  const changeRealNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRealName(e.target.value);
  }

  const changeUserNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const formHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      if(contact && realName && userName && password) {
        const readyData: IUser = {
          contact,
          realName, 
          userName,
          password
        };
      }
    } catch(err: any) {
      console.log(err);
    }
  }

  return (
    <form className="auth-form bg-[#fff] flex flex-col items-center pb-7 px-[40px] rounded-[1px] max-w-[347px]">
      <Image src="/instaIcon.svg" alt="instagram" width="130" height="50" />
      <div className="flex flex-col items-center">
        <span className="text-[17px] font-semibold text-[#8E8E8E] max-w-[258px] text-center">
          Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
        </span>
        <button className="flex items-center gap-2 text-[14px] text-[#fff] font-semibold bg-[#0095f6] py-1 px-10 min-w-[258px] rounded-[3px] mt-3">
          <Image src="/facebook.svg" alt="facebook" width="16" height="16" />
          <span>Войти через Facebook</span>
        </button>
        <div className="relative text-center uppercase text-[#868585] z-[3] w-[100%] my-4">
        <span className="bg-[#fff] relative p-1 z-[100] text-[13px] font-semibold">
          Или
        </span>
        <div className="auth-line"></div>
      </div>
      </div>
      <div className="flex flex-col gap-3">
        <AuthInput
          title="Моб. телефон или эл. адрес"
          onChange={changeContactHandler}
          value={contact}
        />

        <AuthInput
          title="Имя и фамилия"
          onChange={changeRealNameHandler}
          value={realName}
        />

        <AuthInput
          title="Имя пользователя"
          onChange={changeUserNameHandler}
          value={userName}
        />

        <AuthInput
          title="Пароль"
          onChange={changePasswordHandler}
          value={password}
        />
      </div>

      <p className="text-[12px] text-[#8E8E8E] text-center max-w-[265px] mt-3">
        Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. <a className="text-[12px] font-semibold text-[#8E8E8E]" href="#">Подробнее</a>
      </p>

      <p className="text-[12px] text-[#8E8E8E] text-center max-w-[265px] mt-3">
        Регистрируясь, вы принимаете наши <a className="text-[12px] font-semibold text-[#8E8E8E]" href="#">Условия, Политику конфиденциальности</a> и <a className="text-[12px] font-semibold text-[#8E8E8E]" href="#">Политику в отношении файлов cookie.</a>
      </p>

      <button
        onClick={formHandler}
        className="w-[100%] max-w-[258px] min-h-[30px] py-[5px] px-[9px] bg-[#0095f6] rounded-[3px] mt-3 text-white text-[14px] font-semibold"
        type="submit"
      >
        Войти
      </button>
    </form>
  );
};

export default RegForm;