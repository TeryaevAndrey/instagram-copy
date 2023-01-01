import React, { FC } from 'react';
import StoriesItem from './StoriesItem';

const Stories: FC = () => {
  return (
    <div className="flex items-center gap-3 bg-[#fff] md:rounded-[10px] py-2 pl-2 md:py-[16px] md:pl-[16px] min-w-[300px] md:min-w-[470px] mt-[15px] md:mt-0 w-[100vw] md:w-[auto] bg-[#fafafa] md:bg-[#fff] md:border-[1px] md:border-[#ccc] border-b-[1px] border-[#ccc]">
      <StoriesItem />
      <StoriesItem />
      <StoriesItem />
      <StoriesItem />
    </div>
  );
};

export default Stories;