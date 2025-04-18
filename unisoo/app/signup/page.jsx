"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react"
import Image from "next/image"
import Link from "next/link"
import { authApi } from "@/lib/api"
import { toast } from "sonner"

export default function SignUp() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    university: "harvard",
    department: "cs",
  })

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Validate university email
      if (!formData.email.includes("@") || !formData.email.endsWith(".edu")) {
        toast.error("Please use a valid university email address.")
        setIsLoading(false)
        return
      }

      const response = await authApi.signup(formData)
      
      // Show success message
      toast.success("Account created successfully!")
      
      // Redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      console.error("Signup failed:", error)
      toast.error(error.message || "Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card color="transparent" shadow={false}>
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center">
            <Image src="/images/uniconnect-logo.png" alt="UniConnect" width={64} height={64} />
          </div>
          <h1 className="text-3xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            UniConnect
          </h1>
          <p className="text-gray-400">Join your university community</p>
        </div>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input 
              size="lg" 
              label="First Name" 
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input 
              size="lg" 
              label="Last Name" 
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <Input 
              size="lg" 
              label="Email" 
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input 
              type="password" 
              size="lg" 
              label="Password" 
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="mb-4">
              <label htmlFor="university" className="block text-sm font-medium text-gray-700">
                University
              </label>
              <select
                id="university"
                value={formData.university}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                required
              >
                <option value="harvard">Harvard University</option>
                <option value="mit">MIT</option>
                <option value="stanford">Stanford University</option>
                <option value="yale">Yale University</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <select
                id="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                required
              >
                <option value="cs">Computer Science</option>
                <option value="engineering">Engineering</option>
                <option value="business">Business</option>
                <option value="arts">Arts & Humanities</option>
                <option value="science">Natural Sciences</option>
              </select>
            </div>
          </div>
          <Checkbox
            label={
              <Typography variant="small" className="font-normal" color="gray">
                I agree to the
                <a href="#" className="font-medium transition-colors hover:text-blue-500">
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            required
          />
          <Button className="mt-6" fullWidth type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Sign Up"}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-blue-500 transition-colors hover:text-blue-700">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  )
}
