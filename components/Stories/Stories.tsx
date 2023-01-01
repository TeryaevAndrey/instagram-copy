import React, { FC } from 'react';
import StoriesItem from './StoriesItem';

const Stories: FC = () => {
  return (
    <div className="flex items-center gap-3 bg-[#fff] sm:rounded-[10px] py-2 pl-2 md:py-[16px] sm:pl-[16px] min-w-[300px] sm:min-w-[470px] mt-[15px] md:mt-0 w-[100vw] sm:w-[max-content] bg-[#fafafa] sm:bg-[#fff] sm:border-[1px] sm:border-[#ccc] border-b-[1px] border-[#ccc] sm:ml-[auto] sm:mr-[auto] sm:mt-[45px]">
      <StoriesItem />
      <StoriesItem />
      <StoriesItem />
      <StoriesItem />
    </div>
  );
};

export default Stories;