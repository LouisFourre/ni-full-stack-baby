import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

export default function Footer() {
  return (
    <div className="flex flex-row">
      <Divider sx={{ my: 2 }} />
      <div className="flex flex-row justify-between w-full bg-green-500">
        <div className="flex flex-row">
          <ListItem nested sx={{ width: { xs: '50%', md: 140 }, margin: '0 10px 0 0' }}>
            <a href='https://github.com/LouisFourre/ni-full-stack-baby/tree/dev'>
              Source
            </a>
          </ListItem>

          <ListItem nested sx={{ width: { xs: '50%', md: 180 }, margin: '0 10px 0 0' }}>
            <a href='https://www.bing.com/ck/a?!&&p=b55bd77bb2220daeJmltdHM9MTcwMTkwNzIwMCZpZ3UHBgCqNEjzCXk5_9vbzRwAgiL0E2Mi4wLjAuMywC5gEH_QEAAACZvwCHSzYBAA&ptn=3&ver=2&hsh=3&fclid=0c7fc3f1-8cd8-6ba9-23c0-d0208d9f6a7b&psq=chatgpt&u=aHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbGtpZS9tZXRob2QvcnVmZnNudWZpZWIv&ntb=1'>
              Approfondir
            </a>
          </ListItem>

          <ListItem nested sx={{ width: { xs: '50%', md: 180 }, marginRight: '10px' }}>
            <a href='https://github.com/LouisFourre/ni-full-stack-baby/tree/dev'>
              GitHub
            </a>
          </ListItem>
        </div>

        <figure sx={{ width: { xs: '50%', md: 240 }, marginRight: '20px' ,marginBottom: '20px' }}>
          <a href='https://www.bing.com/ck/a?!&&p=3b8280ba01ddbe6dJmltdHM9MTcwMTkwNzIwMCZpZ3VpZD0wYzdmYzNmMS04Y2Q4LTZiYTktMjNjMC1kMDIwOGQ5ZjZhN2ImaW5zaWQ9NTIxMQ&ptn=3&ver=2&hsh=3&fclid=0c7fc3f1-8cd8-6ba9-23c0-d0208d9f6a7b&psq=reseau+action+climat&u=a1aHR0cHM6Ly9yZXNlYXVhY3Rpb25jbGltYXQub3JnLw&ntb=1'>
            <img src={"R.png"} alt="Description de l'image" width={'60px'}/>
          </a>
        </figure>
      </div>
    </div>
  );
}
