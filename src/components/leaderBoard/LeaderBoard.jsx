import PropTypes from "prop-types";
import { userShape } from "../thread/ThreadItem";

export default function LeaderBoardItem({ user, score }) {
  return (
    <div className="max-w-md mx-auto my-4 bg-white rounded-md overflow-hidden shadow-md">
      <div className="flex items-center p-4 bg-gray-100">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div className="text-lg font-semibold">{user.name}</div>
      </div>
      <div className="p-4">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Skor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="py-2 px-4 ">{score}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

LeaderBoardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};
