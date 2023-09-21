export const getAvatarPath = (name?: string) => {
  if (!name) return "";

  const path = new URL(`/src/assets/images/avatars/${name}`, import.meta.url)
    .href;

  return path;
};
