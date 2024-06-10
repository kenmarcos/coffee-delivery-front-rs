import { ComponentProps, LegacyRef, forwardRef } from "react";
import { RadioContainer } from "./styles";

interface RadioProps extends ComponentProps<"input"> {
  isSelected: boolean;
}

export const Radio = forwardRef(
  (
    { children, isSelected, ...rest }: RadioProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <RadioContainer data-state={isSelected}>
        <input type="radio" ref={ref} {...rest} />
        {children}
      </RadioContainer>
    );
  }
);
