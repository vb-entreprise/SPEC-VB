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
    <section className="py-8">
      <div className="cu-container">
        {/* World Rankings Banner */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col items-center w-full max-w-2xl mx-auto">
            <Image
              src="https://www.cuchd.in/latest-assets/img/qsRaninking-2025.jpg"
              alt="QS Rankings"
              width={600}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        <h2 className="text-[#1f425c] text-2xl font-semibold text-center mb-6">An Illustrious Legacy we continue to Shape</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <StatCard
            number="10+"
            title="Years of Academic Excellence"
          />
          <StatCard
            number="30,000+"
            title="Students"
          />
          <StatCard
            number="1500+"
            title="Faculty Members"
          />
          <StatCard
            number="6500+"
            title="Research Publications"
          />
          <StatCard
            number="150+"
            title="Courses"
          />
          <StatCard
            number="350+"
            title="Global Partners"
          />
        </div>

        {/* Placements Section */}
      </div>
    </section>
  )
}
