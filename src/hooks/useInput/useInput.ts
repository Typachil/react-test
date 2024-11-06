import {IUseInput, IUseInputProps} from "@/hooks/useInput/useInput.types.ts";
import {ChangeEvent, useCallback, useState} from "react";

export const useInput = ({
    initialValue,
    required = true
} : IUseInputProps): IUseInput => {
    const [value, setValue] = useState(initialValue);
    const reset = (): void => {
        setValue("");
    };

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => {
            setValue(e.target.value);
        },
        []
    );

    const error = required && !value ? "Обязательное поле" : "";

    return {
        value,
        reset,
        setValue,
        error,
        bind: {
            value,
            onChange,
        },
    };
};
