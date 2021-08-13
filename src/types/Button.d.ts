export interface ButtonProps {
    label?: string;
    type?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    outline?: boolean;
    to?: string;
    handleClicked?: () => void;

    disabled?: boolean;
}
export interface StyledButtonProps {
    outline?: boolean;
    disabled?: boolean;

}