import * as Yup from "yup";

export const loginValidation = Yup.object({
  username: Yup.string()
    .max(24, "User Name limit reached.")
    .required("UserName is required."),

  password: Yup.string()
    .min(
      6,
      "Password must be greater than 6 characters."
    )
    .max(50, "Password limit reached.")
    .required("Password is required."),
});

export const registerValidation = Yup.object({
  name: Yup.string()
    .min(
      3,
      "Name must be greater than 3 characters."
    )
    .max(24, "Name limit reached.")
    .required("Name is required."),

  email: Yup.string()
    .max(50, "Email limit reached.")
    .email("Invalid Email")
    .required("Email is required."),

  phone: Yup.string().matches(
    /^\d{10}$/,
    "Phone Number must be of 10 digits."
  ),

  password: Yup.string()
    .min(
      6,
      "Password must be greater than 6 characters."
    )
    .max(50, "Password limit reached.")
    .required("Password is required."),

  // conformPassword: Yup.string()
  //   .required("Confirm-Password is required.")
  //   .test({
  //     name: "passwords-match",
  //     message: "Passwords not matched!",
  //     test: function (value) {
  //       const { password } = this.resolve(
  //         Yup.ref("password")
  //       );
  //       return value === password;
  //     },
  //   }),
});
