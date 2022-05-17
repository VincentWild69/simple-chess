import s from './Header.module.scss';
import clsx from 'clsx';
import { GiChessQueen } from 'react-icons/gi';
import { useState } from "react";
import { changeDataTheme } from './../../utils/changeDataTheme';

const themesArr: string[] = ['light', 'dark'];

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  const onChangeTheme = (theme: string) :void => {
    changeDataTheme(theme);
    setTheme(theme);
  }
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <GiChessQueen size="3rem" />
      </div>
      <div className={s.themeSwitch}>
        {themesArr.map((themeName: string) => <button key={themeName} className={clsx(s.themeSwitchBtn, {[s.active]: theme === themeName})} onClick={() => onChangeTheme(themeName)}>{themeName}</button>)}
      </div>
    </header>
  )
}