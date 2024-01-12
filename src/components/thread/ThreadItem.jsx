import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import VoteButton from "../ButtonVote";
import postedAt from "../../utils";
import { MdOutlineComment } from "react-icons/md";

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neturalizeVote,
  threadOwner,
  authUser,
}) {
  const navigate = useNavigate();
  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };
  return (
    <>
      <div className="flex items-center justify-center mb-2">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white ">
          <div className="flex w-full items-center justify-between border-b pb-3 ">
            <div className="flex items-center space-x-3">
              <div className="text-lg font-bold text-slate-700 flex flex-row items-center gap-2">
                <img src={threadOwner.avatar} alt="" className="rounded-full" />
                {threadOwner.name}
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                #{category}
              </button>
              <div className="text-xs text-neutral-500">
                {postedAt(createdAt)}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div
              className="mb-3 text-xl font-bold hover:text-blue-400 cursor-pointer transition-all ease-in-out delay-150"
              onClick={onThreadClick}
            >
              {title}
            </div>
            <div className="text-sm text-neutral-600   ">{parse(body)}</div>
          </div>

          <div>
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex space-x-4 md:space-x-8">
                <div
                  className="flex cursor-pointer items-center transition hover:text-slate-600 "
                  onClick={onThreadClick}
                >
                  <MdOutlineComment />
                  <span>{totalComments}</span>
                </div>
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <VoteButton
                    id={id}
                    authUser={authUser}
                    upVote={upVote}
                    downVote={downVote}
                    neturalizeVote={neturalizeVote}
                    upVotesBy={upVotesBy}
                    downVotesBy={downVotesBy}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};

export { threadItemShape };
