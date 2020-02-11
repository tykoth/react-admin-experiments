//resources/Gitlogs/index.js
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
import GitLogEdit from './GitLogEdit';
import GitLogCreate from './GitLogCreate';
import GitLogList from './GitLogList';
import GitLogShow from './GitLogShow';

export default {
    create:GitLogCreate,
    list: GitLogList,
    show: GitLogShow,
    edit: GitLogEdit
};
