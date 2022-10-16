import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    /**O texto tem apenas esses 3 tamanhos.
     * o md fica definido aqui como padrão
     * mas no tailwind ele representa o sm
     */
    children: ReactNode;
    asChild?: boolean;
}

/**Já que o size está opcional, quando a pessoa ñ informá-lo, ele vai ter o padrão md */
export function Text({ size = 'md', children, asChild }: TextProps) {
  const Comp = asChild ? Slot : 'span';
    return (
        <Comp 
          className={clsx(
            'text-gray-100 font-sans',
            {
              'text-xs' : size === 'sm',
              'text-sm' : size === 'md',
              'text-md' : size === 'lg',
            }
          )}
        >
            {children}
        </Comp>

        /**Aqui temos uma tg span mas e se o user quiser
         * mostrar esse texto como um paragráfo ou uma outra tag?
         * Aí temos a instalação o componente Slot da biblioteca radix-ui, depois
         * disso e das importações e algumas alterações no código span passa a ser Comp.
         */
    )
}



/**Após a criação da interface, instalamos o clsx. Um pacote para criar viariações de classes usando o tailwind.
 * Ele permite aplicar classes dentro de um componente de uma maneira condicional.
 * O tailwind é um pouco mais limitado para criar esse tipo de variação dentro de um componente.
 * clsx npm - Abriu outro terminal para instalar.
*/