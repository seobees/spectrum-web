import React, { FC, useEffect, useRef } from 'react'

export const LineChart: FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {}, [])

  return <canvas ref={chartRef} />
}
