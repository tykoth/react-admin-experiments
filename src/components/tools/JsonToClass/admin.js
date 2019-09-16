import React from 'react'
import { Admin, Resource, List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput } from 'react-admin'
import { Card, Grid } from '@material-ui/core'
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'
import generator from '../../../providers/generator'
// import BookIcon from '@material-ui/core/svg-icons/action/book';
import BookIcon from '@material-ui/icons/Person';

class AdminPreview extends React.Component {
  render () {
    const scope = { BookIcon, generator, Admin, Resource, List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput }
    const code = `
    <Admin dataProvider={generator('call', 'generator')}>
        <Resource 
        name="posts" 
        list={(props) => (
            <List {...props}>
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="title" />
                    <DateField source="published_at" />
                    <TextField source="average_note" />
                    <TextField source="views" />
                    <EditButton basePath="/posts" />
                </Datagrid>
            </List>
        )} 
        edit={(props) => (
            <Edit {...props}>
                <SimpleForm>
                    <DisabledInput source="id" />
                    <TextInput source="title" />
                    <TextInput source="teaser" options={{ multiLine: true }} />
                    <LongTextInput source="body" />
                    <DateInput label="Publication date" source="published_at" />
                    <TextInput source="average_note" />
                    <DisabledInput label="Nb views" source="views" />
                </SimpleForm>
            </Edit>
        )} 
        create={(props) => (
            <Create title="Create a Post" {...props}>
                <SimpleForm>
                    <TextInput source="title" />
                    <TextInput source="teaser" options={{ multiLine: true }} />
                    <LongTextInput source="body" />
                    <TextInput label="Publication date" source="published_at" />
                    <TextInput source="average_note" />
                </SimpleForm>
            </Create>
        )} 
        icon={BookIcon}/>
    </Admin>
        `
    return (
      <Card>

        <LiveProvider code={code} scope={scope}>
          <Grid container spacing={16}>

            <Grid item xs={4}><LiveEditor /></Grid>
            <Grid item xs={4}><LivePreview /></Grid>
          </Grid>

        </LiveProvider>

      </Card>
    )
  }
}

export default AdminPreview
