import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';

export default function Footer() {
  const [color, setColor] = useState('neutral');

  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        color: 'white', // Set text color to white
        bgcolor: 'green', // Set background color to green
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
      }}
    >
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px', textAlign: 'left' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140 }, margin: '0 10px 0 0' }}>
            <a href='https://github.com/LouisFourre/ni-full-stack-baby/tree/dev'>
              <ListSubheader sx={{ fontWeight: 'xl', fontSize: '15px' }}>Source</ListSubheader>
            </a>
          </ListItem>

          <ListItem nested sx={{ width: { xs: '50%', md: 180 }, margin: '0 10px 0 0' }}>
            <a href='https://www.bing.com/ck/a?!&&p=b55bd77bb2220daeJmltdHM9MTcwMTkwNzIwMCZpZ3UHBgCqNEjzCXk5_9vbzRwAgiL0E2Mi4wLjAuMywC5gEH_QEAAACZvwCHSzYBAA&ptn=3&ver=2&hsh=3&fclid=0c7fc3f1-8cd8-6ba9-23c0-d0208d9f6a7b&psq=chatgpt&u=aHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbGtpZS9tZXRob2QvcnVmZnNudWZpZWIv&ntb=1'>
              <ListSubheader sx={{ fontWeight: 'xl', fontSize: '15px' }}>Approfondir</ListSubheader>
            </a>
          </ListItem>

          <ListItem nested sx={{ width: { xs: '50%', md: 180 }, marginRight: '10px' }}>
            <a href='https://github.com/LouisFourre/ni-full-stack-baby/tree/dev'>
              <ListSubheader sx={{ fontWeight: 'xl', fontSize: '15px' }}>GitHub</ListSubheader>
            </a>
          </ListItem>
        </List>

        <figure sx={{ width: { xs: '50%', md: 240 }, marginRight: '20px' ,marginBottom: '20px' }}>
          <a href='https://www.bing.com/ck/a?!&&p=3b8280ba01ddbe6dJmltdHM9MTcwMTkwNzIwMCZpZ3VpZD0wYzdmYzNmMS04Y2Q4LTZiYTktMjNjMC1kMDIwOGQ5ZjZhN2ImaW5zaWQ9NTIxMQ&ptn=3&ver=2&hsh=3&fclid=0c7fc3f1-8cd8-6ba9-23c0-d0208d9f6a7b&psq=reseau+action+climat&u=a1aHR0cHM6Ly9yZXNlYXVhY3Rpb25jbGltYXQub3JnLw&ntb=1'>
            <img src={"R.png"} alt="Description de l'image" width={'60px'}/>
          </a>
        </figure>
      </Box>
    </Sheet>
  );
}
