import React, { useState } from 'react';
// import AboutTopic from '../components/new-topic/AboutTopic';
// import Regras from '../components/new-topic/Regras';
import CreateTopic from '../components/new-topic/CreateTopic';


export const NewTopic = (props)=>{
    const [createTopicState, setCreateTopicState] = useState(true);

    return(
        <div>
            {createTopicState && <CreateTopic prop={createTopicState,setCreateTopicState}></CreateTopic>}
            {/* <Regras></Regras> */}
            {/* <AboutTopic></AboutTopic> */}
        </div>
    )
}