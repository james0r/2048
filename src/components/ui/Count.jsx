import React, { useEffect } from 'react'
import { tw } from '@/utils'
import { motion, useAnimation } from 'framer-motion'

function Count({ title, count }) {
  const controls = useAnimation()

  useEffect(() => {
    // Animate to the new value
    controls.start({
      scale: [1, 1.5, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
        loop: Infinity,
      },
    })
  }, [count, controls])

  return (
    <div
      className={tw([
        'bg-light-beige',
        'px-6',
        'py-2',
        'font-semibold',
        'text-white',
        'flex',
        'flex-col',
        'items-center',
      ])}
      data-count-container
    >
      <div className={tw(['uppercase', 'text-xs', 'mb-1'])}>{title}</div>
      <motion.div
        animate={controls}
        className={tw(['text-lg', 'leading-none'])}
      >
        {count}
      </motion.div>
    </div>
  )
}

export default Count
