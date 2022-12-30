import Link from 'next/link';
import React, { FC } from 'react';
import ProfileLink from './ProfileLink';
import RecProfileList from './RecProfileList';

const ProfileBlock: FC = () => {
  return (
    <div className="w-[320px] mt-7 px-3 hidden min-[1100px]:block">
      <ProfileLink />
      <div className="flex justify-between items-center py-3">
        <p className="text-[14px] font-semibold text-[#8E8E8E]">Рекомендации для вас</p>
        <Link className="text-[12px] font-semibold text-[#262626]" href="#">Все</Link>
      </div>
      <RecProfileList />

      <div className="flex flex-col gap-4 mt-5">
        <div className="flex flex-wrap items-center gap-3">
          <Link className="profileBlock-link text-[12px] text-[#C7C7C7]" href="#">
            Информация
          </Link>
          <Link className="profileBlock-link text-[12px] text-[#C7C7C7]" href="#">
            Помощь
          </Link>
          <Link className="profileBlock-link text-[12px] text-[#C7C7C7]" href="#">
            Пресса
          </Link>
          <Link className="profileBlock-link text-[12px] text-[#C7C7C7]" href="#">
            API
          </Link>
          <Link className="profileBlock-link text-[12px] text-[#C7C7C7]" href="#">
            Вакансии
          </Link>
          <Link className="profileBlock-link text-[12px] text-[#C7C7C7]" href="#">
            Конфиденциальность
          </Link>
          <Link className="profileBlock-link text-[12px] text-[#C7C7C7]" href="#">
            Условия
          </Link>
          <Link className="profileBlock-link text-[12px] text-[#C7C7C7]" href="#">
            Места
          </Link>
          <Link className="profileBlock-link text-[12px] text-[#C7C7C7]" href="#">
            Язык
          </Link>
        </div>
        <span className="text-[12px] text-[#C7C7C7]">
          © 2022 INSTAGRAM FROM META
        </span>
      </div>
    </div>
  );
};

export default ProfileBlock;