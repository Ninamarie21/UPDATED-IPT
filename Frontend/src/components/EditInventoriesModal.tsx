import { useRef } from "react";

import Modal from "./modal";
import Axios from "axios";

const EditInventoriesModal = ({setReload, setShowEditInventoriesModal, editUser }: any) => {
    const productCodeRef = useRef<any>(""); 
    const quantityInStockRef = useRef<any>("");
    const officeCodeRef = useRef<any>("");
  
    const submitHandler = async (e: any) => {
        e.preventDefault();
        const data = { 
        productCode: productCodeRef.current.value,
        quantityInStock: Number(quantityInStockRef.current.value),
        officeCode: officeCodeRef.current.value,
    };

    try{
        const response = await Axios.put(
      `/inventories/${editUser.productCode}`,
      data
    );
    console.log(response.data);
    setReload((prev: any) => prev + 1);
  } catch (e) {
    console.log(e);
  }
  setShowEditInventoriesModal(false);
};
return (
    <Modal
      onClick={() => setShowEditInventoriesModal(false)}
      className="flex flex-col justify-center items-center bg-white"
    >
      <h1 className="font-bold text-[2rem] mb-[1.5rem] text-blue-500">
        Edit Inventory/Return
      </h1>
      <form onSubmit={submitHandler}>
      <div className="flex items-center gap-4">
              <div className="mb-4">
                <label
                  htmlFor="productCode"
                  className="font-semibold text-[1.15rem]"
                >
                  Product Code
                </label>
                <input
                  ref={productCodeRef}
                  defaultValue={editUser.productCode}
                  id="productCode"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="quantityInStock"
                    className="font-semibold text-[1.15rem]"
                  >
                    Quantity In Stock
                  </label>
                  <input
                    ref={quantityInStockRef}
                    defaultValue={editUser.quantityInStock}
                    id="To"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
                <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="officeCode"
                    className="font-semibold text-[1.15rem]"
                  >
                    Office Code
                  </label>
                  <input
                    ref={officeCodeRef}
                    id="officeCode"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
              </div>
              <div className="text-center">
              <button
                type="submit"
                className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
                >
                Submit
              </button>
            </div>
            </div>
            </div>
      </form>
    </Modal>
  );
};

export default EditInventoriesModal;