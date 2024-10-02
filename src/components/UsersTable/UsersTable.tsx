import { useUsers } from '@/hooks/queries/useUsers';
import { LoaderCircle } from 'lucide-react';
import { DataTable } from '../DataTable/data-table';
import { columns } from './UsersColumnsHeader';

const UsersTable = () => {
  const { status, data } = useUsers();
  if (status === 'pending') return <LoaderCircle className="text-orange-600 bg-orange-300" />;
  if (status === 'error') return <div>Error</div>;
  return <DataTable columns={columns} data={data!} />;
};

export default UsersTable;
