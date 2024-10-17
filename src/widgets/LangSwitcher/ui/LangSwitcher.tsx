import cls from './LangSwitcher.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'


interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const {t, i18n} = useTranslation()
    const toggleTranslation = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div>
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggleTranslation}
            >
                {t('Language')}
            </Button>
        </div>
    )
}