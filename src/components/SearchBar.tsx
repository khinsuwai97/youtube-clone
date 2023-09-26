import { FormEvent, useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (term) {
      navigate(`/search/${term}`);
    }

    setTerm('');
  };

  return (
    <Paper
      component="form"
      onSubmit={onFormSubmit}
      sx={{
        borderRadius: '20px',
        border: '1px solid #525252',
        boxShadow: 'none',
        mr: { sm: 5 },
        pl: 2,
        bgcolor: '#fff',
      }}
    >
      <input
        placeholder="Search..."
        className="search-bar"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        aria-label="search"
        sx={{ p: '10px', color: 'red' }}
      >
        <SearchOutlinedIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
