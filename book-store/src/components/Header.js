import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


const Header = () => {

    const [value, setValue] = useState(0);

    return (
        <div>
            <AppBar sx={{ backgroundColor: '#232F3D' }} position='sticky'>
                <Toolbar>
                    <Typography>
                        <LibraryBooksIcon />
                    </Typography>

                    <Tabs sx={{ ml: "auto" }} textColor='inherit' indicatorColor='primary' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab label='Add Prodcut' />
                        <Tab label='About Us' />
                        <Tab label='Books' />
                    </Tabs>

                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Header
