import React, { Component } from 'react';
import Text from '../../atoms/Text';
import TextGroup from '../../atoms/TextGroup';
import './style.css';

export default class MediaBody extends Component { 
  
  render() {
    return(
      <TextGroup className='DataSet'>
        <Text content={this.props.title} className='DataTitle'/>
        <TextGroup className='DataDetail'>
          <TextGroup className='space25px'>
            <Text content='Location'/>
            <Text content='Members'/>
            <Text content='Organizer'/>
          </TextGroup>
          <TextGroup className='space25px'>
            <Text content=':'/>
            <Text content=':'/>
            <Text content=':'/>
          </TextGroup>
          <TextGroup>
            <Text content={this.props.location}/>
            <Text content={this.props.totalMembers}/>
            <Text content={this.props.organizer}/>
          </TextGroup>
        </TextGroup>
        <button className='Join'>Join Us</button>
      </TextGroup>
    )
  }
}