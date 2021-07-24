export interface CardProps {
    title?: string;
    rate?: number;
    description?: string;
    value?: number;
    image?: string;
    id?: number;
    type?: string;
    category?: string;
    removeDisplayed?: boolean;
    onCartPage?: boolean;
    redirect?: boolean;
    handleRemove?: () => void;
}
export interface StyledBoxProps {
    thumb?: string;
    onCartPage?: boolean;
}
export interface CardButtonProps {
    label?: string,
    to?: string
}
export interface StyledCardRemoveProps {
    removeDisplayed?: boolean;
}