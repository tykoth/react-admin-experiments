//resources/Events/index.js
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
import EventEdit from './EventEdit';
import EventCreate from './EventCreate';
import EventList from './EventList';
import EventShow from './EventShow';

export default {
    create:EventCreate,
    list: EventList,
    show: EventShow,
    edit: EventEdit
};
