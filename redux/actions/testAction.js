import { CREATE_POST } from "./types";

export const createPost = () => {
  return {
    type: CREATE_POST,
    payload: "Hello"
  };
};
