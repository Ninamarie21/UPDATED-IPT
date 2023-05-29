import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import AddProductModal from "../components/AddProductModal";
import EditProductModal from "../components/EditProductModal";

const Product = () => {
  const [products, setProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState<any>({});
  const [reload, setReload] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();
    const fetchPost = async () => {
      try {
        const response = await Axios.get("/products", {
          cancelToken: ourRequest.token,
        });
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
    return () => {
      ourRequest.cancel();
    };
  }, [reload]);

  return (
    <>
      {showModal && (
        <AddProductModal setReload={setReload} setShowModal={setShowModal} />
      )}
      {showEditModal && (
        <EditProductModal
          editProduct={editProduct}
          setReload={setReload}
          setShowEditModal={setShowEditModal}
        />
      )}
      <div className="w-full h-14 p-8 items-center flex justify-center">
        <h1 className="text-black font-bold text-2xl">Product</h1>
      </div>
      <div className="container md:mx-auto mt-8 mb-6">
        <div className=" text-right mb-6">
        <div className=" text-left mb-6">
            <button
              onClick={() => navigate("/")}
              className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">

              🏠 Homepage
              </button>
              <button
                onClick={() => navigate("/productline")}
                className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
                >
                🏢 Go to Product Line
            </button>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
            >
            + Add
          </button>

        </div>
        <table
          cellPadding={10}
          className=" text-center h-auto w-full border  border-black"
        >
          <thead className="h-[20px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-100 dark:opacity-900">
            <tr>
              <th className="py-2 px-4">Product Code</th>
              <th className="py-2 px-4">Product Name </th>
              <th className="py-2 px-4">Product Line</th>
              <th className="py-2 px-4">Product Scale</th>
              <th className="py-2 px-4">Product Vendor</th>
              <th className="py-2 px-4">Product Description </th>
              <th className="py-2 px-4">Quantity In Stock</th>
              <th className="py-2 px-4">Buy Price</th>
              <th className="py-2 px-4">MSRP</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="h-[20px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-100 dark:opacity-900">
            {products.map((product: any, index: number) => (
              <>
                <tr key={product.productCode}>
                  <td>{product.productCode}</td>
                  <td>{product.productName}</td>
                  <td>{product.productLine}</td>
                  <td>{product.productScale}</td>
                  <td>{product.productVendor}</td>
                  <td>{product.productDescription}</td>
                  <td>{product.quantityInStock}</td>
                  <td>{product.buyPrice}</td>
                  <td>{product.MSRP}</td>
                  <td>
                    <button
                      onClick={async () => {
                        setEditProduct({
                          productCode: product.productCode,
                          productName: product.productName,
                          productLine: product.productLine,
                          productScale: product.productScale,
                          productVendor: product.productVendor,
                          productDescription: product.productDescription,
                          quantityInStock: product.quantityInStock,
                          buyPrice: product.buyPrice,
                          MSRP: product.MSRP,
                        });
                        setShowEditModal(true);
                      }}
                      className="m-6 bg-blue-400 hover:bg-blue-600 duration-300 transition-all ease-in-out text-white font-bold py-2 px-4 rounded"
                    >
                      &#9998;
                    </button>
                    <button
                      onClick={async () => {
                        try {
                          var result = confirm("Want to delete?");
                          if (result) {
                            const response = await Axios.delete(
                              `products/${product.productCode}`
                            );
                            console.log(response.data);
                            setReload((prev) => prev + 1);
                          }
                        } catch (e) {
                          console.log(e);
                        }
                      }}
                      className="bg-red-400 hover:bg-red-600 duration-300 transition-all ease-in-out text-white font-bold py-2 px-4 rounded"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
                {index !== products.length - 1 && (
                  <tr className="spacing-row">
                    <td colSpan={11} className="h-4">
                      <hr className="border-gray-400" />
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
