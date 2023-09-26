import { Stack, useTheme } from '@mui/material';
import { categories } from '../utils/constants';

type SidebarProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar = ({ selected, setSelected }: SidebarProps) => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? '#eee' : '#1a1a1a';
  const bgColor = theme.palette.mode === 'dark' ? '#b31a50' : '#c44d77';

  return (
    <Stack
      direction="row"
      sx={{
        marginRight: '16px',
        overflowY: 'auto',
        flexDirection: { md: 'column' },
        height: { xs: 'auto', md: '95%' },
      }}
    >
      {categories.map((cat) => {
        return (
          <button
            key={cat.name}
            className="catergory-btn"
            onClick={() => setSelected(cat.name)}
            style={{
              backgroundColor: selected === cat.name ? bgColor : '',
            }}
          >
            <span style={{ color: textColor, marginRight: '16px' }}>
              {cat.icon}
            </span>
            <span style={{ color: textColor, fontSize: '14px' }}>
              {cat.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
