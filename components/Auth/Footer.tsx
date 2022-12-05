import React, { FC } from 'react';
import LinkList from './LinkList';

const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center mb-[60px] mt-[50px] lg:mt-auto">
        <LinkList />
        <div className="flex items-center gap-4 mt-3">
          <span className="text-[12px] text-[#8E8E8E]">Русский</span>
          <span className="text-[12px] text-[#8E8E8E]">
            © 2022 Instagram from Meta
          </span>
        </div>
      </footer>
  );
};

export default Footer;