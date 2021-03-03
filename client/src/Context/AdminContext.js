import React, { createContext, useContext } from 'react';
const AdminContext = createContext({
    _id: "",
    email: ""
});
export default AdminContext;