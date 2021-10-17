export const fetcher = (
  url,
  onSuccess,
  onError,
  method = "GET",
  body,
  options = {}
) =>
  url
    ? fetch(url, {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        ...options,
      })
        .then((response) => response.json())
        .then((result) => {
          onSuccess(result);
        })
        .catch((error) => {
          onError(error);
        })
    : onError("URL Missing");
