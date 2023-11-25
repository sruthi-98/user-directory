import { useState } from "react";
import { Modal } from "components/Modal";

interface PostCardProps {
  post: Record<string, any>;
}
export const PostCard = ({ post }: PostCardProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div onClick={openModal}>
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
      {/* Modal for post details */}
      <Modal open={open} setOpen={setOpen}>
        <h2>{post?.title}</h2>
        <p>{post.body}</p>
      </Modal>
    </>
  );
};
