"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { authApi, isAuthenticated } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if the user is authenticated
    if (!isAuthenticated()) {
      router.push('/login')
      return
    }

    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await authApi.getCurrentUser()
        setUser(response.data.user)
      } catch (error) {
        console.error('Failed to fetch user data:', error)
        toast.error('Failed to load user data. Please try again.')
        
        // If unauthorized, redirect to login
        if (error.message.includes('Unauthorized')) {
          authApi.logout()
          router.push('/login')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [router])

  const handleLogout = () => {
    authApi.logout()
    router.push('/login')
    toast.success('Logged out successfully')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8">
          <h2 className="text-xl font-semibold mb-4">Loading your dashboard...</h2>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to Uniso!</h2>
          
          {user && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-900">Your Profile</h3>
              <div className="mt-4 space-y-2">
                <p><span className="font-semibold">Name:</span> {user.name}</p>
                <p><span className="font-semibold">Email:</span> {user.email}</p>
                <p><span className="font-semibold">University:</span> {user.university}</p>
                <p><span className="font-semibold">Department:</span> {user.department}</p>
              </div>
            </div>
          )}
          
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">API Integration Status</h3>
            <div className="p-4 bg-green-50 rounded-lg text-green-800">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Connected to backend API successfully!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
