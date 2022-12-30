import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setUserInfo } from '../store/userSlice';

interface IWrapper {
  children: React.ReactNode;
}

const Wrapper: FC<IWrapper> = ({children}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(state => state.user.userInfo);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo") || "{}") || null;

    if(data) {
      dispatch(setUserInfo({
        token: data.token || undefined,
        userId: data.userId || undefined,
        userName: data.userName || undefined
      }));
    }

    if(!userInfo.token && !data.token) {
      router.push("/auth/login");
    }
  }, [dispatch, userInfo.token]);

  return (
    <>
      {children}
    </>
  );
};

export default Wrapper;