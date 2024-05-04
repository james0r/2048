import React, { useState, useEffect } from 'react'
import { tw } from '@/utils'

function Tile({ x, y, value, cellSize, gutterSize, boardSize, id, classes = [] }) {
  console.log(classes)

  return (
    <div
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
        ],
        classes
      )}
      style={{
        fontSize: `${value.toString().length > 2 ? '45px' : '55px'}`,
        transform: `translateX(${x * cellSize + (x + 1) * gutterSize}px) translateY(${y * cellSize + (y + 1) * gutterSize}px)`,
      }}
      data-x={x}
      data-y={y}
      data-id={id}
    >
      {value}
    </div>
  )
}

export default Tile
