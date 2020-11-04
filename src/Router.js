import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {NewTopic} from './view/NewTopic';
import SignIn from './view/SignIn';
import SignUp from './view/SignUp'
const SetupRouter =  ()=>{


    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <NewTopic></NewTopic>
                </Route>
                <Route exact path="/signUp">
                    <SignUp></SignUp>
                </Route>
                <Route exact path="/signIn">
                    <SignIn></SignIn>
                </Route>

            </Switch>
        </Router>
    )
}


export default SetupRouter;