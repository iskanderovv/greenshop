"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"

interface PriceRangeSliderProps {
  min: number
  max: number
  value: [number, number]
  onValueChange: (value: [number, number]) => void
}

export function PriceRangeSlider({ min, max, value, onValueChange }: PriceRangeSliderProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-[#3D3D3D] ">Price Range</h3>
      <Slider
        min={min}
        max={max}
        step={1}
        value={value}
        onValueChange={onValueChange}
        className="w-full"
      />
      <div className="flex justify-between">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  )
}

