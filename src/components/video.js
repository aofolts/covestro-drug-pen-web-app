import React from 'react'
import css from 'less/video.module.less'

const Embed = () => {
  return (
    <iframe className={css.iframe} src="https://player.vimeo.com/video/308736859?autoplay=1&amp;title=0&amp;byline=0&amp;portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen/>
  )
}

const Video = () => {
  return (
    <div className={css.container}>
      <Embed/>
    </div>
  )
}

export default Video