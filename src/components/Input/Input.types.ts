import {ChangeEvent, Ref} from "react";

export type InputProps = {
    type: "text" | "password" | "email" | "number";
    value?: string;
    disabled?: boolean;
    defaultValue?: string;
    placeholder?: string;
    containerClassName?: string;
    onChange?(event: ChangeEvent<HTMLInputElement>): void;
    errorText?: string;
    icon?: string;
    ref?: Ref<HTMLInputElement>;
    answer?: boolean;
    close?: boolean;
    clickCloseBtn?():void;
};
