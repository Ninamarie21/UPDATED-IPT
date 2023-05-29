import { useRef } from "react";
import Modal from "./modal";
import Axios from "axios";

const AddInventories = ({ setShowModal, setReload }: any) => {
  const productCode = useRef<any>("");
  const quantityInStockRef = useRef<any>("");
  const officeCodeRef = useRef<any>("");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      productCode: productCode.current.value,
      quantityInStock: Number(quantityInStockRef.current.value),
      officeCode: officeCodeRef.current.value,
    };

    const response = await Axios.post("/inventories/create", data);
    setReload((prev: any) => prev + 1);
    setShowModal(false);
    console.log(response.data);
  };

  return (
  <Modal
      onClick={() => setShowModal(false)}
      className="flex flex-col justify-center items-center bg-white"
    >
            <h1 className="font-bold text-[2rem] mb-[1.5rem] text-blue-500">
        Add Inventory
      </h1>
      <form onSubmit={submitHandler}>
        <div className="flex gap-8 items-center">
          <div>
            <div className="flex items-center gap-4">
             <div className="mb-4">
               <label
                  htmlFor="productCode"
                  className="font-semibold text-[1.15rem]"
                >
                  Product Code
               </label>
                <input
                  ref={productCode}
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
                    id="quantityInStock"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
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
              <div> 
              </div>
               </div>
              </div>

                <button
                   type="submit"
                   className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
            >
                  Add Employee
                </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddInventories;