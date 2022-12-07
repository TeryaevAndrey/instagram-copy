import React, { FC } from 'react';
import Post from './Post';

const Posts: FC = () => {
  return (
    <div className="min-w-[300px] md:min-w-[470px] max-w-[470px] flex flex-col mt-5 gap-3">
      <Post />
      <Post />
    </div>
  );
};

export default Posts;