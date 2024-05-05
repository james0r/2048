import React, { useState, useEffect, useRef } from 'react'
import { tw } from '@/utils'
import { motion, useAnimationControls } from 'framer-motion'

function Tile({ x, y, prevX, prevY, value, cellSize, gutterSize, boardSize, id, classes = [] }) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    console.log('prevX', prevX)
    console.log('prevY', prevY)
    setAnimationKey(prevKey => prevKey + 1);
  }, [prevX, prevY])

  return (
    <motion.div
      key={animationKey} // Unique key to trigger re-animation
      variants={{
        initial: {
          x: prevX
            ? prevX * cellSize + (prevX + 1) * gutterSize
            : x * cellSize + (x + 1) * gutterSize,
          y: prevY
            ? prevY * cellSize + (prevY + 1) * gutterSize
            : y * cellSize + (y + 1) * gutterSize,
          backgroundColor: 'var(--color-bush)',
          color: 'var(--color-flint)',
        },
        final: {
          x: x * cellSize + (x + 1) * gutterSize,
          y: y * cellSize + (y + 1) * gutterSize,
          backgroundColor: backgroundColorResolver(value),
          color: textColorResolver(value),
        },
      }}
      initial="initial"
      animate="final"
      transition={{ duration: 0.5 }}
      className={tw(
        [
          'tile',
          'text-flint',
          'absolute',
          'flex',
          'justify-center',
          'items-center',
          'font-semibold',
          'w-[var(--2048-cell-size)]',
          'h-[var(--2048-cell-size)]',
          'rounded-[var(--2048-border-radius)]',
        ],
        classes
      )}
      style={{
        fontSize: `${value.toString().length > 2 ? '45px' : '55px'}`,
      }}
      data-x={x}
      data-y={y}
      data-id={id}
    >
      {value}
    </motion.div>
  )
}

const backgroundColorResolver = (value) => {
  if (value == 32) {
    return 'var(--color-orange-red)'
  } else if (value == 16) {
    return 'var(--color-orange)'
  } else if (value == 8) {
    return 'var(--color-light-orange)'
  } else if (value == 4) {
    return 'var(--color-aths-special)'
  } else {
    return 'var(--color-bush)'
  }
}

const textColorResolver = (value) => {
  if (value >= 8) {
    return 'var(--color-tile-light-text)'
  } else {
    return 'var(--color-flint)'
  }
}

export default Tile
