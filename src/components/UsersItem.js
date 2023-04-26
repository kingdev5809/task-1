import moment from "moment/moment";
import React from "react";
import { useDispatch } from "react-redux";
import { userDeleted, userUpdating } from "../Redux/userSlice";

function UsersItem({
  item,
  idx,
  setVisibleModal,
  setIdx,
}) {
  const dispatch = useDispatch();
  const handleSetModal = () => {
    setIdx(idx);
    dispatch(userUpdating(item));
    setVisibleModal("d-block");
  };
  return (
    <tr key={item.id}>
      <td data-cell="name">{item.name}</td>
      <td data-cell="poles">{item.email}</td>
      <td data-cell="podiums">{item.password}</td>
      <td data-cell="podiums">{item.gender}</td>
      <td data-cell="podiums">{moment(item.brith).format("ll")}</td>
      <td onClick={handleSetModal} className="edit">
        Edit
      </td>
      <td onClick={() => dispatch(userDeleted(item.id))} className="delete">
        Delete
      </td>
    </tr>
  );
}

export default UsersItem;
