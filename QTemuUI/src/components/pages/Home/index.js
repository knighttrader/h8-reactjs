import React, { Component } from "react";
import axios from "axios";

import NavbarFeatures from "../../components/organisms/NavbarFeatures";
import Header from "../../components/organisms/Header";
import NextMeetup from "../../components/organisms/NextMeetup";
import AboutMeetup from "../../components/organisms/AboutMeetup";
import Members from "../../components/organisms/Members";
import PastMeetup from "../../components/organisms/PastMeetup";
import FooterPage from "../../components/organisms/FooterPage";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      meetup: {
        image: "https://via.placeholder.com/500x500",
        title: "Hacktiv8 Meetup",
        location: "Jakarta, Indonesia",
        totalMembers: 1078,
        organizer: "Adhy Wiranata"
      },
      invitation: {
        title: "Awesome Meetup",
        date: new Date().toString(),
        greetings: "Hello JavaScript & NodeJS Ninjas!",
        text:
          "Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! The meetup format will contain some short stories and technical talks. If you have a short announcement you'd like to share with the audience,you may do so during open mic announcements. Remember to bring a photo ID to get through building security.  ..... See you there! ",
        organizer: "Best Hengki, Sofian - The JakartaJS Organizers"
      },
      profile: {
        twitter: "@JakartaJS",
        hashtag: "#jakartajs"
      },
      member: [
        {
          imageProfile:
            "https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png",
          name: "Adhy Wiranata",
          memberType: "Organizer"
        },
        {
          imageProfile:
            "https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png",
          name: "Bobby Wiranata",
          memberType: "Member"
        },
        {
          imageProfile:
            "https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png",
          name: "Chandra Wiranata",
          memberType: "Member"
        }
      ],
      schedule: [
        {
          id: 39,
          image:
            "https://images.unsplash.com/photo-1527664557558-a2b352fcf203?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4341976025ae49162643ccdb47a72a4d&auto=format&fit=crop&w=1051&q=80",
          date: "27 November 2017",
          topic: "JakartaJS with Kumparan",
          participants: 139
        },
        {
          id: 40,
          image:
            "https://images.unsplash.com/21/mac-glasses.JPG?ixlib=rb-0.3.5&s=61dea2aa3febb66f4dcd1ea655dc2c91&auto=format&fit=crop&w=1050&q=80",
          date: "27 September 2017",
          topic: "JakartaJS with Blibli",
          participants: 239
        },
        {
          id: 41,
          image:
            "https://images.unsplash.com/photo-1526455192392-2aec60ae8485?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af18ae684049a7f73e2583d829b794c2&auto=format&fit=crop&w=500&q=60",
          date: "27 October 2017",
          topic: "JakartaJS with Hacktiv8",
          participants: 39
        },
        {
          id: 39,
          image:
            "https://images.unsplash.com/photo-1519033093166-cc076527fd0d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2139e0cd284f5795ea39422f2c3e6939&auto=format&fit=crop&w=500&q=60",
          date: "27 November 2017",
          topic: "JakartaJS with Kumparan",
          participants: 139
        },
        {
          id: 40,
          image:
            "https://images.unsplash.com/photo-1518600570419-81324064e9ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04af4a3ac17780fdc82adf7e68b1f6ec&auto=format&fit=crop&w=1050&q=80",
          date: "27 September 2017",
          topic: "JakartaJS with Blibli",
          participants: 239
        },
        {
          id: 41,
          image:
            "https://images.unsplash.com/photo-1496389395181-e5fdd5c0315e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=49bd31ab070ce144fe11d9df225d1d4c&auto=format&fit=crop&w=1046&q=80",
          date: "27 October 2017",
          topic: "JakartaJS with Hacktiv8",
          participants: 39
        }
      ],
      members: []
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=10&gender=female")
      .then(response => {
        this.setState({
          members: response.data.results
        });
      });
  }

  render() {
    return (
      <div>
        <NavbarFeatures />
        <Header
          image={this.state.meetup.image}
          title={this.state.meetup.title}
          location={this.state.meetup.location}
          totalMembers={this.state.meetup.totalMembers}
          organizer={this.state.meetup.organizer}
        />
        <NextMeetup
          title={this.state.invitation.title}
          date={this.state.invitation.date}
          greetings={this.state.invitation.greetings}
          text={this.state.invitation.text}
          organizer={this.state.invitation.organizer}
        />
        <AboutMeetup
          twitter={this.state.profile.twitter}
          hashtag={this.state.profile.hashtag}
        />
        <Members
          members={this.state.members}
          length={this.state.member.length}
        />
        <PastMeetup schedule={this.state.schedule} />
        <FooterPage />
      </div>
    );
  }
}
