import PersonIcon from '@material-ui/icons/People';
// import HostList from './HostList';
import HostCreate from './HostCreate';
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';

export default {
    create:HostCreate,
    list: ListGuesser,
    show: ShowGuesser,
    edit: EditGuesser,
    icon: PersonIcon,
};
