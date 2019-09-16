//resources/Projects/index.js
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
import ProjectEdit from './ProjectEdit';
import ProjectCreate from './ProjectCreate';
import ProjectList from './ProjectList';
import ProjectShow from './ProjectShow';

export default {
    create:ProjectCreate,
    list: ProjectList,
    show: ProjectShow,
    edit: ProjectEdit
};
