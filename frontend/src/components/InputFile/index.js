import React, { useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import api from '~/services/api';
import { Container } from './styles';

export default function InputFile({
  label,
  setFileID,
  setFileName,
  fileName,
  fileID,
}) {
  const { registerField } = useField('file');

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, name } = response.data;

    setFileID(id);
    setFileName(name);

    // setFile(id);
    // setFilename(name);
  }

  return (
    <Container>
      {label && <span>{label}</span>}
      <label htmlFor="file">
        <div>{fileName}</div>
        <input
          type="file"
          id="file"
          accept="image/jpeg,image/gif,image/png,.doc, .docx,.ppt, .pptx,.txt,.pdf"
          data-file={fileID}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

InputFile.propTypes = {
  label: PropTypes.string.isRequired,
  setFileID: PropTypes.func.isRequired,
  setFileName: PropTypes.func.isRequired,
  fileName: PropTypes.string,
  fileID: PropTypes.number,
};
