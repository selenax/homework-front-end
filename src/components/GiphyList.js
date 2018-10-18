import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
  subheader: {
    width: '100%',
  },
});

export default class GiphyList extends Component {

render() {
  const { classes, searchResults } = this.props;

  return (
    <div className={classes.root}>
      <GridList cellHeight='auto' className={classes.gridList} cols={4}>
        {searchResults.map(item => (
          <GridListTile key={item.id} cols={item.cols || 1}>
            <img src={item.images.downsized.gif_url} alt={item.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
}

GiphyList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GiphyList);