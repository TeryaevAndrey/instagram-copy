import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const Logo: FC = () => {
  return (
    <Link className="relative w-[103px] h-[30px]" href="/">
      <Image className="object-cover" src="/instaIcon.svg" alt="Instagram" fill={true} />
    </Link>
  );
};

export default Logo;