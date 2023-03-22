import { useQuery } from "@tanstack/react-query";
import apiClient from "./config";

const getTags = async () => {
  const { data } = await apiClient.get("/api/tags");
  return data;
};

const useGetTags = () => useQuery(["tags"], getTags);

export default useGetTags;
