import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import UserList from './components/Dashboard/Table';
import UserCreate from './components/Dashboard/Add';
import UserUpdate from './components/Dashboard/Edit';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<UserList />} />
                    <Route path='/started' element={<Blank />} />
                    <Route path='/calendar' element={<Blank />} />
                    <Route path='/user' element={<Blank />} />
                    <Route path='/order' element={<Blank />} />
                    <Route path='/create' element={<UserCreate />} />
                    <Route path='/update/:id' element={<UserUpdate />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
