import React, { Component } from 'react'
import css from 'less/accordian.module.less'

class Accordian extends Component {
  render() {
    const {
      expandedAccordianTitle,
      setExpandedAccordianByTitle,
      data
    } = this.props
    
    const isExpanded = expandedAccordianTitle === data.title

    const titleClasses = [
      css.title,
      css[data.color + 'Title']
    ].join(' ')

    const toggleClasses = [
      css.toggle,
      css[data.color + 'Toggle'],
      isExpanded ? css.toggleWhenExpanded : null
    ].join(' ')

    const accordianClasses = [
      css.accordian,
      isExpanded ? null : css.isCollapsed
    ].join(' ')

    const handleHeaderClick = () => {
      setExpandedAccordianByTitle(data.title)
    }

    return (
      <div className={accordianClasses}>
        <div className={css.header} onClick={handleHeaderClick}>
          <div className={css.headerInfo}>
            <div className={titleClasses} dangerouslySetInnerHTML={{__html: data.title}}/>
            <div className={css.description} dangerouslySetInnerHTML={{__html: data.description}}/>
          </div>
          <div className={toggleClasses}/>
        </div>
        <div className={css.content}>
          <div className={css.info}>
            <div className={css.feature}>{data.feature}</div>
            <div className={css.features}  dangerouslySetInnerHTML={{__html: data.content}}/>
          </div>
          <div className={css.media}>
            <img src={data.image} className={css.image}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Accordian