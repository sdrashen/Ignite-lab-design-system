import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
    return (
        <Comp 
          className={clsx(
            /**O tamanho que o tailwind usa sempre é em rem. Atentar para isso.
             * Aqui ele começa o py 1 = 4, entào 16 / 4 = 4. Por isso, 'py-4'.
             * No tailwind sempre trabalhamos com múltiplos de 4.
             */
            'py-4 px-3 bg-cyano-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyano-300 focus:ring-2 ring-white',
            /**w-full faz o botão ocupar a largura toda */
          )}
        >
            {children}
        </Comp>
      )
}