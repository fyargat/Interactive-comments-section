const set = (key: string, data: any) =>
  localStorage.setItem(key, JSON.stringify(data));

const get = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
};

const clear = (key = "false") => {
  if (key) {
    localStorage.removeItem(key);
    return;
  }

  localStorage.clear();
};

export { clear, get, set };
