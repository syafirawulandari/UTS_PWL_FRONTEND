import React from "react";

const ProductCard = ({
  img_url,
  product_title,
  product_price,
  product_count,
  onClickBuy,
}) => {
  return (
    <>
      <div className="flex flex-col p-[20px] h-[400px] w-[240px] shadow-xl rounded-xl bg-[#3A4D39]">
        <figure className="w-[200px] h-[200px] self-center justify-self-center bg-[#d9d9d9]">
          <img
            src={img_url}
            alt={`${product_title}.png`}
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="flex flex-1 flex-col w-full gap[5px]">
          <h1 className="text-[#ECE3CE] font-medium">{product_title}</h1>
          <div className="flex flex-col gap-[5px] items-end justify-end flex-1">
            <p className="text-[#3689D7] text-lg font-medium justify-self-start self-start">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(product_price)}
              {""}
              /kg
            </p>
            <div className="flex flex-row justify-self-start self-start gap-[5px]">
              <p className="text-[#ECE3CE] text-lg font-medium justify-self-start self-start">
                Tersedia:
              </p>
              <p className="text-[#3689D7] text-lg font-medium">
                {product_count}
                /kg
              </p>
            </div>
            <button
              onClick={onClickBuy}
              className="bg-[#3689D7] text-[#F7F7F7] rounded-md flex items-center justify-center h-[40px] w-full"
            >
              Beli
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
