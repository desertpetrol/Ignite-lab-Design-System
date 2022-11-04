import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes <HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    }



export function Button({children, asChild, className, ...props}: ButtonProps){ 
    const Comp = asChild ? Slot: 'button';

    return (
        <Comp 
        className={clsx(
            'py-4 px-3 bg-pink-bubble rounded font-semibold text-white text-sm w-full transition-colors hover:bg-opacity-90 focus:ring-2 ring-offset-gray-026', className,
            )}
            {...props}
        >
        {children}
        </Comp>
    )
}