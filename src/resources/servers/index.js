import PersonIcon from '@material-ui/icons/People';
// import ServerList from './ServerList';
import ServerCreate from './ServerCreate';
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';

export default {
    create:ServerCreate,
    list: ListGuesser,
    show: ShowGuesser,
    edit: EditGuesser,
    icon: PersonIcon,
};
