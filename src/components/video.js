import css from 'less/video.module.less'
import Player from '@vimeo/player'
import React, {Component} from 'react'

class VimeoEmbed extends Component {
  componentDidMount() {
    this.player = new Player('player', {
      id: '309980899',
      autoplay: true,
      loop: true
    })
  }

  render() {
    if (!this.props.context.video.isPlaying === true) {
      this.player.pause()
    }

    return (
      <div id='player' className={css.iframe}/>
    )
  }
}

const Video = ({
  context
}) => {
  return (
    <div className={css.container}>
      <VimeoEmbed context={context}/>
    </div>
  )
}

export default Video