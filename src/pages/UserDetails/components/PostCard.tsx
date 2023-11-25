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
      <aside className="border-2 p-5 rounded-[5px] cursor-pointer" onClick={openModal}>
        <h2 className="font-bold text-xl mb-2 text-center line-clamp-2" title={post?.title}>{post?.title}</h2>
        <p className="text-gray-700 line-clamp-2 text-center" title={post?.body}>{post?.body}</p>
      </aside>
      {/* Modal for post details */}
      <Modal open={open} setOpen={setOpen}>
        <h2 className="font-bold text-xl mb-2 text-center">{post?.title}</h2>
        <p className="text-gray-700 text-center">{post.body}</p>
      </Modal>
    </>
  );
};
