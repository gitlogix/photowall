import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';

const {v4} = require('uuid');

class Main extends Component {
    constructor(props){  // constructor is to initialize variables not hit API
        super(props);
        this.state = {
            posts: []
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
    }

    removePhoto(postToRemove){
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postToRemove)
        })
        );
    }

    fetchFromTheDatabase(){
        const posts = [
            {
                id: v4(),
                title: "Peace",
                description: "A peaceful beach",
                imageUrl: "beach1"
            
            },
            {
                id: v4(),
                title: "Greatness",
                description: "A resourceful beach",
                imageUrl: "beach2"
            },
            {
                id: v4(),
                title: "Highest",
                description: "A future beach",
                imageUrl: "beach3"
            },
            {
                id: v4(),
                title: "Highest",
                description: "A future beach",
                imageUrl: "beach4"
            }
        ]
        return posts;
    }

    componentDidMount(){
        const posts = this.fetchFromTheDatabase();
        this.setState({
            posts: posts
        });
    }

    addPhoto(post){
        this.setState(state => ({
            posts: state.posts.concat(post)
        })
        );
    }
    render(){
        const baseUrl = "";
        return (
            <div>
                <Route path={baseUrl + "/"} exact render={() => (
                    <React.Fragment>
                        <Title title = {"Photowall"}/>
                        <Photowall posts = {this.state.posts} onRemovePhoto={this.removePhoto} />
                    </React.Fragment>                   
                )} />

                <Route path={baseUrl + "/addIcon"} exact render={({history}) => (
                    <AddPhoto onAddPhoto = {(post) => {
                        this.addPhoto(post);
                        history.push(baseUrl + "/");
                    }} />
                )}/>
                                  
            </div>           
        )
    }

    
}

export default Main;
