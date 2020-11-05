import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {NewTopic} from './view/NewTopic';
import SignIn from './view/SignIn';
import SignUp from './view/SignUp';
import RecuperarSenha from './view/RecuperarSenha';
import Topic from './view/Topic';
import MainPage from './view/MainPage';

const SetupRouter =  ()=>{


    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage></MainPage>
                </Route>

                <Route exact path="/newTopic">
                    <NewTopic></NewTopic>
                </Route>

                <Route exact path="/signUp">
                    <SignUp></SignUp>
                </Route>

                <Route exact path="/signIn">
                    <SignIn></SignIn>
                </Route>

                <Route exact path="/recuperarSenha">
                    <RecuperarSenha></RecuperarSenha>
                </Route>

                <Route exact path="/topic">
                    <Topic></Topic>
                </Route>

            </Switch>
        </Router>
    )
}


export default SetupRouter;