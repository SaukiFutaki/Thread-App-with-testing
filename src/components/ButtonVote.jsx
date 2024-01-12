import PropTypes from "prop-types";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import { AiFillLike, AiFillDislike } from "react-icons/ai";

export default function VoteButton({
  id,
  upVote,
  downVote,
  neturalizeVote,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const onNeutralizeVoteClick = () => {
    neturalizeVote(id);
  };
  return (
    <>
      {isUpVoted ? (
        <button onClick={onNeutralizeVoteClick}>
          <AiFillLike />
        </button>
      ) : (
        <button onClick={onUpVoteClick}>
          <AiOutlineLike />
        </button>
      )}

      <h1>{upVotesBy.length}</h1>
      {isDownVoted ? (
        <button onClick={onNeutralizeVoteClick}>
          <AiFillDislike />
        </button>
      ) : (
        <button onClick={onDownVoteClick}>
          <AiOutlineDislike />
        </button>
      )}
      <h1>{downVotesBy.length}</h1>
    </>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};
