import React from "react";
import moment from "moment";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const Item = ({
  locationId,
  item: { _id, name, category, addedBy, date, expiration },
}) => {
    const history = useHistory();
    const handleDeleteClick = (id) => {
        axios
          .delete(`/api/items/${id}`)
          .then((response) => {
            history.go(0);
          })
          .catch((err) => {
            console.log(err);
          });
      };

       const currentLocation = useLocation().pathname;
       let showAdminActions = "hide";
       if (currentLocation.includes('admin')) {
           showAdminActions = "";
       }
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>{addedBy}</td>
      <td>{moment(date).format("MM-DD-YYYY")}</td>
      <td>{moment(expiration).format("MM-DD-YYYY")}</td>
      <td className={showAdminActions}>
        <Link
          to={`/api/${locationId}/items/${_id}/edit`}
          className="waves-effect waves-light btn"
        >
          Edit
        </Link>
      </td>
      <td className={showAdminActions}>
        <button
          className="waves-effect waves-light btn"
          onClick={() => {
            handleDeleteClick(_id);
          }}
        > 
          Delete 
        </button>
      </td>
    </tr>
  );
};
export default Item;
