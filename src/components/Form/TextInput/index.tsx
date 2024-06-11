import { ComponentProps, LegacyRef, forwardRef, useState } from "react";
import { ErrorMessage, TextInputContainer } from "./styles";
import { FieldError } from "react-hook-form";

interface TextInputProps extends ComponentProps<"input"> {
  optional?: boolean;
  error?: FieldError;
}

export const TextInput = forwardRef(
  (
    { optional, error, ...rest }: TextInputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    return (
      <>
        <TextInputContainer
          $hasError={!!error}
          data-state={isFocused ? "focused" : "blurred"}
        >
          <input
            ref={ref}
            {...rest}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {!!optional && <span>Opcional</span>}
        </TextInputContainer>

        {error?.message && (
          <ErrorMessage role="alert">{error.message}</ErrorMessage>
        )}
      </>
    );
  }
);
