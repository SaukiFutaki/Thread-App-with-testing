import PropTypes from "prop-types";
import parse from "html-react-parser";
import { userShape } from "./ThreadItem";
import VoteButton from "../ButtonVote";
import postedAt from "../../utils";

export default function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neturalizeVoteThreadDetail,
  authUser,
}) {
  return (
    <>
      <div className="flex items-center justify-center  mb-2 mt-10">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white ">
          <div className="flex w-full items-center justify-between border-b pb-3 ">
            <div className="flex items-center space-x-3">
              <div className="text-lg font-bold text-slate-700 flex flex-row items-center gap-2">
                <img src={owner.avatar} alt="" className="rounded-full" />
                {owner.name}
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
            <div className="mb-3 text-xl font-bold">{title}</div>
            <div className="text-sm text-neutral-600">{parse(body)}</div>
          </div>

          <div>
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex space-x-4 md:space-x-8">
                <div className="flex cursor-pointer items-center transition hover:text-slate-600 "></div>
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <VoteButton
                    id={id}
                    authUser={authUser}
                    upVote={upVoteThreadDetail}
                    downVote={downVoteThreadDetail}
                    neturalizeVote={neturalizeVoteThreadDetail}
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

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neturalizeVoteThreadDetail: PropTypes.func.isRequired,
};
