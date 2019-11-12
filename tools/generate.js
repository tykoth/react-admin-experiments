const {generateTemplateFiles} = require('generate-template-files');

const config = require('../package.json');

generateTemplateFiles([
    {
        option: 'Create Laravel Controller',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/laravel/',
        },
        stringReplacers: ['[% affirm_method %]','[% call_affirm %]','[% call_get_data %]','[% constructor %]','[% controller_extends %]','[% data_variable %]','[% get_data_method %]','[% index_route_name %]','[% model_name %]','[% model_name_class %]','[% model_name_plural %]','[% model_name_singular_variable %]','[% models_per_page %]','[% model_was_added %]','[% model_was_deleted %]','[% model_was_updated %]','[% namespace %]','[% on_store_setter %]','[% on_update_setter %]','[% relation_collections %]','[% request_variable %]','[% type_hinted_request_name %]','[% unexpected_error %]','[% upload_method %]','[% use_command_placeholder %]','[% view_variables_for_create %]','[% view_variables_for_edit %]','[% view_variables_for_index %]','[% view_variables_for_show %]','[% with_relations_for_show %]'],
        output: {
            path: './[% namespace %](lowerCase).php',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },
]);
// generateTemplateFiles([
//     {
//         option: 'Create React-Admin Resource',
//         defaultCase: '(pascalCase)',
//         entry: {
//             folderPath: './tools/templates/react-admin/resources/',
//         },
//         stringReplacers: ['__resource__', '__model__'],
//         output: {
//             path: './src/resources/__resource__(lowerCase)',
//             pathAndFileNameDefaultCase: '(pascalCase)',
//         },
//         onComplete: (results) => {
//             console.log(`results`, results);
//         },
//     },
// ]);