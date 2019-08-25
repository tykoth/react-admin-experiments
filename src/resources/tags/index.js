import TagEdit from './TagEdit';
import TagList from './TagList';
import TagShow from './TagShow';
import TagCreate from './TagCreate';
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';

export default {
    edit: TagEdit,
    list: ListGuesser,
    show: TagShow,
    create:TagCreate
};
