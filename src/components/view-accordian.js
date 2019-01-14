import React from 'react'
import Accordian from './accordian'
import css from 'less/view-accordian.module.less'

const data = {
  items: [
    {
      title: 'Makrolon®',
      description: 'PC: Device Housings, internal mechanical components',
      color: 'pink',
      content: `
        Transparency for viewing windows, indicators<br/>
        No secondary processing for integral window<br/>
        Low friction materials for internal mechanisms.
      `
    },
    {
      title: 'Bayblend®',
      description: 'PC: Device Housings, internal mechanical components',
      color: 'blue',
      content: `
        Tough material for better durability (than ABS)<br/>
        Offers low gloss appearance
      `
    },
    {
      title: 'Makroblend®',
      description: 'PC: Device Housings, internal mechanical components',
      color: 'green',
      content: `
        Enhanced chemical resistance to harsh lotions<br/>
        Suitable for insert molding to incorporate parts for assembly
      `
    },
    {
      title: 'Apec®',
      description: 'HT-PC: Transparent repeat autoclavability for trays and surgical',
      color: 'orange',
      content: `
       
      `
    }
  ]
}

class AccordianView extends React.Component {
  state = {
    expandedAccordianTitle: data.items[0].title
  }

  setExpandedAccordianByTitle = title => {
    this.setState({
      expandedAccordianTitle: title
    })
  }

  render() {
    const context = {
      ...this.state,
      ...this
    }

    const items = data.items.map(item => {
      return (
        <Accordian data={item} {...context}/>
      )
    })

    const handleExitClick = () => this.props.setView('home')

    return (
      <div className={css.view}>
        <header className={css.header}>
          <h1 className={css.headerTitle}>Covestro Materials</h1>
          <div className={css.exit} onClick={handleExitClick}/>
        </header>
        <div className={css.accordians}>
          {items}
        </div>
      </div>
    )
  }
}

export default AccordianView