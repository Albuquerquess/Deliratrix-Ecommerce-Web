export interface CardProps {
    title?: string;
    rate?: number;
    description?: string;
    value?: string;
    image?: string;
    id?: number;
    type?: string;
    category?: string;
    prices?: Object[];
    removeDisplayed?: boolean;
    onCartPage?: boolean;
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