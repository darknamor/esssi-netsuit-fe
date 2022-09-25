import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks/useForm';
import { setActiveNote, startDeletingNote, startPreviewFile, startSaveNote, startUploadingFiles } from '../../store/billing';
import { Stack } from '@mui/system';

import { rows, columns } from '../../mocks/data';
import { NoteTable } from '../components/NoteTable';

const preview = { active: false };
export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: note, messageSaved, isSaving, visualizing } = useSelector((state) => state.billing);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return 'Entrada creada el : ' + newDate.toLocaleString();
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Entrada actualizada', messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
    Swal.fire('Entrada eliminada', dateString, 'success');
  };

  const previewFile = () => {
    dispatch(startPreviewFile());
  };
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
      className='animate__animated animate__fadeIn animate__faster'>
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button disabled={isSaving} onClick={onSaveNote} color='primary' sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container paddingBottom={2}>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un título'
          label='Título'
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='Realice una breve descripción del motivo de la carga'
          label='Descripción de carga'
          minRows={3}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container paddingBottom={2}>
        <Typography fontSize={20} fontWeight='light'>
          {'Cargar archivo'}
          <input
            type='file'
            multiple
            ref={fileInputRef}
            onChange={onFileInputChange}
            style={{ display: 'none' }}
            accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
          />

          <IconButton color='primary' disabled={isSaving} onClick={() => fileInputRef.current.click()}>
            <UploadOutlined />
          </IconButton>
        </Typography>
      </Grid>
      <Grid container paddingBottom={2}>
        <Stack direction='row' spacing={2}>
          <Button variant='contained' onClick={previewFile} disabled={visualizing}>
            Previsualizar
          </Button>
          <Button variant='contained' disabled={!visualizing}>
            Cargar a Netsuit
          </Button>
        </Stack>
      </Grid>
      {visualizing && (
        <Grid container>
          <NoteTable rows={rows} columns={columns} />
        </Grid>
      )}
      <Grid container justifyContent='end'>
        <Button onClick={onDelete} sx={{ mt: 2 }} color='error'>
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>
    </Grid>
  );
};
