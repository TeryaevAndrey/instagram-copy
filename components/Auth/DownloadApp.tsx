import Image from 'next/image';
import React, { FC } from 'react';

const DownloadApp: FC = () => {
  return (
    <div className="flex flex-col items-center mt-5">
            <span className="text-[14px] text-[#262626]">
              Установите приложение
            </span>
            <div className="mt-5 flex items-center gap-2">
              <a className="w-[110px] h-[40px] flex items-center" href="#">
                <Image
                  className="h-[40px]"
                  src="/google-download.png"
                  alt="google"
                  width="110"
                  height="40"
                />
              </a>
              <a className="w-[110px] h-[40px] flex items-center" href="#">
                <Image
                  src="/microsoft-download.png"
                  alt="microsoft"
                  width="110"
                  height="40"
                />
              </a>
            </div>
          </div>
  );
};

export default DownloadApp;