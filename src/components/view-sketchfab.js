import React, {Component} from 'react'
import css from 'less/view-sketchfab.module.less'

const Viewers = ({
  modelKey,
  setView,
  activeModel,
  data
}) => {
  const handleClick = () => setView('home')

  const iframes = data.models.map(model => {
    const display = model.modelKey === activeModel.key ? 'block' : 'none'

    return (
      <iframe key={model.modelKey} title='Sketchfab model' className={css.model} src={`https://sketchfab.com/models/${model.modelKey}/embed?autospin=0.2&amp;autostart=1`} frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true" style={{display}}/>
    )
  })

  return (
    <div className={css.viewer}>
      <div className={css.exit} onClick={handleClick}/>
      {iframes}
    </div>
  )
}

class SketchFabView extends Component {
  render() {
    return (
      <div className={css.page}>
        <Viewers {...this.props}/>
      </div>
    )
  }
}

export default SketchFabView