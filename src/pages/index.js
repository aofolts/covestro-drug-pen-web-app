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

  constructor(props) { 
    super(props)
  
    this.state = {
      view: 'home',
      modelKey: data.models[0].modelKey
    }
  }

  setView = view => {
    this.setState({
      view: view
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

    if (view === 'home') {
      return (
        <div className={css.page}>
          <Video/>
          <Nav {...context}/>
        </div>
      )
    } 
    else if (view === 'sketchfab') {
      return <SketchfabView {...context}/>
    }
    else {
      return <AccordianView {...context}/>
    }
  }
}

export default Index