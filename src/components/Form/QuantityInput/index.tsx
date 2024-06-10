import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  size?: "sm" | "md";
  quantity: number;
  onIncrementQuantity: () => void;
  onDecrementQuantity: () => void;
}

export const QuantityInput = ({
  size = "md",
  quantity,
  onIncrementQuantity,
  onDecrementQuantity,
}: QuantityInputProps) => {
  const handleDecrementQuantity = () => {
    onDecrementQuantity();
  };

  const handleIncrementQuantity = () => {
    onIncrementQuantity();
  };

  return (
    <QuantityInputContainer size={size}>
      <button onClick={handleDecrementQuantity} disabled={quantity === 1}>
        <Minus size={14} />
      </button>
      <span title={quantity.toString()}>{quantity}</span>
      <button onClick={handleIncrementQuantity}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  );
};
