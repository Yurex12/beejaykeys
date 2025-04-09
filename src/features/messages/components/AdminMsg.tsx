import { HiTrash } from "react-icons/hi";
import { Message } from "../types";

function AdminMsg({
  name,
  message,
  email,
  _id: messageId,
  handleDelete,
}: Message & { handleDelete: (id: string) => void }) {
  return (
    <div className="flex flex-col gap-y-4 rounded-md border border-gray-200 p-5">
      {/* heading */}
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-red-500 px-4 py-2 text-white">
          {name?.charAt(0)}
        </span>
        <div>
          <p className="font-extrabold text-gray-600">{name}</p>
          <p className="text-xs text-gray-400">{email}</p>
        </div>
      </div>
      {/* paragraph */}
      <p className="flex-auto text-sm">{message}</p>
      {/* action buttons */}
      <div className="flex items-center justify-end">
        {/* <Button className="h-0 bg-green-400 px-6 py-4 hover:bg-green-500">
          Reply
        </Button> */}
        <button onClick={() => handleDelete(messageId)}>
          <HiTrash className="text-2xl text-red-400 hover:cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default AdminMsg;
