import css from 'less/video.module.less'
import Player from '@vimeo/player'
import React, {Component} from 'react'

class Video extends Component {
  componentDidMount() {
    const $iframe = document.querySelector('iframe#landing-video')
    this.player = new Player($iframe)

    setTimeout(() => {
      this.player.play().catch(error => console.log(error))
    }, 100);
  }

  render() {
    if (!this.props.context.video.isPlaying === true) {
      this.player.pause()
    }

    const iframeStyle = {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }

    return (
      <div id='player' className={css.container}>
        <div className={css.wrap}>
          <iframe title='video' id='landing-video' className={css.iframe} src="https://player.vimeo.com/video/313011865?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay" style={iframeStyle}/>
        </div>
      </div>
    )
  }
}

export default Video