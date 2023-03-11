import React, { useState } from "react";

const users = [
  { id: 1, name: "Rakesh Dash" },
  { id: 2, name: "vankatesh redy" },
  { id: 3, name: "Shuresh botla" },
  { id: 4, name: "jagan sing" },
  { id: 5, name: "Santosh mehta" },
  { id: 6, name: "Sarojni nayudu" },
  { id: 7, name: "David" },
  { id: 8, name: "Aman mehta sing" },
  { id: 9, name: "Tanesh kumar yadav" },
  { id: 10, name: "Omprakash yadav" },
  { id: 11, name: "Omkar shing yadav" },
  { id: 12, name: "jagdish sinha yadav" },
];

function Profile() {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  // Calculate the index of the first and last users to display
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  // Slice the array of users to display only the users for the current page
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div style={{paddingLeft:"500px",marginTop:"50px"}}>
      <ul>
        {currentUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div  style={{paddingLeft:"40px",paddingTop:"400px"}}>
        {Array.from({ length: totalPages }).map(( _, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            disabled={i + 1 === currentPage}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Profile;
