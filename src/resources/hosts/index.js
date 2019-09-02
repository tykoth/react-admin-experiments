import PersonIcon from '@material-ui/icons/People';
// import HostList from './HostList';
import HostCreate from './HostCreate';
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
import HostList from './HostList';

export default {
    create:HostCreate,
    list: HostList,
    show: ShowGuesser,
    edit: EditGuesser,
    icon: PersonIcon,
};
