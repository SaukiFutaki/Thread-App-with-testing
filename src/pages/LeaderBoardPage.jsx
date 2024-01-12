import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateLeaderboards } from "../states/leaderBoard/action";
import LeaderBoardItem from "./../components/leaderBoard/LeaderBoard";

export default function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { leaderboards } = useSelector((states) => states);
  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1 className="flex text-center justify-center pt-2 text-3xl text-blue-600 uppercase">
          Leaderboard
        </h1>
        {leaderboards.map(({ user, score }) => (
          <LeaderBoardItem key={user.id} user={user} score={score} />
        ))}
      </div>
    </>
  );
}
