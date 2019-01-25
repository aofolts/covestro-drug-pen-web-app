import React from 'react'
import Accordian from './accordian'
import css from 'less/view-accordian.module.less'
import makrolonImage from 'images/makrolon.jpg'
import bayBlendImage from 'images/bayblend.jpg'
import markoblendImage from 'images/makroblend.jpg'

const data = {
  items: [
    {
      title: 'Makrolon<sup>®</sup> Polycarbonate',
      description: 'Medical Devices and equipment housings',
      color: 'pink',
      feature: `Best choice for glass-like transparency, impact resistance and durability`,
      content: `
        <p>Best choice for glass-like transparency, impact resistance and durability</p>
        <p>
          Biocompatibile: ISO 10993-1 and USP Class VI for 30 days or less<br/>
          Sterilizable with a variety of methods (EtO, Steam, Gamma, e-beam)<br/>
          Transparency for viewing windows, indicators and light guides<br/>
          Toughness and durability<br/>
          Low friction and glass-filled materials for internal mechanisms
        </p>
      `,
      image: makrolonImage
    },
    {
      title: 'Bayblend<sup>®</sup>',
      description: 'Added design flexibility from balance mechanical and thermal properties',
      color: 'blue',
      feature: `Added design flexibility from balance mechanical and thermal properties`,
      content: `
        <p>Options that are:</p>
        <p>
          Biocompatible: ISO 10993-1 and USP Class VI for 30 days or less<br/>
          Skin contact biocompatible: ISO 10993-5 and 10993-10<br/>
          Flame retardant for equipment housings
        </p>
        <p>
          Toughness needed for portable devices<br/>
          Opaque, low gloss appearance
        </p>
      `,
      image: bayBlendImage
    },
    {
      title: 'Makroblend<sup>®</sup>',
      description: 'PC: Device Housings, internal mechanical components',
      color: 'green',
      feature: `Ultra-tough and resistant to chemicals`,
      content: `
        <p>Options that are:</p>
        <p>
          Skin contact biocompatible (ISO 10993-5 and 10993-10) for wearable devices<br/>
          Flame retardant for equipment housings
        </p>
        <p>
          Enhanced chemical resistance to a variety of disinfectants and every day lotions<br/>
          Suitable for insert molding to incorporate parts for assembly
        </p>
      `,
      image: markoblendImage
    },
    {
      title: 'Apec<sup>®</sup>',
      description: 'Components, trays and surgical kits that require repeat sterilization',
      color: 'orange',
      feature: `Best choice for high-heat and clarity`,
      content: `
        <p>
          Biocompatibility: ISO 10993-1 and USP Class VI for 30 days or less <br/>
          Suitable for repeated steam sterilization up to 143°C<br/>
          Outstanding clarity<br/>
          Able to withstand higher processing temperatures during LSR overmolding to reduce curing times
        </p>
      `,
      image: markoblendImage
    }
  ]
}

class AccordianView extends React.Component {
  state = {
    expandedAccordianTitle: null
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