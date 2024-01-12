import PropTypes from "prop-types";

import useInput from "../../hooks/useInput";

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput("");
  const onCommentSubmit = () => {
    addComment(comment);
    setComment("");
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl">Beri Komentar</h1>
        <div className="flex flex-col gap-2">
          <textarea
            className="rounded pb-2"
            value={comment}
            onChange={onCommentChange}
          />
          <button
            className="bg-blue-500 rounded p-2 text-white"
            onClick={onCommentSubmit}
          >
            Kirim
          </button>
        </div>
      </div>
    </>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
