import Image from "next/image";
import React, { FC } from "react";

const ProfilePost: FC = () => {
  return (
    <div className="post-wrapper relative cursor-pointer">
      <Image
        className="object-cover"
        blurDataURL="/bg.jpg"
        src="/bg.jpg"
        alt="post-img"
        fill={true}
        placeholder="blur"
        loading="lazy"
      />
      <div className="post-hover">
        <div className="flex justify-center items-center gap-5 h-[100%] w-[100%]">
          <div className="flex items-center gap-3 text-[#fff] font-semibold">
            <svg
              width="24"
              height="24"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_156)">
                <path
                  d="M12.425 5.063C13.434 2.6715 15.739 1.0005 18.42 1.0005C22.0315 1.0005 24.6325 4.09 24.9595 7.772C24.9595 7.772 25.136 8.686 24.7475 10.3315C24.2185 12.5725 22.975 14.5635 21.2985 16.083L12.425 24L3.701 16.0825C2.0245 14.5635 0.781001 12.572 0.252001 10.331C-0.136499 8.6855 0.0400011 7.7715 0.0400011 7.7715C0.367001 4.0895 2.968 1 6.5795 1C9.261 1 11.416 2.6715 12.425 5.063Z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_156">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>14</span>
          </div>
          <div className="flex items-center gap-3 text-[#fff] font-semibold">
            <Image src="/post-message.svg" alt="messages" width="24" height="24" />
            <span>14</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;
