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