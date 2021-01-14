import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core';


import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import HomeIcon from '@material-ui/icons/Home';

const Lista = () => {
    return (
        <div>
            <List component="nav">

                <ListItem button selected>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Menú Principal" />
                </ListItem>


                <ListItem button >
                    <ListItemIcon>
                      <OndemandVideoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pantallas"/>
                </ListItem>


                <ListItem button>
                    <ListItemIcon>
                      <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Listas"/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                    <PermMediaIcon />
                    </ListItemIcon>
                    <ListItemText primary="Multimedias"/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                   <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Usuarios"/>
                </ListItem>

        <Divider />

        <ListItem button>
            <ListItemIcon>
            <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText primary="Logout"/>
        </ListItem>
            </List>
        </div>
    )
}

export default Lista;