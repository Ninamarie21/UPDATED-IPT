import { useRef } from "react";
import Modal from "./modal";
import Axios from "axios";


const AddOrderModal = ({ setShowModal, setReload }: any) => {
  const orderNumberRef = useRef<any>("");
  const orderDateRef = useRef<any>("");
  const requiredDateRef = useRef<any>("");
  const shippedDateRef = useRef<any>(null);
  const statusRef = useRef<any>("");
  const commentsRef = useRef<any>(null);
  const customerNumberRef = useRef<any>("");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      orderNumber: Number(orderNumberRef.current.value),
      orderDate: orderDateRef.current.value,
      requiredDate: requiredDateRef.current.value,
      shippedDate: shippedDateRef.current.value,
      status: statusRef.current.value,
      comments:
        commentsRef.current.value == "" ? null : commentsRef.current.value,
      customerNumber: customerNumberRef.current.value,
    };

    const response = await Axios.post("/orders/create", data);
    setReload((prev: any) => prev + 1);
    setShowModal(false);
    console.log(data);
    console.log(response.data);
  };

  return (
    <Modal
      onClick={() => setShowModal(false)}
      className="flex flex-col justify-center items-center bg-white"
    >
      <h1 className="font-bold text-[2rem] mb-[1.5rem] text-blue-500">
        Add Order
      </h1>
      <form onSubmit={submitHandler}>
        <div className="flex gap-8 items-center">
          <div>
            <div className="flex items-center gap-4">
              <div className="mb-4">
                <label
                  htmlFor="orderNumber"
                  className="font-semibold text-[1.15rem]"
                >
                  Order Number
                </label>
                <input
                  ref={orderNumberRef}
                  id="orderNumber"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="font-semibold text-[1.15rem]"
                >
                  Order Date
                </label>
                <input
                  ref={orderDateRef}
                  id="lastName"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="block mb-4">
                <label
                  htmlFor="requiredDate"
                  className="font-semibold text-[1.15rem]"
                >
                  Required Date
                </label>
                <input
                  ref={requiredDateRef}
                  id="requiredDate"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="mb-[1rem]">
                <label
                  htmlFor="shippedDate"
                  className="font-semibold text-[1.15rem]"
                >
                  Shipped Date
                </label>
                <input
                  ref={shippedDateRef}
                  id="shippedDate"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="status"
                    className="font-semibold text-[1.15rem]"
                  >
                    Status
                  </label>
                  <input
                    ref={statusRef}
                    id="status"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="comments"
                    className="font-semibold text-[1.15rem]"
                  >
                    Comments
                  </label>
                  <input
                    ref={commentsRef}
                    id="comments"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="customerNumber"
                    className="font-semibold text-[1.15rem]"
                  >
                    Customer Number
                  </label>
                  <input
                    ref={customerNumberRef}
                    id="customerNumber"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
                >
                Add Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddOrderModal;
