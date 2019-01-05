import React from 'react'
import css from 'less/view-sketchfab.module.less'

const Viewers = ({
  modelKey,
  setView
}) => {
  const handleClick = () => setView('home')

  return (
    <div className={css.viewer}>
      <div className={css.exit} onClick={handleClick}/>
      <iframe key={modelKey} title='Sketchfab model' className={css.model} src={`https://sketchfab.com/models/${modelKey}/embed?autospin=0.2&amp;autostart=1`} frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"/>
    </div>
  )
}

const SketchfabView = props => {
  return (
    <div className={css.page}>
      <Viewers {...props}/>
    </div>
  )
}

export default SketchfabView