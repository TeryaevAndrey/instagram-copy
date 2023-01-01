import React, { FC } from "react";
import { IconType } from "react-icons";

interface IMenuItem {
  img: string | IconType;
  title: string;
  hidden?: boolean
}

const MenuItem: FC<IMenuItem> = ({ img, title, hidden=false }) => {
  return (
    <div className={`md:w-[100%] md:justify-center min-[1100px]:justify-start menu-item flex items-center min-[1100px]:gap-3 p-0 min-[1100px]:p-3 hover:bg-[#f3f3f3] rounded-[20px] cursor-pointer ${hidden && "hidden md:flex"}`}>
      {img &&
        React.createElement(img, {
          className: "menu-item-img w-[24px] h-[24px]",
        })}
      <span className="text-[16px] text-[#262626] hidden min-[1100px]:flex">{title}</span>
    </div>
  );
};

export default MenuItem;
