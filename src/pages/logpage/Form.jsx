"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../components/ui/form"
import { Checkbox } from "../../components/ui/checkbox"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const formSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  remember: z.boolean().default(false),
})

export default function LoginPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  })


  const [info, setInfo] = useState()
  console.log(info);
  
  

  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log("Login data:", data)
    setInfo(data)
    if (data) {
      navigate("/create")
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f5f9] px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10 sm:p-14">
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-gray-800 mb-2">Log In</div>
          <p className="text-gray-500 text-lg">Welcome back! Please enter your details</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="text-md h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md text-gray-700">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="text-md h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between text-sm">
              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <label htmlFor="remember" className="text-gray-600 text-sm">
                      Remember me
                    </label>
                  </FormItem>
                )}
              />
              <a href="#" className="text-sm text-teal-700 hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg bg-teal-800 hover:bg-teal-600 text-white"
            >
              Log In
            </Button>
          </form>
        </Form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="px-4 text-sm text-gray-500">or continue with</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        <div className="flex space-x-4 mb-6">
          <Button variant="outline" className="w-full h-12 text-sm">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </Button>
        </div>

        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-teal-800 hover:underline font-medium">
            Sign up
          </a>
        </div>
      </div>
    </div>
  )
}
