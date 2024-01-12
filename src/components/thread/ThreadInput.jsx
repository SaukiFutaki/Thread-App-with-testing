import PropTypes from "prop-types";
import useInput from "./../../hooks/useInput";

export default function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput("");
  const [category, onCategoryChange] = useInput("");
  const [body, onBodyChange] = useInput("");

  return (
    <div className=" ">
      <div className="flex flex-col ">
        <input
          className=" bg-blue-100 border border-blue-300 p-2 mb-4 outline-none rounded-sm"
          placeholder="Judul"
          value={title}
          onChange={onTitleChange}
        />
        <input
          placeholder="Kategori"
          value={category}
          onChange={onCategoryChange}
          className=" bg-blue-100 border border-blue-300 p-2 mb-4 outline-none rounded-sm"
        />
        <textarea
          placeholder="apa yang mau kamu diskusikan ?"
          value={body}
          onChange={onBodyChange}
          className="bg-blue-100 border border-blue-300 p-2 mb-4 outline-none rounded-sm"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => addThread({ title, body, category })}
        >
          Kirim
        </button>
      </div>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
