import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Table = ({ dataToLoad }) => {
  const [dataFromDB, setDataFromDB] = useState([]);

  useEffect(() => {
    const getData = async () => {
      console.log("Datatoload: ", dataToLoad);
      const usersList = await fetchData();
      setDataFromDB(usersList);
    };

    getData();
  }, []);

  // Fetch all data from DB, depending on what page needs to be loaded
  const fetchData = async () => {
    const res = await fetch(`http://localhost:9090/api/${dataToLoad}`);
    const data = await res.json();

    console.log("Data: ", data);

    return data;
  };

  return (
    <div>
      <h3>{dataToLoad === "users" ? "Users Management" : "Pets Management"}</h3>
      <table>
        <thead>
          <tr>
            {dataFromDB.forEach((title) => {
              <th>{title.name}</th>;
              console.log("Title: ", title);
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
};

Table.propTypes = {
  dataToLoad: PropTypes.string,
};

export default Table;
