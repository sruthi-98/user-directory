interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className="text-red-700 text-center my-20">{message}</p>;
};
