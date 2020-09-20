import React, {FC, memo} from "react";

export type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: string;
    disabled?: boolean;
    dataTestId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ children, ...rest }) => (
    <button {...rest} >{children}</button>
);

export default memo(Button);