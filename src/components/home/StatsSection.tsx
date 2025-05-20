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
    <section className="py-12 bg-[#0b578a] text-white">
      <div className="cu-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">An Illustrious Legacy we continue to Shape</h1>
          <div className="grid grid-cols-5 gap-8 text-center">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              alt="Stats"
              width={200}
              height={100}
              className="mx-auto mb-4"
            />
            <div>
              <h2 className="text-5xl font-bold mb-2">154+</h2>
              <p className="text-sm">Research Papers</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">980+</h2>
              <p className="text-sm">Faculty Members</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">1350+</h2>
              <p className="text-sm">Students</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">100000+</h2>
              <p className="text-sm">Alumni Network</p>
            </div>
          </div>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              alt="News 1"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-[#0b578a] font-bold mb-2">Latest News</h3>
              <p className="text-gray-600 text-sm">Read more about our latest achievements</p>
            </div>
          </div>
          {/* Repeat for other cards */}
        </div>

        {/* Rankings Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-8">Proudly Distinguished by Our Prestigious Rankings and Recognitions</h2>
          <div className="grid grid-cols-7 gap-4">
            {/* Add ranking badges here */}
          </div>
        </div>

        {/* Placements Overview */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Placements Overview</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                alt="Placement Stats"
                width={400}
                height={300}
                className="mx-auto mb-4"
              />
              <div className="text-[#0b578a]">
                <h3 className="text-xl font-bold">54.75 LPA</h3>
                <p>Highest Package</p>
              </div>
            </div>
            {/* Repeat for other placement stats */}
          </div>
        </div>
      </div>
    </section>
  )
}
