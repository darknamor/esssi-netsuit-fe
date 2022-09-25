import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../store/billing';

export const SideBarItem = ({ title = '', body, status, id, date, fileUrls = [] }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, status, id, date, fileUrls }));
  };

  const newTitle = useMemo(() => {
    return date.length > 17 ? date.substring(0, 17) + '...' : new Date(date).toLocaleString();
  }, [date]);

  const newStatus = useMemo(() => {
    switch (status) {
      case 'new':
        return { text: 'Nuevo', color: '#404040' };
      case 'progress':
        return { text: 'En progreso', color: '#ff9900' };
      case 'error':
        return { text: 'Carga con errores', color: '#ff3300' };
      case 'complete':
        return { text: 'Carga completa', color: '#009900' };
      default:
        return { text: 'Nuevo', color: '#404040' };
    }
  }, [status]);

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={onClickNote}
        sx={{
          ':hover': { opacity: 0.9, backgroundColor: ' #c2c2d6' },
        }}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={<Typography style={{ color: `${newStatus.color}` }}>{newStatus.text}</Typography>} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
