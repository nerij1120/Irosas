
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ContactsPage from './components/ContactsPage';
import MenuPage from './components/MenuPage';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import Admin from './components/admin/Admin';
import Revenue from './components/admin/Revenue';
import ManageAccountContainer from './components/admin/ManageAccountContainer';
import ManageCategoryContainer from './components/admin/ManageCategoryContainer';
import ManageDrinkContainer from './components/admin/ManageDrinkContainer';
import CustomerFeedbacks from './components/admin/CustomerFeedback';
import FeedbackDetail from './components/admin/FeedbackDetail';
import NotFound from './components/NotFound';
import RegisterPage from "./components/RegisterPage";
import ProfilePage from './components/admin/ProfilePage';
import RequireAuth from './components/admin/RequireAuth';
import Unauthorized from './components/Unauthorized';



function App() {
  return (
    <div className='w-100 full-height' style={{ backgroundColor: "#F8FAFB" }}>
      <Routes>
        {/* Public Routes */}
        <Route exact path='/' element={<Home/>}>
          <Route index element={<HomePage/>}/>
          <Route path="contacts" element={<ContactsPage/>}/>
          <Route path="menu" element={<MenuPage/>}/>
          <Route path="category" element={<CategoryPage/>}/>
          <Route path='cart' element={<CartPage/>}/>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/unauthorized' element={<Unauthorized/>}/>

        {/* Protect These Routes */}
        <Route element={<RequireAuth allowedRoles={[1]}/>}>
          <Route exact path="/admin" element={<Admin/>}>
            <Route index element={<ManageAccountContainer/>}/>
            <Route path="drinks" element={<ManageDrinkContainer/>}/>
            <Route path="categories" element={<ManageCategoryContainer/>}/>
            <Route path="revenue" element={<Revenue/>}/>
            <Route path='feedbacks' element={<CustomerFeedbacks/>}/>
            <Route path="feedbacks/:id" element={<FeedbackDetail/>}/>
          </Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={[1,2,3]} />}>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Route>

        {/* Not Found */}
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;