import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import resources from './resources/';
import customRoutes from './routes';


import authProvider from './authProvider';
import sagas from './sagas';
import themeReducer from './themeReducer';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import englishMessages from './i18n/en';
import dexieDataProxiver from './providers/dexie'



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
          height: "100%"
        }}
      >


        <Resource name="posts"  {...resources.posts} />
        <Resource name="users" />
        <Resource name="people" {...resources.people} />
        <Resource name="tags" {...resources.tags} />
        <Resource name="customers" {...resources.visitors} />
        <Resource name="invoices" {...resources.invoices} />
        <Resource name="reviews" {...resources.reviews} />
        <Resource name="categories" {...resources.categories} />
        <Resource name="products" {...resources.products} />
      </Admin>
    );
  }



}

export default App;