import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";

import AddInventoriesModal from "../components/AddInventoriesModal";
import EditInventoriesModal from "../components/EditInventoriesModal";

const inventory = () => {
  const [inventories, setCustomer] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditInventoriesModal, setShowEditInventoriesModal] = useState(false);
  const [editUser, setEditUser] = useState<any>({});
  const [reload, setReload] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();
    const fetchPost = async () => {
      try {
        const response = await Axios.get("/inventories", {
          cancelToken: ourRequest.token,
        });
        setCustomer(response.data);
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
        <AddInventoriesModal setReload={setReload} setShowModal={setShowModal} />
      )}
      {showEditInventoriesModal && (
        <EditInventoriesModal
          editUser={editUser}
          setReload={setReload}
          setShowEditInventoriesModal={setShowEditInventoriesModal}
        />
      )}
      <div className=" w-full h-14 p-8 items-center flex justify-center">
        <h1 className="text-black font-bold text-3xl">
          Inventory and Return Management
        </h1>
      </div>
      <div className="container mx-auto mt-6 mb-6 ">
        <div className=" text-right mb-6">
          <div className=" text-left mb-6">
        <button
              onClick={() => navigate("/")}
              className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
              🏠 Homepage
             </button>
             <button
               onClick={() => navigate("/office")}
               className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
               >
               🏢 Go to Office
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
              <th>Product Code</th>
              <th>Quantity In Stock</th>
              <th>Office Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="h-[20px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-100 dark:opacity-900">
            {inventories.map((inventory: any,) => (
              <>
                <tr key={inventory.productCode}>
                  <td>{inventory.productCode}</td>
                  <td>{inventory.quantityInStock}</td>
                  <td>{inventory.officeCode}</td>
                  <td>
                    <button
                      onClick={async () => {
                        setEditUser({
                          productCode: inventory.productCode,
                          quantityInStock: inventory.quantityInStock,
                          officeCode: inventory.officeCode,
                        });
                        setShowEditInventoriesModal(true);
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
                              `inventories/${inventory.productCode}`
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
              </>
            ))}
          </tbody>
        </table>
        </div>
    </>
  );
};

export default inventory;