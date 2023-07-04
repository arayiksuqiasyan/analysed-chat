import React, {PropsWithChildren} from "react";
import classes from './AppButton.module.scss'
import classNames from "classnames";

type IVariant = 'primary' | 'secondary'
type IType = 'submit' | 'button' | 'reset'

interface ButtonProps extends PropsWithChildren {
    type?: IType
    variant?: IVariant
    disabled?: boolean;
    className?: string
    onBlur?: () => void
    onClick?: () => void
}

const AppButton = (props: ButtonProps) => {
    const {
        children,
        disabled = false,
        onBlur,
        onClick,
        className = '',
        type = 'button',
        variant = 'primary',
    } = props

    const buttonClassName = classNames(
        classes.button,
        classes[variant],
        {[classes.disabled]: disabled},
        className,
    );

    return (
        <button
            disabled={disabled}
            onBlur={onBlur}
            onClick={onClick}
            type={type}
            className={buttonClassName}>
            {children}
        </button>
    )
}

AppButton.defaultProps = {
    type: 'button',
    variant: 'primary',
    onClick: () => {
    },
    onBlur: () => {
    }
} as ButtonProps;

export default AppButton
