import React, {Component, useContext, useState} from 'react';
import './styles/FilterOption.css'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { Button, Collapse } from 'react-bootstrap';
import Collapsible from 'react-collapsible';


export default class FilterOption extends Component{

    constructor(props){
        super(props)
        this.state = {
            open:false

        }
    }
    setOpen = () => {
        this.setState({open:!this.state.open})
    }
    
    render= () =>{
        return (
            <Collapsible open={true} trigger={<div className="filter-header" >
                 <div  onClick={() => this.props.onToggleFilter(this.props.label)} className={`filter-option-status${this.props.checked?`-selected`:``}`}/>
                {this.props.label}
            </div>}>
                <div className="filter-subfilters-content">
                {this.props.children}
                </div>
           
            </Collapsible>
        )
    }
}