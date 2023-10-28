import axios from "axios";
import useSWR from "swr";

const useDetailProduk = (params) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSWR(`/api/produk/${params}`, fetcher);
  return { data, isLoading, error };
};

export default useDetailProduk;
