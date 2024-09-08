import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface ButtonProps extends ButtonVariantProps, HTMLArkProps<'button'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { size, variant, className, ...buttonProps } = props
  return <ark.button className={button({ size, variant, className })} ref={ref} {...buttonProps} />
})

Button.displayName = 'Button'

type ButtonVariantProps = VariantProps<typeof button>

const button = tv(
  {
    base: 'button',
    defaultVariants: { variant: 'solid', size: 'md' },
    variants: {
      variant: {
        solid: 'btn btn-primary',
        outline: 'btn btn-outline',
        ghost: 'btn btn-ghost',
        link: 'btn btn-link',
        subtle: 'btn',
      },
      size: {
      sm: 'btn-sm',
      md: '',
      lg: 'btn-lg'
    },
    },
  },
  { twMerge: false },
)
