import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { BillingLayaout } from '../layout/BillingLayaout';
import { NothingSelectedView } from '../views';

export const BillingPage = () => {
  const dispatch = useDispatch();
  //const { isSaving, active } = useSelector((state) => state.journal);

  const onClickNewNote = () => {
    console.log('click');
    //dispatch(startNewNote());
  };

  return (
    <BillingLayaout>
      <NothingSelectedView />
      <IconButton
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </BillingLayaout>
  );
};
