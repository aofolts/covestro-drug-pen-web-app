import React from 'react'
import Accordian from './accordian'
import css from 'less/view-accordian.module.less'
import makrolonImage from 'images/makrolon.jpg'
import bayBlendImage from 'images/bayblend.jpg'
import markoblendImage from 'images/makroblend.jpg'
import apecImage from 'images/apec.jpg'

const data = {
  items: [
    {
      title: 'Makrolon<sup>®</sup>',
      description: 'PC: Medical devices and equipment housings',
      color: 'pink',
      feature: `Best choice for glass-like transparency, impact resistance and durability`,
      content: `
        <ul>
          <li>Toughness and durability</li>
          <li>Transparency for viewing windows, indicators and light guides</li>
          <li>Biocompatible (ISO 10993-1 and USP Class VI for 30 days or less)</li>
          <li>Sterilizable with a variety of methods (EtO, Steam, Gamma, e-beam)</li>
          <li>Low friction and glass-filled materials for internal mechanisms</li>
        </ul>
      `,
      image: makrolonImage
    },
    {
      title: 'Bayblend<sup>®</sup>',
      description: 'PC + ABS: Drug delivery device housings, equipment housings',
      color: 'blue',
      feature: `Added design flexibility from balance mechanical and thermal properties`,
      content: `
        <p>
          <ul>
            <li>Toughness needed for portable devices</li>
            <li>Opaque, low gloss appearance</li>
          </ul>
        </p>
        <p>Options that are:</p>
        <p>
          <ul>
            <li>Biocompatible (ISO 10993-1 and USP Class VI for 30 days or less)</li>
            <li>Skin contact biocompatible (ISO 10993-5 and 10993-10)</li>
            <li>Flame retardant for equipment housings</li>
          </ul>
        </p>
      `,
      image: bayBlendImage
    },
    {
      title: 'Makroblend<sup>®</sup>',
      description: 'PC + Polyester: Wearable drug delivery housings, durable monitors and pumps',
      color: 'green',
      feature: `Ultra-tough and resistant to chemicals`,
      content: `
        <p>
          <ul>
            <li>Enhanced chemical resistance to a variety of disinfectants and every day lotions</li>
            <li>Suitable for insert molding to incorporate parts for assembly</li>
          </ul>
        </p>
        <p>Options that are:</p>
        <p>
          <ul>
            <li>Skin contact biocompatible (ISO 10993-5 and 10993-10) for wearable devices</li>
            <li>Flame retardant for equipment housings</li>
          </ul>
        </p>
      `,
      image: markoblendImage
    },
    {
      title: 'Apec<sup>®</sup>',
      description: 'HT-PC: Components, trays, and surgical kits that require repeat sterilization',
      color: 'orange',
      feature: `Best choice for high-heat and clarity`,
      content: `
        <p>
          <ul>
            <li>Outstanding clarity</li>
            <li>Suitable for repeated steam sterilization up to 143°C</li>
            <li>Biocompatibility (ISO 10993-1 and USP Class VI for 30 days or less)</li>
            <li>Able to withstand higher processing temperatures during LSR overmolding to reduce curing times</li>
          </ul>
        </p>
      `,
      image: apecImage
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
          <h1 className={css.headerTitle}>Covestro Materials for the Healthcare industry</h1>
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