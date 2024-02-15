import { ReactElement, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { ToastContainer, toast } from 'react-toastify';
import { init, sendForm } from '@emailjs/browser';
import { FormattedMessage, useIntl } from 'react-intl';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
init(`${import.meta.env.VITE_EMAILJS_USER_ID}`);



const Contact = (): ReactElement | null => {
  const intl = useIntl();

  const formSchema = z.object({
    firstname: z.string().min(2, { message: intl.formatMessage({ id: 'form.firstname.min' }) }),
    lastname: z.string().min(2, { message: intl.formatMessage({ id: 'form.firstname.min' }) }),
    email: z.string().email(),
    tel: z.string()
      .min(10, { message: intl.formatMessage({ id: 'form.firstname.min' }) })
      .max(15, { message: intl.formatMessage({ id: 'form.firstname.min' }) }),
    message: z.string()
      .min(10, { message: intl.formatMessage({ id: 'form.firstname.min' }) })
      .max(500, { message: intl.formatMessage({ id: 'form.firstname.min' }) })
  });

  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: { firstname: '', lastname: '', email: '', message: '' },
  });

  /**
   * /!\ for MailJS only
   * Generate a random contact number to prevent spam
   */
  const [contactNumber, setContactNumber] = useState('000000');
  const generateContactNumber = () => {
    const numStr = '000000' + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async () => {
    generateContactNumber();
    await toast.promise(
      sendForm(
        `${import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        '#contact-form'
      ),
      {
        pending: <FormattedMessage id="form.pending" />,
        success: <FormattedMessage id="form.success" />,
        error: <FormattedMessage id="form.error" />,
      }
    );
  };

  return (
    <>
      <h1 className="text-center scroll-m-20 text-2xl tracking-tight lg:text-4xl mt-20">Contact</h1>
      <div className="flex flex-col flex-grow items-center justify-center">
        <ToastContainer stacked />
        <Form {...form}>
          <form
            id="contact-form"
            className="w-full max-w-lg"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <Input type="hidden" name="contact_number" value={contactNumber} />
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel><FormattedMessage id='form.firstname' /></FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ErrorMessage
                  name="firstname"
                  errors={form.formState.errors}
                  render={({ message }) => (
                    <div className="text-xs text-red-500 mt-1">{message}</div>
                  )}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel><FormattedMessage id='form.name' /></FormLabel>
                      <FormControl>
                        <Input type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ErrorMessage
                  name="lastname"
                  errors={form.formState.errors}
                  render={({ message }) => (
                    <div className="text-xs text-red-500 mt-1">{message}</div>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
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
                <ErrorMessage
                  name="email"
                  errors={form.formState.errors}
                  render={({ message }) => (
                    <div className="text-xs text-red-500 mt-1">{message}</div>
                  )}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <FormField
                  control={form.control}
                  name="tel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel><FormattedMessage id='form.phone' /></FormLabel>
                      <FormControl>
                        <Input type='tel' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ErrorMessage
                  name="tel"
                  errors={form.formState.errors}
                  render={({ message }) => (
                    <div className="text-xs text-red-500 mt-1">{message}</div>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <FormField
                  control={form.control}
                  name="tel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel><FormattedMessage id='form.phone' /></FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ErrorMessage
                  name="tel"
                  errors={form.formState.errors}
                  render={({ message }) => (
                    <div className="text-xs text-red-500 mt-1">{message}</div>
                  )}
                />
              </div>
            </div>
            <div className="md:flex md:items-center md:justify-end">
              {/* <div
              className="g-recaptcha"
              data-sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY}`}
            /> */}
              <Button type="submit">Envoyer</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Contact;
