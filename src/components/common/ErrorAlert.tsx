import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

interface IErrorAlertProps {
  message: string;
}

const ErrorAlert: React.FC<IErrorAlertProps> = ({ message }) => {
  return (
    <Alert variant='destructive'>
      <AlertCircle className='h-4 w-4' />
      <AlertTitle>An Error Occurred</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default ErrorAlert;
