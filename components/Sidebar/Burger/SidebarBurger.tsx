import Image from "next/image";
import React, { FC } from "react";
import BurgerItem from "./BurgerItem";
import Link from "next/link";

interface ISidebarBurger {
  style?: object;
}

const SidebarBurger: FC<ISidebarBurger> = ({ style }) => {
  const [isShowMenu, setIsShowMenu] = React.useState<boolean>(false);

  return (
    <div className="absolute bottom-[40px] ml-3">
      <div className="relative">
        {isShowMenu && (
          <div className="flex flex-col absolute bottom-[40px] gap-1 bg-[#efefef] max-w-[220px] rounded-[3px]">
            <div className="flex flex-col gap-[1px] bg-[#ccc]">
              <BurgerItem
                Tag={Link}
                title="Настройки"
                href="/profile/settings"
              />
              <BurgerItem
                Tag={Link}
                title="Сохраненное"
                href="/profile/saved"
              />
              <BurgerItem
                Tag={Link}
                title="Ваши действия"
                href="/profile/actions"
              />
              <BurgerItem Tag={"div"} title="Сообщение о проблеме" />
            </div>
            <div className="flex flex-col gap-[1px] bg-[#ccc]">
              <BurgerItem Tag={"div"} title="Переключение между аккаунтами" />
              <BurgerItem Tag={"div"} title="Выйти" />
            </div>
          </div>
        )}

        <div
          onClick={() => setIsShowMenu(!isShowMenu)}
          className="sidebar-burger flex items-center gap-3 cursor-pointer"
          style={style}
        >
          <Image src="/burger.svg" alt="burger" width="24" height="24" />
          <span className="text-[16px] text-[#262626]">Еще</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarBurger;
