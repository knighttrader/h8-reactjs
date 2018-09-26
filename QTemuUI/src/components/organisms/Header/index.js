import React, { Component } from 'react';
import Img from '../../atoms/Img';
import MediaBody from '../../molecules/MediaBody';
import './style.css';

export default class Header extends Component {
  
  render() {
    return(
      <div>
        <div className='Media'>
          <Img 
            width={160}
            height={160}
            src={this.props.image} 
            alt="thumbnail"
            className='MediaLogo' 
          />
          <MediaBody 
            title={this.props.title}
            location={this.props.location}
            totalMembers={this.props.totalMembers}
            organizer={this.props.organizer}
          />
        </div>
      </div>
    )
  }
}
