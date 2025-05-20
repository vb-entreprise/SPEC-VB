"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[240px]">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80"
        alt="SPEC Institutes Background"
        fill
        priority
        className="object-cover fixed top-0 left-0 -z-10"
      />

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      <div className="cu-container relative h-full flex items-center justify-between z-10">
        {/* Left Content - Visible on larger screens */}
        <div className="hidden md:block text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Best Private University in Punjab (India)
          </h1>
          <p className="text-lg">
            Chandigarh University offers various Undergraduate and Postgraduate Courses like Engineering, B.tech, BCA, BBA, HMCT, B.Com, LLB, B.Arch, MBA, M.Tech and MCA.
          </p>

          {/* CUCET Countdown Timer */}
          <div className="mt-6 bg-[#a9473b]/90 p-4 rounded-md">
            <p className="text-white font-medium mb-2">CUCET Scholarship registrations closing on 15th May 2025</p>
            <div className="flex gap-4 mb-3">
              <div className="bg-white rounded-md text-black p-2 text-center w-16">
                <span className="block text-xl font-bold">1</span>
                <span className="text-xs">Days</span>
              </div>
              <div className="bg-white rounded-md text-black p-2 text-center w-16">
                <span className="block text-xl font-bold">18</span>
                <span className="text-xs">Hours</span>
              </div>
              <div className="bg-white rounded-md text-black p-2 text-center w-16">
                <span className="block text-xl font-bold">32</span>
                <span className="text-xs">Minutes</span>
              </div>
              <div className="bg-white rounded-md text-black p-2 text-center w-16">
                <span className="block text-xl font-bold">39</span>
                <span className="text-xs">Seconds</span>
              </div>
            </div>
            <Link href="https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=cuchd">
              <Button className="bg-white hover:bg-gray-100 text-[#a9473b] border-none font-semibold">
                Apply Now !
              </Button>
            </Link>
          </div>
        </div>

        {/* Login Form Card */}
        <Card className="w-full max-w-sm bg-white shadow-lg">
          <CardHeader className="bg-[#a9473b] text-white text-center py-3">
            <h2 className="text-lg font-semibold">CHANDIGARH UNIVERSITY LOGIN</h2>
          </CardHeader>
          <CardContent className="pt-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1f425c]"
                  placeholder="Enter Username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1f425c]"
                  placeholder="Enter Password"
                />
              </div>

              <div>
                <label htmlFor="loginType" className="block text-sm font-medium text-gray-700 mb-1">Login Type</label>
                <select
                  id="loginType"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1f425c]"
                >
                  <option value="">Select Login Type</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="staff">Staff</option>
                  <option value="alumni">Alumni</option>
                </select>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button className="w-full bg-[#a9473b] hover:bg-[#863a31] text-white">
              Login
            </Button>

            <div className="text-center w-full text-sm">
              <a href="#" className="text-[#1f425c] hover:underline">Forgot Password?</a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
