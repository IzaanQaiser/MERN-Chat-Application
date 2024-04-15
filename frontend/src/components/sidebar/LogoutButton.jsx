import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <>
      {!loading ? (
        <div
          className="btn btn-wide hover:bg-green-600 text-white rounded-full mt-2"
          onClick={logout}
        >
          Logout
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </>
  );
};

export default LogoutButton;
