import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 ">
      <h1 className="p-2 bg-red-400 rounded">404 Not Found</h1>
      <h1 className="underline hover:text-blue-400">
        <Link to="/">Silahkan kembali ke halaman utama</Link>
      </h1>
    </div>
  );
}
