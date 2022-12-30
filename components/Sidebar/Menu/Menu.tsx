import React, { FC } from "react";
import MenuItem from "./MenuItem";
import MenuLink from "./MenuLink";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { TbGps } from "react-icons/tb";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageSquareAdd } from "react-icons/bi";
import Profile from "./Profile";

const Menu: FC = () => {
  return (
    <>
      <div className="flex md:flex-col justify-between w-[100%] min-[500px]:w-[80%] md:w-[auto] ml-[auto] mr-[auto] md:ml-0 md:mr-0 md:justify-start md:gap-7 min-[1100px]:gap-4 items-center min-[1100px]:items-start">
        <MenuLink img={AiFillHome} title="Главная" href="/" />
        <MenuItem hidden={true} img={BsSearch} title="Поисковой запрос" />
        <MenuLink img={TbGps} title="Интересное" href="/interesting" />
        <MenuLink
          img={BiMessageSquareDetail}
          title="Сообщения"
          href="/messages"
        />
        <MenuItem img={AiOutlineHeart} title="Уведомления" />
        <MenuItem img={BiMessageSquareAdd} title="Создать" />
        <Profile />
      </div>
    </>
  );
};

export default Menu;
