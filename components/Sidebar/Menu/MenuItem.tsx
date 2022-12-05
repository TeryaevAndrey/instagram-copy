import React, { FC,  } from 'react';
import { IconType } from 'react-icons';

interface IMenuItem {
  img: string | IconType;
  title: string;
}

const MenuItem: FC<IMenuItem> = ({img, title}) => {
  return (
    <div className="menu-item flex items-center gap-3 p-3 hover:bg-[#f3f3f3] rounded-[20px] cursor-pointer">
      {img &&
        React.createElement(img, { className: "menu-item-img", style: { width: "24px", height: "24px" } })}
      <span className="text-[16px] text-[#262626]">{title}</span>
    </div>
  );
};

export default MenuItem;