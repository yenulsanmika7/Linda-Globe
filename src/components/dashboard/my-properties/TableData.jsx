import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProperty } from "@/actions/propertyActions"
import {  toast } from 'react-toastify';
import { allProperties } from "@/actions/propertyActions";
import 'react-toastify/dist/ReactToastify.css';

const API_URL = import.meta.env.VITE_NODE_BACKEND_URL; 

const TableData = () => {
  const { properties } = useSelector((state) => state.allProperties); 
  const dispatch = useDispatch();
  
  const handleDeleteSubmit = (itemId) => {
    alert('Are you sure about this action?');
    deleteProperty(itemId, dispatch)
      .then(() => {  
        toast.success('Property deleted succesfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });       
      })
      .catch(() => {
        toast.error('Server error!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
  }

  useEffect(() => {
    dispatch(allProperties);
  }, [dispatch]);

  let theadConent = [
    "Listing Title",
    "Date published",
    "Status",
    "View",
    "Action",
  ];
  let tbodyContent = properties?.slice(0, 4)?.map((item) => (
    <tr key={item.id}>
      <td scope="row">
        <div className="feat_property list favorite_page style2">
          <div className="thumb">
            <img
         
              className="img-whp cover"
              src={`${API_URL}${item.imageUrls[0]}`}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">For Rent</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <h4>{item.title}</h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.location.address}
              </p>
              <a className="fp_price text-thm" href="#">
                Rs.{item.price}
                <small>/mo</small>
              </a>
            </div>
          </div>
        </div>
      </td>
      {/* End td */}

      <td>{item.createdAt.slice(0, 10)}</td>
      {/* End td */}

      <td>
        <span className="status_tag badge">Active</span>
      </td>
      {/* End td */}

      <td>2,345</td>
      {/* End td */}

      <td>
        <ul className="view_edit_delete_list mb0">
          <li
            className="list-inline-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Edit"
          >
            <a href="#">
              <span className="flaticon-edit"></span>
            </a>
          </li>
          {/* End li */}

          <li
            className="list-inline-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Delete"
            onClick={() => handleDeleteSubmit(item._id)}
          >
            <a href="#">
              <span className="flaticon-garbage"></span>
            </a>
          </li>
        </ul>
      </td>
      {/* End td */}
    </tr>
  ));

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            {theadConent.map((value, i) => (
              <th scope="col" key={i}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        {/* End theaad */}

        <tbody>{tbodyContent}</tbody>
      </table>
    </>
  );
};

export default TableData;
