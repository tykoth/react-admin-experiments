import React, { Component } from "react";
import { 
    Admin, 
    Resource, 
    // ListGuesser, 
    ShowGuesser, 
    EditGuesser 
} from "react-admin";
import ListGuesser from './components/ListGuesser';
import AdList from './components/AdList';
import resources from './resources/';
import customRoutes from './routes';
import authProvider from './authProvider';
import sagas from './sagas';
import themeReducer from './themeReducer';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import englishMessages from './i18n/en';
import dexieDataProxiver from './providers/dexie'
import laravel from "./providers/laravel";
import redmine from "./providers/redmine";

/**
 * Locale language transaltion provider.
 *
 *
 * @param locale
 */
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

    /**
     * Why you have asnc in componentWillMount?
     */
    async componentWillMount() {
        // const dataProvider = dexieDataProxiver;


        const dataProvider = dexieDataProxiver;
        this.setState({ dataProvider });
    }

    /**
     * Default render function.
     */
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
                // locale="en"
                i18nProvider={i18nProvider}
                style={{
                    height: "100%"
                }}
            >
            <Resource key="ads" name="ads" {...{
                list:AdList,
                edit:EditGuesser,
                show:ShowGuesser
              }}/>
                {
                    [
                // '#redmine
                //   'projects',

                // admin_groups
                // admin_menu
                // admin_operation_log
                // admin_permissions
                // admin_role_menu
                // admin_role_permissions
                // admin_roles
                // admin_role_users
                // admins
                // admin_user_permissions
                // admin_users

                // '#app'
                // 'attendances',
                // 'attendance_settings',
                // 'client_contacts',
                // 'client_details',
                // 'conversation',
                // 'conversation_reply',
                // 'currencies',
                // 'custom_field_groups',
                // 'custom_fields',
                // 'custom_fields_data',
                // 'email_notification_settings',
                // 'employee_details',
                // 'employee_teams',
                // 'estimate_items',
                // 'estimates',
                // 'event_attendees',
                // 'events',
                // 'expenses',
                // 'file_storage_settings',
                // 'holidays',
                // 'invoice_items',
                // 'invoices',
                // 'invoice_settings',
                // 'issues',
                // 'language_settings',
                // 'lead_files',
                // 'lead_follow_up',
                // 'leads',
                // 'lead_sources',
                // 'lead_status',
                // 'leaves',
                // 'leave_types',
                // 'log_time_for',
                // 'ltm_translations',
                // 'message_settings',
                // 'migrations',
                // 'modules',
                // 'module_settings',
                // 'notices',
                // 'notifications',
                // 'offline_payment_methods',
                // 'organisation_settings',
                // 'packages',
                // 'packages_buy',
                // 'packages_buy_status',
                // 'paghiper_transactions',
                // 'password_resets',
                // 'payment_gateway_credentials',
                // 'payments',
                // 'permission_role',
                // 'permissions',
                // 'products',
                // 'project_activity',
                // 'project_category',
                // 'project_files',
                // 'project_members',
                // 'project_milestones',
                // 'projects',
                // 'project_template_members',
                // 'project_templates',
                // 'project_template_tasks',
                // 'project_time_logs',
                // 'proposal_items',
                // 'proposals',
                // 'push_subscriptions',
                // 'quotation_items',
                // 'quotations',
                // 'roles',
                // 'role_user',
                // 'slack_settings',
                // 'smtp_settings',
                // 'sticky_notes',
                // 'sub_tasks',
                // 'taskboard_columns',
                // 'task_comments',
                // 'tasks',
                // 'taxes',
                // 'teams',
                // 'theme_settings',
                // 'ticket_agent_groups',
                // 'ticket_channels',
                // 'ticket_groups',
                // 'ticket_replies',
                // 'ticket_reply_templates',
                // 'tickets',
                // 'ticket_tag_list',
                // 'ticket_tags',
                // 'ticket_types',
                // 'universal_search',
                // 'user_activities',
                // 'user_invites',
                // 'users',
                // 'users_chat',

// '#laravel-voyager'                
// 'blog_posts',
// 'cards',
// 'categories',
// 'data_rows',
// 'data_types',
// 'enquiries',
// 'form_inputs',
// 'forms',
// 'menu_items',
// 'menus',
// 'migrations',
// 'pages',
// 'password_resets',
// 'permission_role',
// 'permissions',
// 'posts',
// 'roles',
// 'settings',
// 'translations',
// 'user_roles',
// 'users',
// 'ads',
// 'voyager_poll_answers',
// 'voyager_poll_answers_users',
// 'voyager_poll_questions',
// 'voyager_polls',
// 'voyager_theme_options',
// 'voyager_themes',
                ].map(resourceName => 
                <Resource key={resourceName} name={resourceName} {...{
                  list:ListGuesser,
                  edit:EditGuesser,
                  show:ShowGuesser
                }}/>)}
                <Resource name="posts"  {...resources.posts} />
                <Resource name="servers"  {...resources.servers} />
                
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
