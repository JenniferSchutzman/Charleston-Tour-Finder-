import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'

const Recommendations = props => {
  console.log('props inside Resources', props)
  return (
    <div>
      <GridList cellHeight={180} className={props.tours.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">
            Your Personalized Recommendations
          </Subheader>
        </GridListTile>

        {props.tours.map(tile => (
          <GridListTile key={tile.name}>
            <img src={tile.img} />
            <GridListTileBar
              title={tile.tourName}
              subtitle={<span> ${tile.price}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('in mapStateToProps TOURS', state)
  return {
    tours: state.tours
  }
  console.log('in mapStateToProps after return', state)
}

const connector = connect(mapStateToProps)

export default connector(Recommendations)
