import React from 'react';
import { Title, TabbedForm, SimpleForm, FormTab, TextInput } from 'react-admin'
import { Card, Grid } from '@material-ui/core';


class Experiments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response:null
        }
    }

    fetchData(url)
    {

    }
    render() {
        const { response } = this.state;
        return (
            
            <Card>
            <Title title="Experiments"/>
            <Grid container spacing={16}>


            <Grid item xs={6}>

            <SimpleForm 
                    save={(data) => {
                    alert(JSON.stringify(data));

                    if(data.url && data.url != "")
                    {
                        fetch(data.url).then(response => response.text()).then(response => {
                            this.setState({response})
                        })
                    }
                    return true;
                }}
                    // toolbar={<div />}
                >
                <TextInput fullWidth source="url" />
                </SimpleForm>
            </Grid>
            
            <Grid item xs={6}>
                {response}
            </Grid>
            </Grid>

            </Card>
        );
    }
}

export default Experiments