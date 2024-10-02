import { Table } from '@tanstack/react-table';
import { Input } from '../ui/input';

interface DataTableSearchProps<TData> {
  table: Table<TData>;
  keyWord: string;
}

export function DataTableSearch<TData>({ table, keyWord }: DataTableSearchProps<TData>) {
  return (
    <Input
      placeholder={`Search by ${keyWord}...`}
      value={(table.getColumn(keyWord)?.getFilterValue() as string) ?? ''}
      onChange={(event) => table.getColumn(keyWord)?.setFilterValue(event.target.value)}
      className="max-w-sm"
    />
  );
}
