import React, { FC } from "react";

interface IAuthInput {
  onChange: React.ChangeEventHandler<HTMLInputElement>, 
  value: string;
  title: string;
  isPassword?: boolean;
  type?: string;
}

const AuthInput: FC<IAuthInput> = ({onChange, value, title, isPassword, type}) => {
  const [isValue, setIsValue] = React.useState<boolean>(false);
  const [isFocus, setIsFocus] = React.useState<boolean>(false);

  React.useEffect(() => {
    if(value.length > 0) {
      setIsValue(true);
    } else {
      setIsValue(false);
    }
  }, [value]);

  const focusHandler = () => {
    setIsFocus(true);
  }

  return (
    <div>
      <div className={`input-wrapper relative w-[258px] min-h-[38px] rounded-[3px] bg-[#fafafa] overflow-hidden ${isValue && "active"} ${isFocus && "focus"}`}>
        <input
          className="input-field absolute z-[1] w-[100%] bg-transparent"
          type={type ? type : "text"}
          onChange={onChange}
          value={value}
          onFocus={focusHandler}
        />
        <span className="input-name absolute z-[2] pointer-events-none">
          {title}
        </span>
      </div>
    </div>
  );
};

export default AuthInput;
