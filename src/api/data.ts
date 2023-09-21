import { Data } from "@/types";

import rawData from "@/data/data.json";

export const fetchData = (): Promise<Data> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rawData);
    }, 300);
  });
};
