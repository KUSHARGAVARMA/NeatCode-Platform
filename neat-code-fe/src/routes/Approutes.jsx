import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Signup from '../pages/sign-up/Signup';
import Problems from '../pages/all-problems/Problems';
import Solve from '../pages/solve-problem/Solve';

const AppRoutes = () => {

    return (
        <>
          <Router>
            {/* <Signup/> */}
            <Routes>
              <Route path="/" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path= "/problems/all" element={<Problems/>}></Route>
              <Route path= "/solve" element={<Solve/>}></Route>
            </Routes>
            
          </Router>
        </>
    )

}

export default AppRoutes;