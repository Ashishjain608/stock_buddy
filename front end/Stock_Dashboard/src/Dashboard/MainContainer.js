import React from 'react';
import { Grid } from "@material-ui/core";
import Header from './Header';
import StockCards from './StockCards';

class MainContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            text: 'hello',
            top4Stocks: []
         }
    }

    componentDidMount = async () => {
        try {
            const response = await fetch('http://localhost:8085/v1/fetchTop4Stock');
            const top4Stocks = await response.json();
            if (top4Stocks) {
                this.setState({
                    top4Stocks
                })
            }
        } catch (err) {
            console.log('error while fetching top 4 stocks', err);
        }

    }


    render() {
        let cards = this.state.top4Stocks
        return (
            <Grid container >
                <Header />
                <Grid container justify="center" alignItems="center" spacing={12}>
                    {
                        cards && cards.map((cardItem) =>
                            <Grid item xs={3}>
                                <StockCards title={cardItem.stockSymbol} itemObj={cardItem} />
                            </Grid>)
                    }
                </Grid>
            </Grid>
        )
    }
}

export default MainContainer;