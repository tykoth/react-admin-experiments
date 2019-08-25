import React, { Component } from "react";
import { Admin, Resource } from "react-admin";


import authProvider from './authProvider';
import sagas from './sagas';
import themeReducer from './themeReducer';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import englishMessages from './i18n/en';

 //foiegras aaa     a

 import people from './resources/people';
 import visitors from './resources/visitors';
import orders from './resources/orders';
import products from './resources/products';
import invoices from './resources/invoices';
import categories from './resources/categories';
import reviews from './resources/reviews';
import servers from './resources/servers';


// import posts from './resources/posts';
// import users from './resources/users';
import tags from './resources/tags';
// import comments from './resources/comments';

// import themeReducer from './themeReducer';
import dexieDataProxiver from './providers/dexie'


/**
 * Teste
 */

import PersonIcon from '@material-ui/icons/People';
import ServerList from './resources/servers/ServerList';
import ServerCreate from './resources/servers/ServerCreate';
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
import { PostList, PostEdit, PostCreate, PostShow } from './resources/posts';
import { UserList } from './resources/users';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
  
const i18nProvider = locale => {
  if (locale === 'fr') {
      return import('./i18n/fr').then(messages => messages.default);
  }

  if (locale === 'pt') {
    return import('./i18n/pt').then(messages => messages.default);
}

 

    // Always fallback on english
    return englishMessages;
};

class App extends Component {

  state = { dataProvider: null };

  async componentWillMount() {
    // this.restoreFetch = await fakeServerFactory(
    //     // process.env.REACT_APP_DATA_PROVIDER
    // );

    // const dataProvider = await dataProviderFactory(
    //     // process.env.REACT_APP_DATA_PROVIDER
    // );
    const dataProvider = dexieDataProxiver;
    this.setState({ dataProvider });
}


componentWillUnmount() {
  // this.restoreFetch();
}
  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
        return (
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>


        );
    }
    return (
      <Admin
          title="BETA ADMIN"
          dataProvider={dataProvider}
          customReducers={{ theme: themeReducer }}
          customSagas={sagas}
          customRoutes={customRoutes}
          authProvider={authProvider}
          dashboard={Dashboard}
          loginPage={Login}
          appLayout={Layout} 
          locale="en"
          i18nProvider={i18nProvider}
          style={{
            height:"100%"
          }}
      >
       

       <Resource 
            name="posts"
            icon={PostIcon}
            list={PostList}
          
            edit={PostEdit}
            create={PostCreate}
            show={PostShow}
        />        
        
        
        <Resource name="users" icon={UserIcon} list={UserList} />

      <Resource name="servers" {...{
        create:ServerCreate,
        list: ListGuesser,
        show: ShowGuesser,
        edit: EditGuesser,
        icon: PersonIcon,
    }} />

 <Resource name="people" {...people} />
 <Resource name="tags" {...tags} />
            {/* <Resource name="posts" {...posts} />, */}
            {/* <Resource name="comments" {...comments} />, */}
 
 



 
 <Resource name="customers" {...visitors} />
                <Resource
                    name="commands"
                    {...orders} 
                    options={{ label: 'Orders' }}
                />
                <Resource name="invoices" {...invoices} />
                <Resource name="reviews" {...reviews} />
                <Resource name="categories" {...categories} />
                <Resource name="products" {...products} />
      </Admin>
    );
  }



}

export default App;