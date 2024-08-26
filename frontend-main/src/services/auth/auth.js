import axiosInterceptor from "../../functions/interceptor";
export const login = async (credentials) => {
  try {
    const response = await axiosInterceptor.post(
      "/api/auth/login",
      credentials
    );

    if (response.data) {
      return {
        success: true,
        data: response.data,
      };
    }
    alert("ok");

    return {
      success: false,
      error: "Something went wrong!",
    };
  } catch (e) {
    return {
      success: false,
      error: e.response.data,
    };
  }
};

export const register = async (credentials) => {
  try {
    const response = await axiosInterceptor.post(
      "/api/auth/register",
      credentials
    );

    if (response.data) {
      return {
        success: true,
        data: response.data,
      };
    }
    return {
      success: false,
      error: "Something went wrong!",
    };
  } catch (e) {
    return {
      success: false,
      error: e.response.data,
    };
  }
};
