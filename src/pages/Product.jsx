import React from "react";
import Footer from "../components/Footer";
import useDaftarProduk from "../hooks/useDaftarProduk";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const { data, isLoading, error } = useDaftarProduk();
  return (
    <>
      <main className="flex flex-col min-h-screen w-full">
        <div>
          <h1 className="text-[#323643] text-4xl font-bold text-center py-[20px]">
            Daftar Produk
          </h1>
        </div>
        <div className="w-full flex flex-wrap p-[20px] gap-[35px]">
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
          {data?.map((item, index) => {
            return (
              <ProductCard
                product_title={item.nama}
                product_price={item.harga}
                product_count={item.jumlah}
                img_url={item.gambar}
                key={index}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Product;
