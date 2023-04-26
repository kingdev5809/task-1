import React, { useState } from "react";
import { useSelector } from "react-redux";
import UsersItem from "./UsersItem";
import EditModal from "./modals/EditModal";

function Users() {
  const [idx, setIdx] = useState();
  const [visibleModal, setVisibleModal] = useState("d-none");

  const getUsers = useSelector((state) => state.users.user);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Pasword</th>
            <th>Gender</th>
            <th>Brith</th>
          </tr>
          {getUsers.map((item, idx) => (
            <UsersItem
              item={item}
              idx={idx}
              key={item.id}
              setVisibleModal={setVisibleModal}
              setIdx={setIdx}
            />
          ))}
        </tbody>
      </table>
      <EditModal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        idx={idx}
      />
    </div>
  );
}

export default Users;
