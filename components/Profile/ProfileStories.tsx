import React, { FC } from 'react';
import ProfileStoriesItem from './ProfileStoriesItem';

const ProfileStories: FC = () => {
  return (
    <div className="flex items-center gap-10 mt-10 max-w-[800px] overflow-hidden">
      <ProfileStoriesItem />
      <ProfileStoriesItem />
      <ProfileStoriesItem />
      <ProfileStoriesItem />
      <ProfileStoriesItem />
      <ProfileStoriesItem />
      <ProfileStoriesItem />
      <ProfileStoriesItem />
    </div>
  );
};

export default ProfileStories;