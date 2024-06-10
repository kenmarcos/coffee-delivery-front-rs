import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  size?: "sm" | "md";
}

export const QuantityInput = ({ size = "md" }: QuantityInputProps) => {
  return (
    <QuantityInputContainer size={size}>
      <button>
        <Minus size={14} />
      </button>
      <span title="50">50</span>
      <button>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  );
};
