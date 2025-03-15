
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

// Admin credentials
const ADMIN_EMAIL = "admin@qrregister.com";
const ADMIN_PASSWORD = "admin123";

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    // Check if admin credentials were used
    if (values.email === ADMIN_EMAIL && values.password === ADMIN_PASSWORD) {
      toast({
        title: "Admin login successful!",
        description: "Welcome to the admin dashboard.",
      });
      
      // Redirect to admin events management
      setTimeout(() => {
        navigate('/admin/events');
      }, 1500);
    } else {
      // Regular user login (in a real app, you would authenticate against your backend)
      toast({
        title: "Login successful!",
        description: "Welcome back to QRRegister.",
      });
      
      // Redirect to dashboard or home page after successful login
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="container max-w-md mx-auto px-4 py-12">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground">
                Sign in to your QRRegister account
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="johndoe@example.com" {...field} />
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">Sign In</Button>
              </form>
            </Form>
            
            <div className="flex items-center justify-between text-sm">
              <Button variant="link" className="p-0" onClick={() => navigate('/forgot-password')}>
                Forgot password?
              </Button>
              <Button variant="link" className="p-0" onClick={() => navigate('/register')}>
                Create an account
              </Button>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <p className="text-sm text-center text-muted-foreground mb-2">Admin access</p>
              <div className="text-xs text-center text-muted-foreground space-y-1">
                <p>Email: admin@qrregister.com</p>
                <p>Password: admin123</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
