import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { userShape } from "./thread/ThreadItem";

export default function Nav({ authUser, signOut }) {
  return (
    <div className="bg-gray-800 h-auto">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <h1>
            <h1 className="text-3xl text-white">
              Thread <span className="text-blue-400">Apps</span>
            </h1>
          </h1>

          <div className="flex gap-2">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              <button>Threads</button>
            </Link>
            <Link
              to="/leaderboards"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              <button>Leaderboards</button>
            </Link>
          </div>
          <div className="flex flex-row  items-center gap-2 ">
            <img
              className="rounded-full w-8 h-8"
              alt="Avatar Icon"
              src={authUser.avatar}
            />
            <button
              className="bg-red-600 text-white rounded-md px-3 py-2 text-sm font-medium"
              onClick={signOut}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Nav.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  signOut: PropTypes.func.isRequired,
};
