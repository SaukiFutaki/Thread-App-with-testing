import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncCreateThread } from "../states/threads/action";

import ThreadInput from "../components/thread/threadInput";

export default function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate("/");
  };

  return (
    <div className="pt-20">
      <div className="mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl ">
        <h1 className=" text-center font-bold text-2xl  text-gray-800 bg-gray-200 pb-2">
          Buat diskusi baru
        </h1>
        <ThreadInput addThread={onAddThread} />
      </div>
    </div>
  );
}
