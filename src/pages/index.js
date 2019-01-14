import React from 'react'
import css from 'less/index.module.less'
import Nav from 'components/nav'
import Video from 'components/video'
import SketchfabView from 'components/view-sketchfab'
import AccordianView from 'components/view-accordian'

const data = {
  accordians: [
    {
      title: 'Covestro Materials',
      color: 'blue',
      view: 'accordian'
    }
  ],
  models: [
    {
      title: 'Material Selection',
      color: 'green',
      view: 'sketchfab',
      modelKey: '83870e05d3ae4ecf8d5758938decaf96'
    },
    {
      title: 'Direct Coating',
      color: 'pink',
      view: 'sketchfab',
      modelKey: 'ff3b3f61de784b84a297628436de5205'
    },
    {
      title: 'Final Part Design',
      color: 'orange',
      view: 'sketchfab',
      modelKey: '6ebf373b809f445f93398fc6348ee185'
    }
  ]
}

class Index extends React.Component {
  state = {
    view: 'home',
    activeModel: {
      key: data.models[0].modelKey
    },
    video: {
      isPlaying: true
    }
  }

  setActiveModelByKey = key => {
    this.setState({
      activeModel: {
        key
      }
    })
  }

  setView = view => {
    this.setState({
      view: view
    })
  }

  stopLandingVideo = () => {
    this.setState({
      video: {
        isPlaying: false
      }
    })
  }

  render() {
    const {
      view
    } = this.state

    const context = {
      ...this.state,
      ...this,
      data
    }

    return (
      <div className={css.views}>
        <div className={css.page} style={{display: view === 'home' ? 'flex' : 'none'}}>
          <Video context={context}/>
          <Nav {...context}/>
        </div>
        <div style={{display: view === 'sketchfab' ? 'block' : 'none'}}>
          <SketchfabView {...context}/>
        </div>
        <div style={{display: view === 'accordian' ? 'block' : 'none'}}>
          <AccordianView {...context}/>
        </div>
      </div>
    )
  }
}

export default Index