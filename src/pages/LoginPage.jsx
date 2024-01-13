import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncSetAuthUser } from "../states/authUser/action";
import Logininput from "./../components/LoginInput";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate("/");
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login Here!
              </h1>
              <Logininput login={onLogin} />
              <h1 className="text-white">
                Do not have an account?{" "}
                <Link to="/register" className="underline text-blue-400">
                  Register
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
