import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardHeader, Grid, Chip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from "./StockCardsCss";
import PropTypes from 'prop-types';

class StockCards extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render () {
        const { classes } = this.props;
        return (            
            <Card className = {classes.cardMargin}>
                <CardHeader title = {this.props.title}/>
                <CardContent>
                    <Grid container>
                        <Chip label={`Price: ${this.props.itemObj.price}`}/>
                        <Chip label={`% Change: ${this.props.itemObj.changePercent}`}/>
                        <Chip label={`Open: ${this.props.itemObj.open}`}/>
                        <Chip label={`High: ${this.props.itemObj.high}`}/>
                        <Chip label={`Latest trading day: ${this.props.itemObj.latestTradingDay}`}/>
                    </Grid>
                </CardContent>
            </Card>           
        )
    }
}

StockCards.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(StockCards);