import { lazy } from 'react';
const SharedButton = lazy(() => import('shared/Button'));

const Users = () => {
  return (
    <div>
      <SharedButton />
    </div>
  );
};

export default Users;
