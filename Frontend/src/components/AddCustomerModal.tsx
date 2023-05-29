import { useRef } from "react";
import Modal from "./modal";
import Axios from "axios";

const AddCustomerModal = ({ setShowModal, setReload }: any) => {
  const customerNumber = useRef<any>("");
  const customerName = useRef<any>("");
  const contactLastNameRef = useRef<any>("");
  const contactFirstNameRef = useRef<any>("");
  const phoneRef = useRef<any>("");
  const addressLine1Ref = useRef<any>("");
  const addressLine2Ref = useRef<any>(null);
  const cityRef = useRef<any>("");
  const stateRef = useRef<any>(null);
  const postalCodeRef = useRef<any>(null);
  const countryRef = useRef<any>("");
  const salesRepEmployeeNumberRef = useRef<any>(null);
  const creditLimitRef = useRef<any>(null);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      customerNumber: customerNumber.current.value,
      customerName: customerName.current.value,
      contactLastName: contactLastNameRef.current.value,
      contactFirstName: contactFirstNameRef.current.value,
      phone: phoneRef.current.value,
      addressLine1: addressLine1Ref.current.value,
      addressLine2:
        addressLine2Ref.current.value == ""
          ? null
          : addressLine2Ref.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value == "" ? null : stateRef.current.value,
      postalCode:
        postalCodeRef.current.value == "" ? null : postalCodeRef.current.value,
      country: countryRef.current.value,
      salesRepEmployeeNumber:
        salesRepEmployeeNumberRef.current.value == ""
          ? null
          : salesRepEmployeeNumberRef.current.value,
      creditLimit:
        creditLimitRef.current.value == ""
          ? null
          : creditLimitRef.current.value,
    };

    const response = await Axios.post("/customers/create", data);
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
        Add Customer
      </h1>
      <form onSubmit={submitHandler}>
        <div className="flex gap-8 items-center">
          <div>
            <div className="flex items-center gap-4">
              <div className="mb-4">
                <label
                  htmlFor="customerNumber"
                  className="font-semibold text-[1.15rem]"
                >
                  Customer Number
                </label>
                <input
                  ref={customerNumber}
                  id="customerNumber"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="customerName"
                  className="font-semibold text-[1.15rem]"
                >
                  Customer Name
                </label>
                <input
                  ref={customerName}
                  id="customerName"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="block mb-4">
                <label
                  htmlFor="contactLastName"
                  className="font-semibold text-[1.15rem]"
                >
                  Contact Last Name
                </label>
                <input
                  ref={contactLastNameRef}
                  id="contactLastName"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="mb-[1rem]">
                <label
                  htmlFor="contactFirstName"
                  className="font-semibold text-[1.15rem]"
                >
                  Contact First Name
                </label>
                <input
                  ref={contactFirstNameRef}
                  id="contactFirstName"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="phone"
                    className="font-semibold text-[1.15rem]"
                  >
                    Phone
                  </label>
                  <input
                    ref={phoneRef}
                    id="phone"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="addressLine1"
                    className="font-semibold text-[1.15rem]"
                  >
                    Address Line 1
                  </label>
                  <input
                    ref={addressLine1Ref}
                    id="addressLine1"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="addressLine2"
                    className="font-semibold text-[1.15rem]"
                  >
                    Address Line 2
                  </label>
                  <input
                    ref={addressLine2Ref}
                    id="addressLine2"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
              </div>
              <div className="block mb-4">
                <label htmlFor="city" className="font-semibold text-[1.15rem]">
                  City
                </label>
                <input
                  ref={cityRef}
                  id="city"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="block mb-4">
                <label htmlFor="state" className="font-semibold text-[1.15rem]">
                  State
                </label>
                <input
                  ref={stateRef}
                  id="postalCode"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="block mb-4">
                <label htmlFor="state" className="font-semibold text-[1.15rem]">
                  Postal Code
                </label>
                <input
                  ref={postalCodeRef}
                  id="postalCode"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              </div>
        </div>
              <div className="block mb-4">
                <label
                  htmlFor="country"
                  className="font-semibold text-[1.15rem]"
                >
                  country
                </label>
                <input
                  ref={countryRef}
                  id="country"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="block mb-4">
                <label
                  htmlFor="salesRepEmployeeNumber"
                  className="font-semibold text-[1.15rem]"
                >
                  Employee Number
                </label>
                <input
                  ref={salesRepEmployeeNumberRef}
                  id="salesRepEmployeeNumber"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="block mb-4">
                <label
                  htmlFor="creditLimit"
                  className="font-semibold text-[1.15rem]"
                >
                  Credit Limit
                </label>
                <input
                  ref={creditLimitRef}
                  id="creditLimit"
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
                Add Customer
              </button>
            </div>
      </form>
    </Modal>
  );
};

export default AddCustomerModal;
