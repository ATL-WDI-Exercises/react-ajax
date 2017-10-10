import React, { Component } from 'react'
import axios from 'axios'

import Thumbs from './Thumbs'

class SavedGifs extends Component {

    state = {
        savedGifs: []
    }

    approve = (gif) => {
        this.updateStrangeness(gif.strangeness + 1, gif._id)
    }

    disapprove = (gif) => {
        this.updateStrangeness(gif.strangeness - 1, gif._id)
    }

    updateStrangeness = (newStrangenessValue, gifId) => {
        axios.patch(`https://strange-thing-api.herokuapp.com/api/${gifId}`, {
            strangeness: newStrangenessValue
        }).then((response) => {
            this.getSavedThings()
        })
    }

    getSavedThings = () => {
        axios.get("https://strange-thing-api.herokuapp.com/api")
            .then((response) => {
                const savedGifs = response.data.strangeThings;
                this.setState({ savedGifs: savedGifs });
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    }

    componentWillMount() {
        this.getSavedThings()
    }

    render() {
        const savedGifs = this.state.savedGifs.map((gif, i) => (
            <div className="gif" key={i}>
                <img src={gif.url} />
                <div>Score: +{gif.strangeness}</div>
                <Thumbs approve={() => this.approve(gif)} disapprove={() => this.disapprove(gif)} />
            </div>
        ));

        return (
            <div className="savedGifsContainer">
                <h3>Previously Saved Gifs</h3>
                <div className="savedGifsFlexContainer">
                    {savedGifs}
                </div>
            </div>
        )
    }
}

export default SavedGifs