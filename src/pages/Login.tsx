import { ReactElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '@/context/Auth';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
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
import 'react-toastify/dist/ReactToastify.css';


const Login = (): ReactElement | null => {
  const intl = useIntl();
  const formSchema = z.
    object({
      email: z.string()
        .email({ message: intl.formatMessage({ id: 'form.email.invalid' }) })
        .max(30, { message: intl.formatMessage({ id: 'form.email.max' }) }),
      password: z.string()
        .min(8, { message: intl.formatMessage({ id: 'form.password.min' }) })
        .max(50, { message: intl.formatMessage({ id: 'form.password.max' }) }),
    });

  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  const { loginAction } = useAuth();

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (values: z.infer<typeof formSchema>) => {
    await toast.promise(loginAction(values), {
      pending: intl.formatMessage({ id: 'pages.login.pending' }),
      success: intl.formatMessage({ id: 'pages.login.success' }),
      error: intl.formatMessage({ id: 'pages.login.error' }),
    });
  };

  return (
    <>
      <ToastContainer />
      <h1 className="text-center mt-20 scroll-m-20 text-2xl tracking-tight lg:text-4xl"><FormattedMessage id='pages.login' /></h1>
      <div className="flex flex-col flex-grow items-center justify-center">
        <Form {...form}>
          <form className='flex flex-col gap-2 mb-2' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><FormattedMessage id='form.email' /></FormLabel>
                  <FormControl>
                    <Input type='email' {...field} />
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
                  <FormLabel><FormattedMessage id='form.password' /></FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit"><FormattedMessage id='pages.login' /></Button>
          </form>
        </Form>
        <Link to="/register" className="text-blue-500 hover:underline"><FormattedMessage id='pages.login.not_registered' /></Link>
      </div>
    </>
  );
};

export default Login;
