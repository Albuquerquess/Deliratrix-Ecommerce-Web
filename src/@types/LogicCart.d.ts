export interface LogicCartProps {
  handleAddItemToCart: (itemId: number) => void;
  handleRemoveItemToCart: (itemId: number) => void;
  }

export interface LogicCartItemProps {
    itemId: number;
}