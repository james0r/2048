import React, { useState, useEffect } from 'react'
import { tw } from '@/utils'
import { motion, AnimatePresence } from 'framer-motion'

function Tile({ x, y, value, cellSize, gutterSize, boardSize, id, classes = [] }) {
  console.log('x', x)
  console.log('y', y)

  return (
    <motion.div
      className={tw(
        [
          'tile',
          'bg-bush',
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
      initial={{
        x: x * cellSize + (x + 1) * gutterSize,
        y: y * cellSize + (y + 1) * gutterSize,
      }}
      animate={{
        x: x * cellSize + (x + 1) * gutterSize,
        y: y * cellSize + (y + 1) * gutterSize,
      }}
      data-x={x}
      data-y={y}
      data-id={id}
    >
      {value}
    </motion.div>
  )
}

export default Tile
