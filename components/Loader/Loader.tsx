import React, { FC } from 'react';

interface ILoader {
  style?: {}
}

const Loader: FC<ILoader> = ({style}) => {
  return (
    <div className="spinner-3" style={style}></div>
  );
};

export default Loader;