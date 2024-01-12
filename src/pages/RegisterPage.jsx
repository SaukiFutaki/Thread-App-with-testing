import { asyncRegisterUser } from "../states/users/action";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "./../components/RegisterInput";

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onRegister = ({ name, email, password, confirmpassword }) => {
    dispatch(asyncRegisterUser({ name, email, password, confirmpassword }));
    navigate("/login");
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <RegisterInput register={onRegister} />
              <h1 className="text-white">
                Already have an account?{" "}
                <Link to="/login" className="underline text-blue-400">
                  Sign in
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
