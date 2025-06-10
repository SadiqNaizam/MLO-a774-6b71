import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { X, Eye, EyeOff, ArrowRight } from 'lucide-react';

const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }).min(1, { message: "Email is required." }),
  password: z.string().min(1, { message: "Password is required." }),
  keepMeSignedIn: z.boolean().default(false).optional(),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "michaelscott@ascendion.com",
      password: "password", 
      keepMeSignedIn: true,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log('Login data:', data);
    // Placeholder for actual login logic
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Get Started</h1>
        <p className="text-sm text-muted-foreground mt-1">Sign In to Your Account</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Username or Email *</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                      className="h-10 pr-10"
                    />
                  </FormControl>
                  {field.value && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full w-10 text-muted-foreground hover:bg-transparent"
                      onClick={() => form.setValue('email', '', { shouldValidate: true })}
                      aria-label="Clear email"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">Password *</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      {...field}
                      className="h-10 pr-10"
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full w-10 text-muted-foreground hover:bg-transparent"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="keepMeSignedIn"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      id="keepMeSignedIn"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <Label
                    htmlFor="keepMeSignedIn"
                    className="text-sm font-normal text-foreground cursor-pointer select-none"
                  >
                    Keep me signed in
                  </Label>
                </FormItem>
              )}
            />
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot password?
            </a>
          </div>

          <Button type="submit" className="w-full h-10 bg-foreground text-background hover:bg-foreground/90">
            Sign In <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>

          <Button variant="outline" type="button" className="w-full h-10 border-border text-foreground hover:bg-accent">
            Login with company
          </Button>

          <p className="text-center text-xs text-muted-foreground pt-4">
            Still have trouble signing in?{' '}
            <a href="#" className="font-medium text-primary hover:underline">
              Click Here
            </a>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
