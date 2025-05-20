"use client"

import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

type StatProps = {
  number: string
  title: string
  subtitle?: string
}

const StatCard = ({ number, title, subtitle }: StatProps) => {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-0 flex flex-col items-center text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-[#1f425c] mb-1">{number}</h3>
        <p className="text-gray-700 font-medium text-sm mb-1">{title}</p>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </CardContent>
    </Card>
  )
}

export const StatsSection = () => {
  return (
    <section className="py-8 bg-[#0b578a] text-white">
      <div className="cu-container">
        <h2 className="text-center text-3xl font-semibold mb-8">An Illustrious Legacy we continue to Shape</h2>
        
        <div className="grid grid-cols-5 gap-8 items-center justify-center text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold mb-1">154+</span>
            <span className="text-sm uppercase">Programs</span>
            <span className="text-xs mt-1">Industry Oriented Academic Programs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold mb-1">980+</span>
            <span className="text-sm uppercase">Students</span>
            <span className="text-xs mt-1">Top-Tier Mentorship</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold mb-1">1350+</span>
            <span className="text-sm uppercase">Faculty</span>
            <span className="text-xs mt-1">Dedicated Faculty</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold mb-1">300+</span>
            <span className="text-sm uppercase">Faculty</span>
            <span className="text-xs mt-1">Renowned Faculty</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold mb-1">100000+</span>
            <span className="text-sm uppercase">Alumni</span>
            <span className="text-xs mt-1">Accomplished Alumni Across the Globe</span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-12">
          <div className="relative aspect-video">
            <Image
              src="https://ext.same-assets.com/2241434697/1342323975.webp"
              alt="Campus Life"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <div className="relative aspect-video">
            <Image
              src="https://ext.same-assets.com/2241434697/1431232457.webp"
              alt="Sports"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="https://ext.same-assets.com/2241434697/3214124125.webp"
              alt="Events"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="https://ext.same-assets.com/2241434697/3786175421.webp"
              alt="Research"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="bg-white text-black p-4 rounded-lg">
            <h3 className="font-semibold mb-2">UPCOMING EVENTS</h3>
            <p className="text-sm">1st International Conference on Building Urban Infrastructure with Leading Design Innovations (BUILD- 2025)</p>
            <button className="mt-4 bg-[#c40c12] text-white text-sm px-4 py-1 rounded">
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}