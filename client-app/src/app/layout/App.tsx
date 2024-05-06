import axios from 'axios';
import {useEffect, useState} from "react";
import {Container, List} from "semantic-ui-react";
import {Activity} from '../models/activity';
import NavBar from './NavBar';

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data)
            })
    }, []);
    return (
        <>
            <NavBar/>
            <Container style={{marginTop: '7em'}}>
                <List>
                    {activities.map((activity: Activity) => (
                        <List.Item key={activity.id}>
                            {activity.title}
                        </List.Item>
                    ))}
                </List>
            </Container>
        </>
    )
}

export default App
