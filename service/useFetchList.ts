import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchList } from "./api";

interface Props {
  type: string;
  category: string;
  page: number;
}

export default function useFetchList({ type, category, page }: Props) {
  return useQuery(category, async () => await fetchList(type, category, page));
}
