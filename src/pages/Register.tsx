import { ReactElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '@/context/Auth';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useIntl } from 'react-intl';



const Register = (): ReactElement | null => {
  const intl = useIntl();

  const formSchema = z.object({
    username: z.string().min(2, { message: intl.formatMessage({ id: 'form.username.min' }) }),
    email: z.string().email(),
    password: z.string().min(8, { message: intl.formatMessage({ id: 'form.username.min' }) }),
    passwordConfirmation: z.string().min(8, { message: intl.formatMessage({ id: 'form.username.min' }) }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: { username: '', email: '', password: '', passwordConfirmation: '' },
  });

  const { loginAction } = useAuth();

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (values: z.infer<typeof formSchema>) => {
    await toast.promise(loginAction(values), {
      pending: intl.formatMessage({ id: 'pages.register.pending' }),
      success: intl.formatMessage({ id: 'pages.register.success' }),
      error: intl.formatMessage({ id: 'pages.register.error' }),
    });
  };

  return (
    <>
      <ToastContainer />
      <h1 className="text-center mt-20 scroll-m-20 text-2xl tracking-tight lg:text-4xl">Register</h1>
      <div className="flex flex-col flex-grow items-center justify-center">
        <Form {...form}>
          <form className='flex flex-col gap-2 mb-2' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password confirmation</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Register</Button>
          </form>
        </Form>
        <Link to="/login" className="text-blue-500 hover:underline">Déjà inscrit ?</Link>
      </div>
    </>
  );
};

export default Register;
