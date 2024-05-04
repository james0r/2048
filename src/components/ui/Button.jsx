import React, { forwardRef } from 'react'
import { tw } from '@/utils'

const Button = forwardRef((props, ref) => (
  <button
    ref={ref}
    className={tw([
      'py-2',
      'px-4',
      'bg-flint',
      'hover:opacity-90',
      'text-white',
      'font-semibold',
      'rounded-sm'
    ])}
    {...props}
  >
    {props.children}
  </button>
))

export default Button
