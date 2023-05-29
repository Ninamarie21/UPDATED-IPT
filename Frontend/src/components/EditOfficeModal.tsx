import { useRef } from "react";
import Modal from "./modal";
import Axios from "axios";

const EditOfficeModal = ({ setShowEditModal, setReload, editOffice }: any) => {
  const officeCodeRef = useRef<any>("");
  const cityRef = useRef<any>("");
  const phoneRef = useRef<any>("");
  const addressLine1Ref = useRef<any>("");
  const addressLine2Ref = useRef<any>(null);
  const stateRef = useRef<any>(null);
  const countryRef = useRef<any>("");
  const postalCodeRef = useRef<any>("");
  const territoryRef = useRef<any>("");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      officeCode: officeCodeRef.current.value,
      city: cityRef.current.value,
      phone: phoneRef.current.value,
      addressLine1: addressLine1Ref.current.value,
      addressLine2:
        addressLine2Ref.current.value == ""
          ? null
          : addressLine2Ref.current.value,
      state: stateRef.current.value == "" ? null : stateRef.current.value,
      country: countryRef.current.value,
      postalCode: postalCodeRef.current.value,
      territory: territoryRef.current.value,
    };

    const response = await Axios.put(`/offices/${editOffice.officeCode}`, data);
    setReload((prev: any) => prev + 1);
    setShowEditModal(false);
    console.log(response.data);
  };

  return (
    <Modal
      onClick={() => setShowEditModal(false)}
      className="flex flex-col justify-center items-center bg-white"
    >
      <h1 className="font-bold text-[2rem] mb-[1.5rem] text-blue-500">
        Edit Office
      </h1>
      <form onSubmit={submitHandler}>
        <div className="flex gap-8 items-center">
          <div>
            <div className="flex items-center gap-4">
              <div className="mb-4">
                <label
                  htmlFor="officeCode"
                  className="font-bold text-[5.15rem]"
                >
                  Office Code
                </label>
                <input
                  ref={officeCodeRef}
                  defaultValue={editOffice.officeCode}
                  id="officeCode"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="font-bold text-[1.15rem]">
                  City
                </label>
                <input
                  ref={cityRef}
                  defaultValue={editOffice.city}
                  id="city"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="block mb-4">
                <label htmlFor="phone" className="font-bold text-[1.15rem]">
                  Phone
                </label>
                <input
                  ref={phoneRef}
                  defaultValue={editOffice.phone}
                  id="phone"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="mb-[1rem]">
                <label
                  htmlFor="addressLine1"
                  className="font-bold text-[1.15rem]"
                >
                  Address Line 1
                </label>
                <input
                  ref={addressLine1Ref}
                  defaultValue={editOffice.addressLine1}
                  id="addressLine1"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="addressLine2"
                    className="font-bold text-[1.15rem]"
                  >
                    Address Line 2
                  </label>
                  <input
                    ref={addressLine2Ref}
                    defaultValue={editOffice.addressLine2}
                    id="addressLine2"
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
                    htmlFor="state"
                    className="font-bold text-[1.15rem]"
                  >
                    State
                  </label>
                  <input
                    ref={stateRef}
                    defaultValue={editOffice.state}
                    id="state"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="country"
                    className="font-bold text-[1.15rem]"
                  >
                    Country
                  </label>
                  <input
                    ref={countryRef}
                    defaultValue={editOffice.country}
                    id="country"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
              </div>
              <div className="block mb-4">
                <label
                  htmlFor="postalCode"
                  className="font-bold text-[1.15rem]"
                >
                  Postal Code
                </label>
                <input
                  ref={postalCodeRef}
                  defaultValue={editOffice.postalCode}
                  id="postalCode"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="block mb-4">
                <label
                  htmlFor="TERRITORY"
                  className="font-bold text-[1.15rem]"
                >
                  Territory
                </label>
                <input
                  ref={territoryRef}
                  defaultValue={editOffice.territory}
                  id="TERRITORY"
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
                Update Office
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EditOfficeModal;
