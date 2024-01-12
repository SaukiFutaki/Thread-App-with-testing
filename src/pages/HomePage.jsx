import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ThreadsList from "../components/thread/threadList";
import asyncPopulateUsersAndThreads from "../states/shared/action";
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeturalizeVoteThread,
} from "../states/threads/action";
import { FiPlusCircle } from "react-icons/fi";

function HomePage() {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const categories = new Set(threads.map((thread) => thread.category));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeturalizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="bg-gray-200 box-border">
      <div className=" flex justify-center p-8">
        <h1 className="text-3xl underline pr-2">Kategori populer :</h1>
        {Array.from(categories).map((category) => {
          if (filter === category) {
            return (
              <button
                className="rounded-md border bg-neutral-300 px-3 py-1 text-xs font-semibold"
                key={category}
                onClick={() => setFilter("")}
              >
                {`#${category}`}
              </button>
            );
          }
          return (
            <button
              className="rounded-md border bg-neutral-100 px-3 py-1 text-xs font-semibold"
              key={category}
              onClick={() => setFilter(category)}
            >
              {`#${category}`}
            </button>
          );
        })}
      </div>

      <ThreadsList
        threads={
          filter
            ? threadList.filter((thread) => thread.category === filter)
            : threadList
        }
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
        neturalizeVote={onNeturalizeVoteThread}
      />
      <Link to="/add">
        <div className=" fixed bottom-5  flex flex-col items-center right-10">
          <h1 className="font-bold lg:text-2xl">Add Thread</h1>
          <FiPlusCircle className=" sm:text-sm lg:text-5xl" />
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
