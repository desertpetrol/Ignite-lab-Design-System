import {clsx } from 'clsx';
import { Children, InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return(
        <div className='flex items-center h-12 gap-3 py-4 px-3 bg-gray-22 rounded  w-full focus-within:ring-2 ring-pink-bubble'>
            {props.children}
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return(
        <Slot className='w-6 h-6 text-gray-193'>
        {props.children}
        </Slot>
        
    )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return(
    <input 
        className='bg-transparent flex-1  text-gray-217 text-xs placeholder:text-gray-193 outline-none'
            {...props}
        />
        )
    
}

export const TextInput = {
    Root:TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,

}

//export function TextInput(props: TextInputProps){ }