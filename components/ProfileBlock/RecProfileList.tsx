import React, { FC } from 'react';
import RecProfile from './RecProfile';

const RecProfileList: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <RecProfile />
      <RecProfile />
      <RecProfile />
      <RecProfile />
    </div>
  );
};

export default RecProfileList;