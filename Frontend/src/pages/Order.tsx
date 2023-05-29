import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import AddOrderModal from "../components/AddOrderModal";
import EditOrderModal from "../components/EditOrderModal";

const orders = () => {
  const [orders, setorderss] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editOrder, setEditOrder] = useState<any>({});
  const [reload, setReload] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();
    const fetchPost = async () => {
      try {
        const response = await Axios.get("/orders", {
          cancelToken: ourRequest.token,
        });
        setorderss(response.data);
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
        <AddOrderModal setReload={setReload} setShowModal={setShowModal} />
      )}
      {showEditModal && (
        <EditOrderModal
          editOrder={editOrder}
          setReload={setReload}
          setShowEditModal={setShowEditModal}
        />
      )}
<div className="w-full h-14 p-8 items-center flex justify-center">
<h1 className="text-black text-yellow-950 font-bold font-sans md:font-serif text-[30px] items-center"
    >Order
  </h1>
</div>
      <div className="container mx-auto mt-6 mb-6 ">
        <div className=" text-right mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
            >
            + Add
          </button>
          <button
            onClick={() => navigate("/")}
            className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
            >
           ↩️ Back
          </button>
        </div>

        <table
          cellPadding={10}
          className=" text-center h-auto w-full border  border-black"
        >
          <thead className="h-[20px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-100 dark:opacity-900">
            <tr>
              <th>Order Number</th>
              <th>Order Date</th>
              <th>Required Date</th>
              <th>Shipped Date</th>
              <th>Status</th>
              <th>Comments</th>
              <th>Customer Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="h-[20px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-100 dark:opacity-900">
            {orders.map((orders: any) => (
              <tr key={orders.orderNumber}>
                <td>{orders.orderNumber}</td>
                <td>{orders.orderDate}</td>
                <td>{orders.requiredDate}</td>
                <td>{orders.shippedDate}</td>
                <td>{orders.status}</td>
                <td>{orders.comments}</td>
                <td>{orders.customerNumber}</td>
                <td>
                  <button
                    onClick={async () => {
                      setEditOrder({
                        orderNumber: orders.orderNumber,
                        orderDate: orders.orderDate,
                        requiredDate: orders.requiredDate,
                        shippedDate: orders.shippedDate,
                        status: orders.status,
                        comments: orders.comments,
                        customerNumber: orders.customerNumber,
                      });
                      setShowEditModal(true);
                    }}
                    className="mr-4 bg-blue-400 hover:bg-blue-600 duration-300 transition-all ease-in-out text-white font-bold py-2 px-4 rounded"
                  >
                    &#9998;
                  </button>
                  <button
                    onClick={async () => {
                      try {
                        var result = confirm("Want to delete?");
                        if (result) {
                          const response = await Axios.delete(
                            `orders/${orders.orderNumber}`
                          );
                          console.log(response.data);
                          setReload((prev) => prev + 1);
                        }
                      } catch (e) {
                        console.log(e);
                      }
                    }}
                    className="bg-red-500 hover:bg-red-100 duration-300 transition-all ease-in-out text-white font-bold py-200 px-4 rounded"
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default orders;
