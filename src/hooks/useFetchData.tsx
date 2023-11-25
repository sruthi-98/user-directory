import { useEffect, useState } from "react";

export const useFetchData = (fetchData: () => Promise<any>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};
