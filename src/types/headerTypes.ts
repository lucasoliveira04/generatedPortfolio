export type HeaderProps = {
    title: string;
    textColorTitle?: string;
    subtitle?: string;
    textColorSubtitle?: string;
    backgroundColor?: string;
    textColor?: string;

    props?: React.HTMLAttributes<HTMLDivElement>;
    onClick?: () => void;

}