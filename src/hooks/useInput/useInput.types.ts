import {ChangeEvent} from "react";

export interface IUseInputBind {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface IUseInput {
    value: string;
    setValue: (val: string) => void;
    reset: () => void;
    error: string;
    bind: IUseInputBind;
}

export interface IUseInputProps {
    initialValue: string;
    required?: boolean;
}
