export interface SearchProps {
    onlyMobile?: boolean;
    value: string;
    setValue: (value: string) => void;
    redirectTo?: string;
}

export interface StyleSearchProps {
    onlyMobile?: boolean;
}