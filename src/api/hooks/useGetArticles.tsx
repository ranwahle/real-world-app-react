import { useQuery } from "@tanstack/react-query";
import apiClient from "./config";

const getArticles = async (query: { queryKey: any[] }) => {
  const [_key, limit, offset] = query.queryKey;
  const { data } = await apiClient.get(
    `/api/articles?limit=${limit}&offset=${offset}`
  );
  return data;
};

const useGetArticles = (limit = 10, offset = 10) =>
  useQuery(["articles", limit, offset], getArticles);

export default useGetArticles;
