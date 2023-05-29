import { useRef } from "react";
import Modal from "./modal";
import Axios from "axios";

const AddProductLineModal = ({ setShowModal, setReload }: any) => {
  const productLineRef = useRef<any>("");
  const textDescriptionRef = useRef<any>("");
  const htmlDescriptionRef = useRef<any>(null);
  const imageRef = useRef<any>(null);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      productLine: productLineRef.current.value,
      textDescription: textDescriptionRef.current.value,
      htmlDescription:
        htmlDescriptionRef.current.value == ""
          ? null
          : htmlDescriptionRef.current.value,
      image: imageRef.current.value == "" ? null : imageRef.current.value,
    };

    const response = await Axios.post("/productlines/create", data);
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
        Add Product Line
      </h1>
      <form onSubmit={submitHandler}>
        <div className="flex gap-8 items-center">
          <div>
            <div className="flex items-center gap-4">
              <div className="mb-4">
                <label
                  htmlFor="productLine"
                  className="font-semibold text-[1.15rem]"
                >
                  Product Line
                </label>
                <input
                  ref={productLineRef}
                  id="productLine"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="textDescription"
                  className="font-semibold text-[1.15rem]"
                >
                  Text Description
                </label>
                <input
                  ref={textDescriptionRef}
                  id="textDescription"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="block mb-4">
                <label
                  htmlFor="htmlDescription"
                  className="font-semibold text-[1.15rem]"
                >
                  Html Description
                </label>
                <input
                  ref={htmlDescriptionRef}
                  id="htmlDescription"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="mb-[1rem]">
                <label htmlFor="image" className="font-semibold text-[1.15rem]">
                  Image
                </label>
                <input
                  ref={imageRef}
                  id="image"
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
                Add Product Line
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddProductLineModal;
