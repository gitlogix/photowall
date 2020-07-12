import React, {Fragment} from 'react';
import Title from "./Title";
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

const {v4} = require("uuid");

export default class AddPhoto extends React.Component {
    constructor(props){
        super(props);
    }
    handleForm(event){
        event.preventDefault();
        const post = {
            id: v4(),
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            imageUrl: event.target.elements.link.value,
        }
        this.props.onAddPhoto(post);
    }
    render(){
        return (
            <Fragment>
                <Title title = {"Photowall"} />
                <div className = "form">
                    <form type="POST" onSubmit={this.handleForm.bind(this)}>
                        <input name = "link" type="text" required="required" autoComplete="off" placeholder="Link..." />
                        <input name = "title" type="text" required="required" autoComplete = "off" placeholder = "Title..." />
                        <input name = "description" type="text" required="required" autoComplete = "off" placeholder = "Description..." />  
                        {/*<Dropdown>
                            <DropdownToggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </DropdownToggle>

                            <DropdownMenu>
                                <DropdownItem href="#/action-1">Action</DropdownItem>
                                <DropdownItem href="#/action-2">Another action</DropdownItem>
                                <DropdownItem href="#/action-3">Something else</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>*/}
                        <button>Post</button>             
                    </form>
                </div>
                
            </Fragment>
        )
    }
    
}