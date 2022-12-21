export interface IUser {
  contact: string;
  realName: string;
  userName: string;
  password: string;
}

export interface IRegError {
  isError: boolean;
  message: string | undefined;
}