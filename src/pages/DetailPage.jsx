import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NotFoundPage from "./404";
import ThreadDetail from "./../components/thread/ThreadDetail";
import CommentInput from "./../components/comment/CommentInput";
import CommentsList from "./../components/comment/CommentList";
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
} from "../states/threadDetails/action";

export default function DetailPage() {
  const { threadId } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  const onNeturalizeVoteThreadDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail());
  };

  const onCommentSubmit = (content) => {
    dispatch(asyncCreateComment({ content }));
  };

  const onUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id));
  };

  const onDownVoteComment = (id) => {
    dispatch(asyncDownVoteComment(id));
  };

  const onNeturalizeVoteComment = (id) => {
    dispatch(asyncNeutralizeVoteComment(id));
  };

  if (threadDetail === null) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex flex-col">
      <div className="">
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          upVoteThreadDetail={onUpVoteThreadDetail}
          downVoteThreadDetail={onDownVoteThreadDetail}
          neturalizeVoteThreadDetail={onNeturalizeVoteThreadDetail}
        />
        <CommentInput addComment={onCommentSubmit} />
        <h1 className="lg:pl-56 sm:pl-28 font-bold">
          Komentar({threadDetail.comments.length})
        </h1>
        <CommentsList
          comments={threadDetail.comments}
          authUser={authUser.id}
          upVoteComment={onUpVoteComment}
          downVoteComment={onDownVoteComment}
          neturalizeVoteComment={onNeturalizeVoteComment}
        />
      </div>
    </div>
  );
}
