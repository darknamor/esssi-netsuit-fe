import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { BillingRoutes } from '../billing/routes/BillingRoutes';
import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === 'authenticated' ? <Route path='/*' element={<BillingRoutes />} /> : <Route path='/auth/*' element={<AuthRoutes />} />}
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
