import React, { useState, useMemo, useEffect } from 'react';
import styled from "styled-components";
// import bg from './img/bg.png'; // File not found
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import Login from './Components/Login/Login';

function App() {
    const [active, setActive] = useState(1);
    const [activeUser, setActiveUser] = useState({
        isLogin: false,
        name: '',
        email: '',
    });

    const global = useGlobalContext();
    console.log(global);

    // Load the logged-in user from local storage on component mount
    useEffect(() => {
        const LoginUser = JSON.parse(localStorage.getItem('LoginUser')) || null;
        if (LoginUser) {
            setActiveUser({
                isLogin: true,
                name: LoginUser.name,
                email: LoginUser.email,
            });
        }
    }, []);

    const displayData = () => {
        switch (active) {
            case 1:
                return <Dashboard />;
            case 2:
                return <Dashboard />;
            case 3:
                return <Income />;
            case 4:
                return <Expenses />;
            default:
                return <Dashboard />;
        }
    };

    const handleLogout = () => {
        setActiveUser({
            isLogin: false,
            name: '',
            email: '',
        });
        localStorage.removeItem('LoginUser'); // Clear logged-in user from local storage
    };

    const orbMemo = useMemo(() => {
        return <Orb />;
    }, []);

        // Redirect logic after successful login
    const redirectAfterLogin = () => {
          setActive(1);
          // setTimeout(() => {
          // }, 3000);
    };

    if (!activeUser.isLogin) {
        return (
            <AppStyled className="App">
                {orbMemo}
                <MainLayout>
                    <main>
                        <Login active={active} setActive={setActive} redirectAfterLogin={redirectAfterLogin}/>
                    </main>
                </MainLayout>
            </AppStyled>
        );
    }

    return (
        <AppStyled className="App">
            {orbMemo}
            <MainLayout>
                <Navigation active={active} setActive={setActive} handleLogout={handleLogout}/>
                <main>
                    {displayData()}
                </main>
                {/* <button onClick={handleLogout}>Logout</button> */}
            </MainLayout>
        </AppStyled>
    );
}

const AppStyled = styled.div`
    height: 100vh;
    // background-image: url(${props => props.bg});
    position: relative;
    main {
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
`;

export default App;
