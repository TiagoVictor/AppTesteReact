import classNames from "classnames";

type Props = {
    children: React.ReactNode;
    variant?: 'default' | 'primary' | 'light';
}

export function Button({ variant, children }: Props) {
    var bgColor = 'text-black';

    if (variant == 'primary') bgColor = 'bg-primary hover:bg-primaryLight active:bg-primaryDark transition-all text-white';
    if (variant == 'light') bgColor = 'bg-primaryLight text-white';


    return (
        <button className={classNames('className="py-2 px-4 rounded-md font-bold', bgColor)}>
            {children}
        </button>
    );
}