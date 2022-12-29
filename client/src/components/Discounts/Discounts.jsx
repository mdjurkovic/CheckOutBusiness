import { useRef, useState } from "react";
import { put, useFetch } from "../../hooks";
import { useNavigate } from "react-router-dom";

const Discounts = () => {
  const { response, error, isLoading } = useFetch("discounts");
  const [results, setResults] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const filterResults = () => {
    setResults(
      response.filter((result) => result.code.includes(inputRef.current.value))
    );
  };

  const handleValidate = (id) => {
    if (put(`discounts/${id}`)) {
      const newResults = [...results];
      newResults[id]["validate"] = true;
      setResults(newResults);
    }
  };

  const logout = () => {
    navigate("/");
  };

  const table = () => {
    if (isLoading)
      return (
        <tbody>
          <tr>
            <td>"Loading..."</td>
          </tr>
        </tbody>
      );
    return (
      <tbody>
        {!isLoading &&
          !error &&
          results?.map((disc, id) => (
            <tr key={id} style={{ background: `${disc.validate && "green"}` }}>
              <td>{disc.code}</td>
              <td>{disc.discount}</td>
              <td>
                <button onClick={() => handleValidate(id)}>validate</button>
              </td>
            </tr>
          ))}
      </tbody>
    );
  };

  return (
    <div id="discount" className="justify-align square">
      <input ref={inputRef} placeholder="Search" />
      <button style={{ margin: 15 }} onClick={filterResults}>
        Search
      </button>
      <button style={{ margin: 15 }} onClick={logout}>
        Logout
      </button>
      <table>{table()}</table>
    </div>
  );
};

export default Discounts;
