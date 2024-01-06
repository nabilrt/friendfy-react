const SignUpValidator = (state) => {
  const { name, email, password, confirmPassword } = state;

  const errors = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    
  };

  if (name === "") {
    errors.name = "Name is required";
  }

  if (email === "") {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid";
  }

  if (password === "") {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be 6 or more characters";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Confirm password does not match";
  }

 

  return errors;
};

export default SignUpValidator;
