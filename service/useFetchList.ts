import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchList, fetchSimilarList, searchQuery } from "./api";

interface Props {
  type: string;
  category: string;
  page: number;
}

export default function useFetchList({ type, category, page }: Props) {
  const { id, searchType, keyword, year } = useParams<any>();

  if (category === "similar") {
    //fetch similar Movies/Shows
    return useQuery(
      category,
      async () => await fetchSimilarList(type, id, page)
    );
  } else if (category === "search") {
    //search Movies/Shows based on the keyword
    return useQuery(
      category,
      async () => await searchQuery(searchType, keyword, year, page)
    );
  } else {
    //fetch Movies/Shoes based on the category
    return useQuery(
      category,
      async () => await fetchList(type, category, page)
    );
  }
}
