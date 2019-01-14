import css from 'less/video.module.less'
import Player from '@vimeo/player'
import React, {Component} from 'react'

class VimeoEmbed extends Component {
  componentDidMount() {
    this.player = new Player('player', {
      id: '309980899',
      autoplay: true
    })
  }

  render() {
    return (
      <div id='player' className={css.iframe}>

      </div>
    )
  }
}

const Video = () => {
  return (
    <div className={css.container}>
      <VimeoEmbed/>
    </div>
  )
}

export default Video