import { ConfirmDelete } from "@/components/ConfirmDelete";
import NoData from "@/components/NoData";
import { useState } from "react";
import { useDeleteMessage } from "../hooks/useDeleteMessage";
import { useMessages } from "../hooks/useMessages";
import AdminMsg from "./AdminMsg";

function AdminMessagesContainer() {
  const [open, setOpen] = useState(false);
  const [messageId, setMessageId] = useState("");
  const { messages } = useMessages();

  const { deleteMessage, isDeleting } = useDeleteMessage();

  function handleDelete(id: string) {
    setMessageId(id);
    setOpen(true);
  }

  function handleDeleteMessage() {
    deleteMessage(messageId, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  }
  if (!messages?.length)
    return <NoData content="No Messages to display at the moment." />;

  console.log(messages);

  return (
    <>
      <section>
        <div className="mx-auto px-8 py-5 md:px-14">
          <div className="grid grid-cols-1 justify-between gap-5 md:grid-cols-2 md:gap-7 xl:grid-cols-3">
            {messages.map((message) => (
              <AdminMsg
                {...message}
                key={message._id}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </section>
      <ConfirmDelete
        handleOpen={setOpen}
        open={open}
        onConfirm={handleDeleteMessage}
        disabled={isDeleting}
        resourceName="Message"
      />
    </>
  );
}

export default AdminMessagesContainer;
