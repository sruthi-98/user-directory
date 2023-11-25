export const findPostsByUser = (
  posts: Record<string, any>[],
  userId: string
) => {
  const updatedFilteredPosts = posts.filter((post) => post.userId === userId);
  return updatedFilteredPosts;
};

export const formatTime = (time: number) => {
  return time.toString().padStart(2, "0");
};

export const getNewTime = (time: {
  hour: number;
  minute: number;
  second: number;
}) => {
  const { hour, minute, second } = time;
  const isLastSecond = second === 59;
  const isLastMinute = minute === 59;
  const isLastHour = hour === 23;

  let newHour = hour,
    newMinute = minute,
    newSecond = second;

  if (isLastHour && isLastMinute && isLastSecond) {
    // 23:59:59
    newHour = 0;
    newMinute = 0;
    newSecond = 0;
  } else if (isLastSecond && isLastMinute) {
    // HH:59:59
    newHour = hour + 1;
    newMinute = 0;
    newSecond = 0;
  } else if (isLastSecond) {
    // HH:MM:59
    newMinute = minute + 1;
    newSecond = 0;
  } else {
    newSecond = second + 1;
  }

  return {
    newHour,
    newMinute,
    newSecond,
  };
};
