import React from "react"

export const useHttp = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  const request = React.useCallback(async(
    url: string,
    method: string = "GET",
    body: any,
    headers: any = {}
  ) => {
    setLoading(true);

    try {
      if(body) {
        body = JSON.stringify(body);
        headers["Content-Type"] = "application/json";
      }

      const res = await fetch(url, {method, body, headers});
      const data = await res.json();

      setLoading(false);

      return data;
    } catch(err: any) {
      setError(err.message);
    }
  }, []);

  return {loading, request, error};
}