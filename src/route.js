import React from 'react'
import { BrowserRouter , Route, Routes,Navigate} from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
import PropertyCard from './components/propertyCard';
import  DashboardLayout  from './layout/dashboardLayout';
import propertyTable from './components/PropertyTable'
 const Router = () => {
  return (
    <BrowserRouter>
      <DashboardLayout>
          <Routes>
            <Route  path='/cardView' exact element={<PropertyCard />} />
            <Route  path='/tableView'  element={<propertyTable />} />
          </Routes>
          </DashboardLayout>
    </BrowserRouter>
  )
}
export default Router