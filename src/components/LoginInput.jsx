import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

export default function Logininput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  return (
    <>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <button
          onClick={() => login({ email, password })}
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          Login
        </button>
      </form>
    </>
  );
}

Logininput.propTypes = {
  login: PropTypes.string.isRequired,
};
