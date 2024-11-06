import clsx from "classnames";

import "./Input.scss";
import {FC, forwardRef, HTMLProps, Ref} from "react";
import {InputProps} from "@/components/Input/Input.types.ts";

export const Input: FC<
    InputProps & HTMLProps<HTMLInputElement>
> = forwardRef(
    (
        {
            type,
            value,
            disabled,
            defaultValue,
            placeholder = " ",
            onChange,
            errorText,
            ...props
        },
        ref: Ref<HTMLInputElement>
    ) => {
        const classes = clsx('input', {
            ["input--error"]: errorText,
        });

        const renderError = () =>
            errorText ? <span className="input__error">{errorText}</span> : null;

        return (
            <div className={classes}>
                <input
                    className="input__control"
                    type={type}
                    value={value}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    onChange={onChange}
                    ref={ref}
                    {...props}
                />
                {renderError()}
            </div>
        );
    }
);

Input.displayName = "Input";
