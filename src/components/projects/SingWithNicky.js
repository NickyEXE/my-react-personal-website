import React, {useEffect} from 'react';
import screenshot from '../../assets/photos/SingWithNicky.png'
import '../../stylesheets/Projects.css'

const SingWithNicky = () => {

    useEffect(() => {
        fetch("http://singwithnicky.herokuapp.com/ping", {mode: 'no-cors'})
        fetch("https://serene-scrubland-24770.herokuapp.com/ping")
        }, [])

    return(
        <div className="project">
        <h1>Sing With Nicky</h1>
        <h3>Import a Spotify Playlist to get each song's book-codes for the most used Song Book in New York City.</h3>
        <a href="http://singwithnicky.herokuapp.com/"><img src={screenshot} alt="SingWithNicky opened to a playlist"/></a>
        <p>Have you've ever found yourself looking over a beat-up, laminated, jumbled binder at a Karaoke Bar, trying to find a song, and thought "there must be a better way."</p>
        <p>That's what Nicky Dover, the Karaoke Prince, realized. He built a Rails/React app that imports your Spotify Playlist and scrapes each song on the playlist from Sing Sing Media's online search bar.</p>
        <p>Because the online search bar limits request speed, the app makes use of background processing and websockets to slowly scrape each song and then broadcast each song to the user once they've been checked in a database, and storing every search in its own database so it can pull songs faster next time.</p>
        <p>It also allows you to store and queue songs, listen to the song on Spotify, see its lyrics, and search its own database quickly.</p>
        <p className="technologies">Technologies used: Websockets, Background Processing, Jarow-Winkler, Spotify API</p>
        
        </div>
    )
}



export default SingWithNicky