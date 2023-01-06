export interface User {
  contact: string | undefined;
  realName: string | undefined;
  userName: string | undefined;
  online: boolean | undefined;
  publications: [] | undefined;
  followers: [] | undefined;
  following: [] | undefined;
  password?: string | null;
  aboutMe?: string | undefined;
}

export interface IRegUser {
  contact: string;
  realName: string;
  userName: string;
  password: string;
}

export interface IRegError {
  isError: boolean;
  message: string | undefined;
}

export interface ILoginUser {
  contact: string;
  password: string;
}

export interface ILoginError {
  isError: boolean;
  message: string | undefined;
}

export interface IUserInfo {
  token: string | undefined;
  userId: string | undefined;
  userName: string | undefined;
}