import rawData from "@/data/data.json";
import { Data } from "@/types";

export const fetchData = (): Promise<Data> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rawData);
    }, 300);
  });
};
