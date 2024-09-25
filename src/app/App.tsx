import './styles/index.scss'
import { SideBar } from 'widgets/SideBar';
import { useTheme } from './providers/ThemeProviders';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';


const App = () => {

    const {theme}= useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className='content-page'>
                <SideBar/>
                <AppRouter/>
            </div>
        </div>
    )
}

export default App;