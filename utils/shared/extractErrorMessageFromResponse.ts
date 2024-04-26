export const errorMessage = (error: any) => {
  const respose = error.response?.data?.message as any;
  if (typeof respose === "object") return respose[0];
  else return respose;
};
