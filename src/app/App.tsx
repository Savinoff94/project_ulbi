import './styles/index.scss'
import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProviders';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';


const App = () => {

    const {theme, toggleTheme}= useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter/>
        </div>
    )
}

export default App;