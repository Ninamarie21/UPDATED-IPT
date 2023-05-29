import { useRef } from "react";
import Modal from "./modal";
import Axios from "axios";

const AddModal = ({ setShowModal, setReload }: any) => {
  const employeeNumberRef = useRef<any>("");
  const lastNameRef = useRef<any>("");
  const firstNameRef = useRef<any>("");
  const extensionRef = useRef<any>("");
  const emailRef = useRef<any>("");
  const officeCodeRef = useRef<any>("");
  const reportsToRef = useRef<any>(null);
  const jobTitleRef = useRef<any>("");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      employeeNumber: Number(employeeNumberRef.current.value),
      lastName: lastNameRef.current.value,
      firstName: firstNameRef.current.value,
      extension: extensionRef.current.value,
      email: emailRef.current.value,
      officeCode: officeCodeRef.current.value,
      reportsTo:
        reportsToRef.current.value == ""
          ? null
          : Number(reportsToRef.current.value),
      jobTitle: jobTitleRef.current.value,
    };

    const response = await Axios.post("/employees/register", data);
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
        Add Employee
      </h1>
      <form onSubmit={submitHandler}>
        <div className="flex gap-8 items-center">
          <div>
            <div className="flex items-center gap-4">
              <div className="mb-4">
                <label
                  htmlFor="employeeNumber"
                  className="font-semibold text-[1.15rem]"
                >
                  Employee Number
                </label>
                <input
                  ref={employeeNumberRef}
                  id="employeeNumber"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="font-semibold text-[1.15rem]"
                >
                  Lastname
                </label>
                <input
                  ref={lastNameRef}
                  id="lastName"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="block mb-4">
                <label
                  htmlFor="firstName"
                  className="font-semibold text-[1.15rem]"
                >
                  Firstname
                </label>
                <input
                  ref={firstNameRef}
                  id="firstName"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
              <div className="mb-[1rem]">
                <label
                  htmlFor="extension"
                  className="font-semibold text-[1.15rem]"
                >
                  Extension
                </label>
                <input
                  ref={extensionRef}
                  id="extension"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="email"
                    className="font-semibold text-[1.15rem]"
                  >
                    Email
                  </label>
                  <input
                    ref={emailRef}
                    id="email"
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
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="reportsTo"
                    className="font-semibold text-[1.15rem]"
                  >
                    Reports To
                  </label>
                  <input
                    ref={reportsToRef}
                    id="reportsTo"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
              </div>
              <div className="block mb-4">
                <label
                  htmlFor="jobTitle"
                  className="font-semibold text-[1.15rem]"
                >
                  Job Title
                </label>
                <select
                  ref={jobTitleRef}
                  name="jobTitle"
                  id="jobTitle"
                  className="w-[18rem] h-[2.5rem] block mt-2 px-4 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 outline-none"
                >
                  <option value="President">Admin</option>
                  <option value="President">President</option>
                  <option value="VP Sales">VP Sales</option>
                  <option value="VP Marketing">VP Marketing</option>
                  <option value="Sales Rep">Sales Rep</option>
                </select>
              </div>
            </div>
            <div className="text-center">
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

export default AddModal;
