'use client';
import React, { useState, useEffect } from 'react';
import '../globals.css'

const UsersList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div className="text-red-600">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="text-blue-600">Loading...</div>;
  } else {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-200">
        <div className="max-w-screen-sm w-full">
          <h1 className="text-2xl font-semibold mb-4 text-center">Users List</h1>
          <div className="overflow-auto">
            <table className="table-auto bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-6 font-semibold border-b border-gray-300">Name</th>
                  <th className="py-3 px-6 font-semibold border-b border-gray-300">Username</th>
                  <th className="py-3 px-6 font-semibold border-b border-gray-300">Company</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="py-4 px-6 border-b border-gray-300">{user.name}</td>
                    <td className="py-4 px-6 border-b border-gray-300">{user.username}</td>
                    <td className="py-4 px-6 border-b border-gray-300">{user.company.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default UsersList;
