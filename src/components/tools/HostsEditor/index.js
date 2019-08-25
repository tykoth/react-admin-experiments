import React from 'react';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { translate, Title } from 'react-admin';
import hosts from './data';

const HostsEditor = ({ translate }) => (
    <Card>
        <Title title={translate('resources.hosts.name')} />
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        {translate('resources.hosts.fields.name')}
                    </TableCell>
                    <TableCell />
                </TableRow>
            </TableHead>
            <TableBody>
                {hosts.map(host => (
                    <TableRow key={host.ip}>
                        <TableCell>{translate(host.ip)}</TableCell>
                        <TableCell>{translate(host.host)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Card>
);

export default translate(HostsEditor);
