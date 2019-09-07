const {generateTemplateFiles} = require('generate-template-files');

const config = require('../package.json');

generateTemplateFiles([
    {
        option: 'Create React-Admin Resource',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/react-admin/resources/',
        },
        stringReplacers: ['__resource__', '__model__'],
        output: {
            path: './src/resources/__resource__(lowerCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },
]);