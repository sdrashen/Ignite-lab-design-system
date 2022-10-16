import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    /**Essa / cria subcategorias dentro do storybook */
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.',
        size: 'md'
    },
    argTypes: {
      size: {
        options: ['sm', 'md', 'lg'],
        control: {
          type: 'inline-radio'
        }
      }
    }
} as Meta <TextProps> 

export const Default: StoryObj<TextProps> = {} /**Ao passar os TextProps ali dentro ativa o IntelliSense */

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}


export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
        <p>Text with P tag</p>
    )
  },
  argTypes: {
    /**Para ñ mostrar mais o children dentro do storybook, na parte de controls */
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}

/*Quando se cria um stories que é a documentação 
*de um componente dentro do storybook é necessário export como default
*a configuração global e o componente sendo documentado. E também
*é necessário exportar pelo menos uma variante, que é uma exportação
*que não está como default. O nome da variante é opcional.
E também exportar um objeto vazio.*/