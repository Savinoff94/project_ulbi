import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme, Theme } from 'app/providers/ThemeProviders';
import LightIcon from 'shared/assets/icons/theme-light 1.svg';
import DarkIcon from 'shared/assets/icons/theme-dark 1.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
// import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className ?: string
}
export const ThemeSwitcher = ({ className } : ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
