import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'widgets/LangSwitcher'
interface SideBarProps {
    className ?: string
}
export const SideBar = ({className} : SideBarProps) => {
    const {t} = useTranslation();
    const [collapsed,setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div 
            className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>{t('toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}