import React from 'react'
import css from 'less/nav.module.less'
import logoSrc from 'images/logo.png'

const MenuItemBar = ({
  color
}) => {
  const barClasses = [
    css.menuItemBar,
    css[`${color}MenuItemBar`]
  ].join(' ')

  return <div className={barClasses}/>
}

const Menu = ({
  setView,
  data
}) => {
  const allItems = [
    ...data.accordians,
    ...data.models
  ]

  const items = allItems.map(item => {
    const handleClick = () => {
      setView(item.view)
    }

    return (
      <li key={item.title} className={css.menuItem} onClick={handleClick}>
        <MenuItemBar color={item.color}/>
        <div className={css.menuItemTitle}>
          {item.title}
        </div>
      </li>
    )
  })

  return (
    <ul className={css.menu}>
      {items}
    </ul>
  )
}

const Nav = props => {
  return (
    <nav id='nav' className={css.nav}>
      <img className={css.logo} alt='logo' src={logoSrc}/>
      <Menu {...props}/>
    </nav>
  )
}

export default Nav