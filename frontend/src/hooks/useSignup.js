import React from "react";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (
    fullName,
    username,
    password,
    confirmPassword,
    gender
  ) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields.");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match.");
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }
}
