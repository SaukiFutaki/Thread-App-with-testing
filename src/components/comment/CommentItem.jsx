import parse from "html-react-parser";
import PropTypes from "prop-types";

import { userShape } from "../thread/ThreadItem";
import VoteButton from "../ButtonVote";
import postedAt from "../../utils";

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  authUser,
}) {
  return (
    <>
      <div className="flex items-center justify-center  m-2">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white ">
          <div className="flex w-full items-center justify-between border-b pb-3 ">
            <div className="flex items-center space-x-3">
              <div className="text-lg font-bold text-slate-700 flex flex-row items-center gap-2">
                <img
                  className="rounded-full"
                  alt="Avatar Icon"
                  src={owner.avatar}
                />
                {owner.name}
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-xs text-neutral-500">
                {postedAt(createdAt)}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-neutral-600">
              <h1>{parse(content)}</h1>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex space-x-4 md:space-x-8">
                <div className="flex cursor-pointer items-center transition hover:text-slate-600 "></div>
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

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};
export { commentShape };
