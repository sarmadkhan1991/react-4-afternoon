import React from 'react';
import home from './components/Home/Home';
import about from './components/About/About';
import { Switch, Route } from 'react-router-dom';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default (
    <Switch>
        <Route exact path='/' component={home}/>
        <Route path='/about' component={about}/>
        <Route path='/classlist/:class' component={ClassList} />
        <Route path='/student/:id' component={Student}/>
    </Switch>
)