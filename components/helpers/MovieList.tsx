import React, { useState, useEffect } from "react";
import { useParams } from "react-router-native";
import { fetchList, fetchSimilarList, searchQuery } from "../../service/api";

interface Props {
  propType: string;
  fetchType: string;
}

export default function MovieList({ propType, fetchType }: Props) {
  const [list, setList] = useState<any>([]);
  const [fetcher, setFetchType] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const { id, type, string, language } = useParams<any>();

  useEffect(() => {
    if (fetchType === "search") {
      searchQuery(type, string, language, page)
        .then((data: any) => {
          setList([...list, ...data.results]);
          setTotalPages(data.total_pages);
          setFetchType("Results");
          console.log(data);
        })
        .catch((err) => console.log(err));
    } else if (fetchType === "similar") {
      fetchSimilarList(type, id, "en-US", page)
        .then((data: any) => {
          setList([...list, ...data.results]);
          setTotalPages(data.total_pages);
          setFetchType("Similar");
          console.log(data);
        })
        .catch((err) => console.log(err));
    } else {
      fetchList(type, fetchType, "en-US", page)
        .then((data: any) => {
          setList([...list, ...data.results]);
          setTotalPages(data.total_pages);
          switch (fetchType) {
            case "popular":
              setFetchType("Popular");
              break;
            case "now_playing":
              setFetchType("Now Playing");
              break;
            case "top_rated":
              setFetchType("Top Rated");
              break;
            case "upcoming":
              setFetchType("Upcoming");
              break;
            default:
              setFetchType(null);
          }
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return <></>;
}
