"use client"
import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react"
import Image from "next/image"

export default function SignUp() {
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
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
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
          />
          <Button className="mt-6" fullWidth>
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-blue-500 transition-colors hover:text-blue-700">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  )
}
