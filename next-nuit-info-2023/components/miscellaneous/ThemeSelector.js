import { Button } from "@mui/material";

export default function ThemeSelector({setTheme}) {
  return (
    <>
        <Button variant="contained" color="primary" onClick={() => setTheme('primary')}>Primary</Button>
        <Button variant="contained" color="secondary" onClick={() => setTheme('secondary')}>Secondary</Button>
    </>
  );
}