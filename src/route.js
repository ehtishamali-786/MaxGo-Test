import React from 'react'
import { BrowserRouter , Route, Routes,Navigate} from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
import PropertyCard from './components/propertyCard';
import  DashboardLayout  from './layout/dashboardLayout';
 const Router = () => {
  return (
    <BrowserRouter>
      <DashboardLayout>
          <Routes>
            <Route  path='/' exact element={<PropertyCard />} />
          </Routes>
          </DashboardLayout>
    </BrowserRouter>
  )
}
export default Router