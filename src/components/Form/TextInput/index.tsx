import { ComponentProps, LegacyRef, forwardRef, useState } from "react";
import { TextInputContainer } from "./styles";

interface TextInputProps extends ComponentProps<"input"> {
  optional?: boolean;
}

export const TextInput = forwardRef(
  ({ optional, ...rest }: TextInputProps, ref: LegacyRef<HTMLInputElement>) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    return (
      <TextInputContainer data-state={isFocused ? "focused" : "blurred"}>
        <input ref={ref} {...rest} onFocus={handleFocus} onBlur={handleBlur} />

        {!!optional && <span>Opcional</span>}
      </TextInputContainer>
    );
  }
);
