import React, {Component} from 'react';
import Link from '../../atoms/Link';
import Title from '../../atoms/Title';
// import Card from '../../molecules/Card';
import TextGroup from '../../atoms/TextGroup';

import {
  Button,
  CardGroup,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from 'mdbreact';
import './style.css';

export default class PastMeetup extends Component {
  constructor() {
    super();

    this.state = {
      isOpened: false
    }
  }

  renderSeeAll() {
    return this.props.schedule.map((eachSchedule, index) => {
      return (
        <Card>
          <CardImage src={eachSchedule.image} alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">{eachSchedule.date}</CardTitle>
            <CardText>{eachSchedule.id}</CardText>
            <CardText>{eachSchedule.topic}</CardText>
            <CardText>{eachSchedule.participants}</CardText>
            <Button color="light-blue" size="md">View</Button>
          </CardBody>
        </Card>


        // <Card
        //   key = {index} 
        //   date = {eachSchedule.date}
        //   id = {eachSchedule.id}
        //   topic = {eachSchedule.topic}
        //   participants = {eachSchedule.participants}
        // />
      )
    })
  }

  renderCard() {
    return this.props.schedule.map((eachSchedule, index) => {
      if (index <=2) {
        return (
          <Card>
            <CardImage src={eachSchedule.image} alt="Card image cap" top hover overlay="white-slight"/>
            <CardBody>
              <CardTitle tag="h5">{eachSchedule.date}</CardTitle>
              <CardText>{eachSchedule.id}</CardText>
              <CardText>{eachSchedule.topic}</CardText>
              <CardText>{eachSchedule.participants}</CardText>
              <Button color="light-blue" size="md">View</Button>
            </CardBody>
          </Card>


          // <Card
          //   key = {index}
          //   date = {eachSchedule.date}
          //   id = {eachSchedule.id}
          //   topic = {eachSchedule.topic}
          //   participants = {eachSchedule.participants}
          // />
        )
      }
    })
  }

  renderContent() {
    if(this.state.isOpened) {
      return this.renderSeeAll();
    } else {
      return this.renderCard();
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <TextGroup className="PastMeetup">
          <Title text='Past Meetup' className='Subtitle'/>
          <Link text='See All' className='SeeAll' onClick={() => this.setState({isOpened: true})}/>

          <CardGroup deck>
            {this.renderContent()}
          </CardGroup>
        </TextGroup>
      </div>
    )
  }
}
