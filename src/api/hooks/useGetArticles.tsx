import { useQuery } from "@tanstack/react-query";
import apiClient from "./config";

const getArticles = async (key: string, limit: number, offset: number) => {
  const { data } = await apiClient.get(
    `/api/articles?limit=${limit}&offset=${offset}`
  );
  return data.articles;
};

const useGetArticles = (limit = 10, offset = 10) =>
  useQuery(["articles", limit, offset], getArticles);

export default useGetArticles;
