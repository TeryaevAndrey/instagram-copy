import React, { FC } from 'react';
import StoriesItem from './StoriesItem';

const Stories: FC = () => {
  return (
    <div className="stories-block flex items-center gap-3 bg-[#fff] rounded-[8px] py-[16px] pl-[16px] min-w-[300px] md:min-w-[470px]">
      <StoriesItem />
      <StoriesItem />
      <StoriesItem />
      <StoriesItem />
    </div>
  );
};

export default Stories;