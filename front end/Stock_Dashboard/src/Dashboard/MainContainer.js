import React from 'react';
import { Grid } from "@material-ui/core";
import Header from './Header';
import StockCards from './StockCards';

class MainContainer extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {text: 'hello'}
    }

    componentDidMount () {
        fetch('https://randomuser.me/api/').then(({ results }) => 
            
            this.setState({ person: results })
        );
    }

    render () {
        let cards = ["Nifty", "Sensex", "Infosys", "Polycab"]
        return (
            <Grid container >
                <Header/>
                <Grid container justify="center" alignItems="center" spacing={12}>
                    {
                        cards.map((cardItem) => 
                            <Grid item xs={3}>
                                <StockCards title = {cardItem} text = "yolo"/>
                            </Grid>)
                    }
                </Grid>                
            </Grid>
        ) 
    }
}

export default MainContainer;