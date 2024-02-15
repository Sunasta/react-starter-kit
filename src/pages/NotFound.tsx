import { Separator } from '@/components/ui/separator';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const NotFound = (): ReactElement => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full gap-y-4'>
      <div className='flex items-center'>
        <h1 className='text-4xl font-bold'>404</h1>
        <Separator orientation='vertical' className='h-12 mx-2' />
        <p>Page not found</p>
      </div>
      <Link to='/' className='underline underline-offset-8'>Go to home</Link>
    </div>
  );
};

export default NotFound;
