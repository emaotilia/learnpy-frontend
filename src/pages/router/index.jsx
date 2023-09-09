import Global from '../global';

import Authenticated from '../authenticated';

import Home from '../home';
import Login from '../login';
import Logout from '../logout';
import Course from '../course';
import Courses from '../courses';
import Activate from '../activate';
import Register from '../register';
import Training from '../training';
import Dashboard from '../dashboard';
import Workspace from '../workspace';
import Statistics from '../statistics';
import Laboratories from '../laboratories';
import ForgotPassword from '../forgot-password';
import AccountSettings from '../account-settings';
import ConfirmChangeEmail from '../confirm-change-email';
import ConfirmChangePassword from '../confirm-change-password';

import {
    Route,
    Routes,
    BrowserRouter
} from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Global />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/inregistrare' element={<Register />} />
                    <Route path='/activare' element={<Activate />} />
                    <Route path='/autentificare' element={<Login />} />
                    <Route path='/uitare-parola' element={<ForgotPassword />} />
                    <Route path='/delogare' element={<Logout />} />
                    <Route path='/app' element={<Authenticated />}>
                        <Route path='' element={<Dashboard />} />
                        <Route path='/app/cursuri' element={<Courses />} />
                        <Route path='/app/cursuri/:id' element={<Course />} />
                        <Route path='/app/laboratoare' element={<Laboratories />} />
                        <Route path='/app/antrenament' element={<Training />} />
                        <Route path='/app/exercitii/:id' element={<Workspace />} />
                        <Route path='/app/setari-cont' element={<AccountSettings />} />
                        <Route path='/app/confirmare-schimbare-email' element={<ConfirmChangeEmail />} />
                        <Route path='/app/confirmare-schimbare-parola' element={<ConfirmChangePassword />} />
                        <Route path='/app/statistici' element={<Statistics />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;