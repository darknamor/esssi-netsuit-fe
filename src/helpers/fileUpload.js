export const fileUpload = async (file) => {
  if (!file) throw new Error('No tenemos ningúna archivo a subir');

  const cloudUrl = '';

  const formData = new FormData();
  formData.append('upload_preset', '');
  formData.append('file', file);

  try {
    return;
  } catch (error) {}
};
