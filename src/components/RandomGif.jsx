import React, { Component } from 'react'
import axios from 'axios'

import Thumbs from './Thumbs'

class RandomGif extends Component {

    state = {
        randomGifUrl: ''
    }

    disapprove = () => {
        this.getRandomGif();
    }

    approve = () => {
        // Prepare the response that you are posting to the API
        const payload = {
            url: this.state.randomGifUrl,
            strangeness: 1
        }

        // Use axios.post() and target the Heroku API and send the payload defined earlier
        axios.post("https://strange-thing-api.herokuapp.com/api/", payload)
            .then((res) => {
                // Get a new gif once the post is successful
                this.getRandomGif()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getRandomGif = () => {
        axios.get('http://api.giphy.com/v1/gifs/random', {
            params: {
                api_key: 'dc6zaTOxFJmzC'
            }
        }).then((response) => {
            const randomGifUrl = response.data.data.image_url

            this.setState({ randomGifUrl: randomGifUrl })
        }).catch((error) => {
            console.log(error)
        })
    }

    componentWillMount() {
        this.getRandomGif()
    }

    render() {
        return (
            <div>
                <img className="randomGif" src={this.state.randomGifUrl} alt="random gif" />
                <br />
                <Thumbs approve={this.approve} disapprove={this.disapprove} /> 
            </div>
        )
    }
}

export default RandomGif