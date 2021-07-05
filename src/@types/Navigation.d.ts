export interface SidebarButtonProps {
    clickFunction: function
}

export interface SidebarProps {
    isOpen?: boolean;
    handleClickFunction: (value: boolean) => void;
}

export interface StyledSidebarProps {
    isOpen?: boolean;
}