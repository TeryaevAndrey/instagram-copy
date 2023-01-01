import React, { FC } from 'react';
import Post from './Post';

const Posts: FC = () => {
  return (
    <div className="min-w-[300px] md:min-w-[470px] md:max-w-[470px] flex flex-col md:mt-5 md:gap-3 w-[100vw] md:w-[auto]">
      <Post />
      <Post />
    </div>
  );
};

export default Posts;