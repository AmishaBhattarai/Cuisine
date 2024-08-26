exports.greetingUser = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours < 12) {
    return "Good Morning!";
  }
  if (hours >= 12 && hours <= 17) {
    return "Good Afternoon!";
  }
  if (hours > 17 && hours < 20) {
    return "Good Evening!";
  }
  if (hours >= 20 && hours <= 24) {
    return "Good Night!";
  } else {
    return "Namastey!";
  }
};
