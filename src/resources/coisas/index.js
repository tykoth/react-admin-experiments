//resources/Coisas/index.js
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
import CoisaEdit from './CoisaEdit';
import CoisaCreate from './CoisaCreate';
import CoisaList from './CoisaList';
import CoisaShow from './CoisaShow';

export default {
    create:CoisaCreate,
    list: CoisaList,
    show: CoisaShow,
    edit: CoisaEdit
};
