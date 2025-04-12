"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, Lock, EyeOff, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [selectedUniversity, setSelectedUniversity] = useState(null)

  // Sample universities data
  const universities = [
    {
      id: "harvard",
      name: "Harvard University",
      color: "from-red-500 to-red-700",
      logo: "/placeholder.svg?height=60&width=60",
    },
    { id: "mit", name: "MIT", color: "from-gray-700 to-gray-900", logo: "/placeholder.svg?height=60&width=60" },
    {
      id: "stanford",
      name: "Stanford University",
      color: "from-red-600 to-red-800",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "yale",
      name: "Yale University",
      color: "from-blue-600 to-blue-800",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "princeton",
      name: "Princeton University",
      color: "from-orange-500 to-orange-700",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      id: "columbia",
      name: "Columbia University",
      color: "from-blue-500 to-blue-700",
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container flex flex-col items-center justify-center min-h-screen py-12">
        <Link
          href="/"
          className="absolute top-8 left-8 inline-flex items-center text-sm font-medium text-gray-300 hover:text-blue-400"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex justify-center">
              <Image src="/images/uniconnect-logo.png" alt="UniConnect" width={64} height={64} />
            </div>
            <h1 className="text-3xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
              UniConnect
            </h1>
            <p className="text-gray-400">Your university, connected.</p>
          </div>

          {!selectedUniversity ? (
            <div className="space-y-6 mt-6">
              <h2 className="text-xl font-semibold text-center">Select Your University</h2>

              <div className="space-y-4">
                <div className="relative">
                  <select
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white appearance-none focus:border-blue-500 focus:ring-blue-500"
                    onChange={(e) => setSelectedUniversity(e.target.value)}
                  >
                    <option value="">Select a university</option>
                    {universities.map((university) => (
                      <option key={university.id} value={university.id}>
                        {university.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>

                <p className="text-center text-gray-400 text-sm">or select from popular universities</p>

                <div className="grid grid-cols-2 gap-4">
                  {universities.slice(0, 4).map((university) => (
                    <button
                      key={university.id}
                      onClick={() => setSelectedUniversity(university.id)}
                      className={`relative overflow-hidden group rounded-xl p-4 border border-gray-800 hover:border-blue-500 transition-all duration-300 flex flex-col items-center justify-center h-32`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${university.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      ></div>
                      <Image
                        src={university.logo || "/placeholder.svg"}
                        alt={university.name}
                        width={60}
                        height={60}
                        className="rounded-full mb-2"
                      />
                      <span className="text-sm font-medium text-center">{university.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-gray-800 text-gray-400 hover:text-white hover:border-blue-500"
                onClick={() => document.querySelector("select")?.focus()}
              >
                Other University
              </Button>
            </div>
          ) : (
            <>
              <div className="bg-gradient-to-r from-blue-900/50 to-pink-900/50 rounded-xl p-6 border border-blue-900">
                <Tabs defaultValue="email" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4 bg-black/60">
                    <TabsTrigger
                      value="email"
                      className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                    >
                      Email
                    </TabsTrigger>
                    <TabsTrigger
                      value="university"
                      className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                    >
                      University ID
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="email" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="email"
                          placeholder="name@university.edu"
                          type="email"
                          className="pl-10 bg-black/50 border-gray-800 focus-visible:ring-blue-500 text-white"
                          autoComplete="email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-gray-300">
                          Password
                        </Label>
                        <Link href="/forgot-password" className="text-xs text-blue-400 hover:text-blue-300">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          className="pl-10 pr-10 bg-black/50 border-gray-800 focus-visible:ring-blue-500 text-white"
                          autoComplete="current-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="university" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="university-id" className="text-gray-300">
                        University ID
                      </Label>
                      <Input
                        id="university-id"
                        placeholder="Enter your university ID"
                        className="bg-black/50 border-gray-800 focus-visible:ring-blue-500 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="uni-password" className="text-gray-300">
                          Password
                        </Label>
                        <Link href="/forgot-password" className="text-xs text-blue-400 hover:text-blue-300">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="uni-password"
                          type={showPassword ? "text" : "password"}
                          className="pl-10 pr-10 bg-black/50 border-gray-800 focus-visible:ring-blue-500 text-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white">
                  Sign in
                </Button>

                <button
                  onClick={() => setSelectedUniversity(null)}
                  className="mt-4 text-xs text-center w-full text-gray-400 hover:text-blue-400"
                >
                  Change university
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full bg-gray-800" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-black px-2 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-gray-800 hover:bg-gray-900 hover:border-blue-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white">
                    <path
                      fill="currentColor"
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-gray-800 hover:bg-gray-900 hover:border-blue-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white">
                    <path
                      fill="currentColor"
                      d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-.1.325V1.325C24 .593 23.407 0 22.675 0z"
                    />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-gray-800 hover:bg-gray-900 hover:border-blue-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white">
                    <path
                      fill="currentColor"
                      d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"
                    />
                  </svg>
                </Button>
              </div>
            </>
          )}

          <p className="px-8 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline text-blue-400 hover:text-blue-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
