import React, { useState, useEffect } from "react";
import { useParams } from "react-router-native";
import { fetchList, fetchSimilarList, searchQuery } from "../../service/api";

interface Props {
  propType: string;
  fetchType: string;
}

export default function MovieList({ propType, fetchType }: Props) {
  const [page, setPage] = useState<number>(1);

  return <></>;
}
