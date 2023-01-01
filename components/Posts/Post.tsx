import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import PostProfile from "./PostProfile";

const Post: FC = () => (
  <div className="flex flex-col bg-[#fff] rounded-[8px] w-[100%] relative z-[-1] md:border-[1px] border-[#ccc]">
    <div className="flex justify-between items-center py-4 px-5">
      <PostProfile />
      <Image
        className="cursor-pointer"
        src="/burger.svg"
        alt="burger"
        width="24"
        height="24" />
    </div>

    <div className="relative w-[100%] min-h-[460px] md:min-h-[590px]">
      <Image
        className="post-img"
        src="/bg.jpg"
        alt="avatar"
        fill={true}
        priority
        sizes="fill" />
    </div>

    <div className="flex flex-col py-4 px-5">
      <div className="flex items-center gap-4">
        <svg
          className="post-icon like cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3_156)">
            <path
              d="M12.425 5.063C13.434 2.6715 15.739 1.0005 18.42 1.0005C22.0315 1.0005 24.6325 4.09 24.9595 7.772C24.9595 7.772 25.136 8.686 24.7475 10.3315C24.2185 12.5725 22.975 14.5635 21.2985 16.083L12.425 24L3.701 16.0825C2.0245 14.5635 0.781001 12.572 0.252001 10.331C-0.136499 8.6855 0.0400011 7.7715 0.0400011 7.7715C0.367001 4.0895 2.968 1 6.5795 1C9.261 1 11.416 2.6715 12.425 5.063Z"
              fill="#ccc" />
          </g>
          <defs>
            <clipPath id="clip0_3_156">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="block mt-2 text-[14px] font-semibold text-[#262626] cursor-pointer">1 144 отметок &quot;Нравится&quot;</p>
      <p className="text-[14px] mt-2">
        <Link href="/" className="mr-3 font-semibold text-[#262626]">Anonim</Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, minima! <span className="text-[#8E8E8E] cursor-pointer">...Еще</span>
      </p>
      <span className="text-[14px] text-[#8E8E8E] mt-2 cursor-pointer">Посмотреть все комментарии (6)</span>
      <span className="mt-2 text-[14px] text-[#8E8E8E]">1 час назад</span>
      <div className="post-footer flex items-center mt-3 pt-4">
        <Image src="/smile.svg" alt="smile" width="24" height="24" />
        <input className="mx-4 w-[100%] placeholder:text-[14px]" type="text" placeholder="Добавьте комментарий..." />
        <button className="text-[#0095F6] opacity-60 text-[14px] font-semibold bg-transparent">Опубликовать</button>
      </div>
    </div>
  </div>
);

export default Post;
