import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardHeader, Grid } from '@material-ui/core';
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
                    {this.props.text}
                </CardContent>
            </Card>           
        )
    }
}

StockCards.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(StockCards);