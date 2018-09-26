import React, { Component } from "react";
import NavbarQTemu from './components/organisms/NavbarQTemu';
import Header from './components/organisms/Header';
import NextMeetup from './components/molecules/NextMeetup';
import AboutMeetup from './components/AboutMeetup';
import Members from './components/Members';
import "./App.css";


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tanggal: new Date().toString(),
    };
  };

  // renderHeader() {
  //   return (
  //     <div className="Header container">
  //       <div id="Media">
  //         <div id="Media-Left">
  //           <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
  //         </div>
  //         <div id="Media-Body">
  //           <h3>Hacktiv8 Meetup</h3>
  //           <p>Location Jakarta</p>
  //           <p>Members 1078</p>
  //           <p>Organizer</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // renderNextMeetup() {
  //   return (
  //     <div className="Next-Meetup container">
  //       <h3>Next Meetup</h3>
  //       <p>Location Jakarta</p>
  //       <p>Members 1078</p>
  //       <p>{this.state.tanggal}</p>
  //     </div>
  //   );
  // }

  // renderAboutMeetup() {
  //   return (
  //     <div className="About-Meetup container">
  //       <h3>About Meetup</h3>
  //       <p>Come and meet other developer interest in the Javascpit</p>
  //     </div>
  //   );
  // }

  renderMembers() {
    return (
      <div className="Members container">
        <h3>Members</h3>
        <p>Location Jakarta</p>
        <p>Members 1078</p>
        <p>Organizer</p>
      </div>
    );
  }

  renderPastMeetup() {
    return (
      <div className="Past-Meetup container">
        <h3>Next Meetup</h3>
        <span>See All</span>
        {/* <CardGroup>
          <Card>
            <CardBody>
              <CardTitle>27 November 2017</CardTitle>
              <hr />
              <CardSubtitle>
                #39 JakartaJS April Meetup with kumparan
              </CardSubtitle>
              <br />
              <CardText>139 went</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>27 October 2017</CardTitle>
              <hr />
              <CardSubtitle>
                #39 JakartaJS April Meetup with BliBli
              </CardSubtitle>
              <br />
              <CardText>113 went</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>27 September 2017</CardTitle>
              <hr />
              <CardSubtitle>
                #39 JakartaJS April Meetup with Hacktiv8
              </CardSubtitle>
              <br />
              <CardText>110 went</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
        </CardGroup> */}
      </div>
    );
  }

  renderFooter() {
    return (
      <div className="Footer container">
        <hr />
        <br /><br />.
        <p>&copy; Copyright Hacktiv8 2018</p>
        <br />
      </div>
    );
  }

  render() {
    return (
      <div className='root'>
        <NavbarQTemu/>
        <Header/>    
        <NextMeetup/>
        <AboutMeetup/>
        <Members/>
        {/* {this.renderNextMeetup()} */}
        {/* {this.renderAboutMeetup()} */}
        {/* {this.renderMembers()} */}
        {this.renderPastMeetup()}
        {this.renderFooter()}
      </div>
    );
  }
}


// Session 5 - PROPS
// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// export default class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       peoples: [
//         {
//           name: 'Obi Wan',
//           status: 'Jedi'
//         },
//         {
//           name: 'Luke Skywalker',
//           status: 'Padawan'
//         }
//       ]
//     }
//   }
//
//   render () {
//     return (
//       <ListPeople people={this.state.peoples} />
//     )
//   }
// }
//
// export class ListPeople extends Component {
//   constructor (props) {
//     super(props)
//
//     this.state ={
//       orang: props.people
//     }
//   }
//
//   renderChild() {
//     return this.props.people.map((data, index) => {
//       return (
//         <ul key={index}>
//           {data.name}
//         </ul>
//       )
//     })
//   }
//
//   // cara lain:
//   // renderChild() {
//   //   return this.props.people.map((data) => (
//   //     <ul>
//   //       {data.name}
//   //     </ul>
//   //   ))
//   // }
//
//
//   render () {
//     return this.renderChild();
//   }
// }

// export default class App extends Component {
//   constructor () {
//     super();
//
//     this.state = {
//       peoples: [
//         {
//           name: 'Obi Wan',
//           status: 'Jedi'
//         },
//         {
//           name: 'Luke Skywalker',
//           status: 'Padawan'
//         }
//       ],
//     };
//   };
//
//   render() {
//     return (
//       <ListPeople people={this.state.peoples} />
//     );
//   };
// };
//
// export class ListPeople extends Component {
//   constructor (props) {
//     super(props);
//
//     let nama = props.people.map((data) => {
//       return data.name.toLowerCase();
//     })
//
//     let status = props.people.map((data) => {
//       return data.status.toUpperCase();
//     })
//
//     this.state = {
//       orang: props.people,
//       nama: nama,
//       status: status,
//     };
//   };
//
//   renderChild() {
//     console.log('nama', this.state.nama);
//     console.log('status', this.state.status);
//     return this.props.people.map((data, index) => {
//       return (
//         <ul key={index}>
//           {data.name}
//           {data.status}
//         </ul>
//       );
//     });
//   };
//
//   // cara lain:
//   // renderChild() {
//   //   return this.props.people.map((data) => (
//   //     <ul>
//   //       {data.name}
//   //     </ul>
//   //   ));
//   // };
//
//   // this.props.people(p => <li>{name}</li>)
//
//   render() {
//     return this.renderChild();
//   }
// }
//
// ListPeople
