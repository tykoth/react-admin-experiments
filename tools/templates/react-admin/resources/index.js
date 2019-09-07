//resources/__resource__/index.js
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
import __model__Edit from './__model__Edit';
import __model__Create from './__model__Create';
import __model__List from './__model__List';
import __model__Show from './__model__Show';

export default {
    create:__model__Create,
    list: __model__List,
    show: __model__Show,
    edit: __model__Edit
};
