import { forwardRef } from "react";

import { InputContainer } from "./InputContainer";

interface TextInputProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  error: boolean;
}

export const TextInput = forwardRef(
  ({ label, error, className, ...rest }: TextInputProps, ref) => {
    return (
      <InputContainer label={label} className={className} error={error}>
        <input
          type="text"
          className="bg-transparent focus:outline-none text-gray-600 w-full"
          {...rest}
        />
      </InputContainer>
    );
  }
);
