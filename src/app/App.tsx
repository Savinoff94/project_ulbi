import './styles/index.scss'
import { SideBar } from 'widgets/SideBar';
import { useTheme } from './providers/ThemeProviders';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Suspense } from 'react';


const App = () => {

    const {theme}= useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className='content-page'>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App;