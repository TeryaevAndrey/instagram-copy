import React from "react"

export const useHttp = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  const request = React.useCallback(async(
    url: string,
    method: string = "GET",
    body: any,
    headers: any = {}
  ) => {
    setLoading(true);
    setIsSuccess(false);

    try {
      if(body) {
        body = JSON.stringify(body);
        headers["Content-Type"] = "application/json";
      }

      const res = await fetch(url, {method, body, headers});
      const data = await res.json();

      setLoading(false);
      
      setIsSuccess(true);

      return data;
    } catch(err: any) {
      setLoading(false);
      setIsSuccess(false);
    }
  }, []);

  return {loading, request, isSuccess, setIsSuccess};
}