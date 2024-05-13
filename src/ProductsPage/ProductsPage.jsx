import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ProductsPage = ({ data }) => {
  const [companies, setCompanies] = useState(data);
  const [searchParams, setSearchParams] = useSearchParams();

  // Function to update the displayed companies based on query parameters
  const updateCompanies = (params) => {
    const filteredCompanies = data.filter((item) => {
      const { companyName } = item;
      if (params.get("name")) {
        return companyName.toLowerCase().includes(params.get("name"));
      }
      return true;
    });
    setCompanies(filteredCompanies);
  };

  useEffect(() => {
    // When the component mounts or query parameters change, update the displayed companies
    updateCompanies(searchParams);
  }, [searchParams, data]);

  // Function to update query parameters based on user input
  const handleChange = (e) => {
    const newName = e.target.value;
    setSearchParams({ name: newName });
  };

  return (
    <>
      <input
        type="text"
        value={searchParams.get("name") || ""}
        onChange={handleChange}
      />
      <ul className="companyList">
        {companies.map(({ id, companyName, companyDescription }) => (
          <li key={id}>
            <h2>{companyName}</h2>
            <p>{companyDescription}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
