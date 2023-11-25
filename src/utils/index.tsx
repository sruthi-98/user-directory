export const findPostsByUser = (posts: Record<string, any>[], userId: string) => {
  const updatedFilteredPosts = posts.filter((post) => post.userId === userId);
  return updatedFilteredPosts;
};
