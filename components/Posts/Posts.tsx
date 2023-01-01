import React, { FC } from 'react';
import Post from './Post';

const Posts: FC = () => {
  return (
    <div className="min-w-[300px] sm:min-w-[470px] sm:max-w-[470px] flex flex-col sm:mt-5 sm:gap-3 w-[100vw] sm:w-[auto]">
      <Post />
      <Post />
    </div>
  );
};

export default Posts;