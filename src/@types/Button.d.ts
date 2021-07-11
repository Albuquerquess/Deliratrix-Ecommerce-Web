export interface ButtonProps {
    label?: string;
    outline?: boolean;
    to?: string;
    handleClicked?: () => void;
}
export interface StyledButtonProps {
    outline?: boolean;
}