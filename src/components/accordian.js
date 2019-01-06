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
            <div className={titleClasses}>{data.title}</div>
            <div className={css.description}>{data.description}</div>
          </div>
          <div className={toggleClasses}/>
        </div>
        <div className={css.content}>
          <div className={css.features}>
            {data.content}
          </div>
          <div className={css.media}>
            {/* todo: add images */}
          </div>
        </div>
      </div>
    )
  }
}

export default Accordian