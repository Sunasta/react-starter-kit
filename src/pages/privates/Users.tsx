import { UsersTable } from "@/components";
import { ReactElement } from "react";

const Users = (): ReactElement => {
  return (
    <div className="flex flex-col h-full flex-grow">
      <h1 className='text-2xl'>Users</h1>
      <UsersTable />
    </div>);
}

export default Users;