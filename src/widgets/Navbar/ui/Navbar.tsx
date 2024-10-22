import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinkTheme, Applink } from 'shared/ui/AppLink/Applink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className ?: string
}

export const Navbar = ({ className } : NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Applink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>{t('Main page')}</Applink>
                <Applink theme={AppLinkTheme.SECONDARY} to="/about">{t('About page')}</Applink>
            </div>
        </div>
    );
};
