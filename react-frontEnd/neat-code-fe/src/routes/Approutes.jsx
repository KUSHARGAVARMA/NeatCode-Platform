import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Signup from '../pages/sign-up/Signup';

const AppRoutes = () => {

    return (
        <>
          <Router>
            {/* <Signup/> */}
            <Routes>
              <Route path="/" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
            
          </Router>
        </>
    )

}

export default AppRoutes;