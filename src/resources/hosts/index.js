import PersonIcon from '@material-ui/icons/People'
import HostEdit from './HostEdit'
import HostCreate from './HostCreate'
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin'
import HostList from './HostList'

export default {
  create: HostCreate,
  list: HostList,
  show: ShowGuesser,
  edit: HostEdit,
  icon: PersonIcon
}
