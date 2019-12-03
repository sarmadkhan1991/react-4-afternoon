import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
    
  }

  componentDidMount () {
    Axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => {
      this.setState( {
        students: res.data
      } )
    })
  }

  render() {
    console.log(this.state);
    const {students} = this.state;
    const mappedStudents = students.map(student => {
      return <Link to={`/student/${student.id}`} key={student.id}><h3>{student.first_name} {student.last_name}</h3></Link> 
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    )
  }
}