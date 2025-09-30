
export const getAuthHeader = (): Record<string, string> => {
  if (typeof window === "undefined") return {};

  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};


export const normalizeError = (error: any) => {
  if (error?.response) {
    return {
      status: error.response.status,
      message: error.response.data?.message || "Request failed",
    };
  }
  return { status: 0, message: error.message || "Network error" };
};
