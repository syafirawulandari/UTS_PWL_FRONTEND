import React, { useState } from "react";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

const Sell = () => {
  const [formData, setFormData] = useState({
    pembeli_nama: "",
    pembeli_kontak: "",
    pembeli_alamat: "",
    pembeli_pesan: "",
  });

  const { pembeli_nama, pembeli_kontak, pembeli_alamat, pembeli_pesan } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = () => {
    toast.error("Fitur ini belum tersedia");
    // e.preventDefault();
    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };

    //   const body = JSON.stringify(formData);

    //   const res = await axios.post("/api/sell", body, config);

    //   console.log(res.data);
    // } catch (err) {
    //   console.error(err.response.data);
    // }
  };

  return (
    <>
      <main className="flex flex-col min-h-screen w-full">
        <div className="px-8 pt-6 flex flex-col">
          <h1 className="text-center text-3xl font-bold">Pre Order Sekarang</h1>
        </div>
        <div className="flex justify-center items-center h-screen">
          <form onSubmit={""} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="pembeli_nama"
                >
                  Nama Pembeli
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#F7F7F7]"
                  id="pembeli_nama"
                  type="text"
                  placeholder="Masukkan nama pembeli"
                  name="pembeli_nama"
                  value={pembeli_nama}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="pembeli_kontak"
                >
                  Kontak Pembeli
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#F7F7F7]"
                  id="pembeli_kontak"
                  type="text"
                  placeholder="Masukkan kontak pembeli"
                  name="pembeli_kontak"
                  value={pembeli_kontak}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="pembeli_alamat"
                >
                  Alamat Pembeli
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#F7F7F7]"
                  id="pembeli_alamat"
                  type="text"
                  placeholder="Masukkan alamat pembeli"
                  name="pembeli_alamat"
                  value={pembeli_alamat}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="pembeli_pesan"
                >
                  Pesan Pembeli
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#F7F7F7]"
                  id="pembeli_pesan"
                  placeholder="Masukkan pesan pembeli"
                  name="pembeli_pesan"
                  value={pembeli_pesan}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Sell;
