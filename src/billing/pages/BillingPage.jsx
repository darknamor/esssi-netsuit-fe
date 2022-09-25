import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { BillingLayaout } from '../layout/BillingLayaout';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/billing/thunks';

export const BillingPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.billing);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <BillingLayaout>
      {!!active ? <NoteView /> : <NothingSelectedView />}
      <Tooltip title='Nueva entrada' placement='left-start'>
        <IconButton
          onClick={onClickNewNote}
          size='large'
          disabled={isSaving}
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
      </Tooltip>
    </BillingLayaout>
  );
};
