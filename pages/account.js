import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { API_URL } from "../utils/urls";
import Link from "next/link";
import AuthContext from "../context/AuthContext";

const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      if (user) {
        try {
          const token = await getToken();
          const order_res = await fetch(`${API_URL}/orders`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await order_res.json();
          setOrders(data);
        } catch (error) {
          setOrders([]);
        }
      }
      setLoading(false);
    };
    fetchOrders();
  }, [user]);

  return { orders, loading };
};

export default function Account() {
  const { user, logoutUser, getToken } = useContext(AuthContext);

  // custom hook to retrieve orders
  const { orders, loading } = useOrders(user, getToken);

  if (!user) {
    return (
      <div>
        <p>Please Login or Register before accessing this page</p>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Account page</title>
        <meta
          name="description"
          content="The account page, view your orders and logout"
        />
      </Head>

      <h2>Account page</h2>
      <h3>Your orders</h3>
      {loading && <p>Orders are Loading...</p>}
      {orders.map((order) => (
        <div key={order.id}>
          {/* {order.product.name} ${order.total} {order.status} */}
          {new Date(order.created_at).toLocaleDateString("en-EN")}{" "}
          {order.product.name} ${order.total} {order.status}
        </div>
      ))}
      <hr />
      <p>Logged in as: {user.email}</p>
      <a href="#" onClick={logoutUser}>
        Logout
      </a>
    </div>
  );
}
