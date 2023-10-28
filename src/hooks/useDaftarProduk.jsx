import axios from "axios";
import useSWR from "swr";

const useDaftarProduk = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSWR("/api/produk", fetcher);
  return { data, isLoading, error };
};

export default useDaftarProduk;
