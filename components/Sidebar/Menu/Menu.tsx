import React, {FC} from 'react';
import MenuItem from './MenuItem';
import MenuLink from './MenuLink';
import {AiFillHome} from "react-icons/ai";

const Menu: FC = () => {
  return (
    <div className="flex flex-col gap-7">
      <MenuLink img={AiFillHome} title="Главная" href="/" />
    </div>
  );
};

export default Menu;