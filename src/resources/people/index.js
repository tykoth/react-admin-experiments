import PersonIcon from '@material-ui/icons/People';

import { PersonShow } from './PersonShow';
import PersonList from './PersonList';
import PersonCreate from './PersonCreate';
import PersonEdit from './PersonEdit';

// import { ListGuesser, ShowGuesser } from 'react-admin';
// import { PersonList } from './PersonList';

export default {
    list: PersonList,
    create: PersonCreate,
    edit: PersonEdit,
    show:PersonShow,
    // edit: EditGuesser,
    icon: PersonIcon,
};
