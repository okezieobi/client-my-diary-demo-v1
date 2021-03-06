import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Dashboard from '../templates/Dashboard';
import Form from '../templates/Form';
import env from '../../utils/env';
import authServices from '../Auth';

export default function Edit() {
  const [reqErr, setReqErr] = useState('');
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [btnState, setBtnState] = useState(false);
  const [entry, setEntry] = useState({});
  const entryId = JSON.parse(localStorage.getItem('entryId'));
  const auth = authServices.useAuth();
  const history = useHistory();
  const url = env.backendAPI(`entries/${entryId}`);

  function handleTitleChange(value) {
    setTitle(value);
  }

  function handleBodyChange(value) {
    setBody(value);
  }

  useEffect(() => {
    auth.getResource(url)
      .then((response) => {
        if (response) {
          if (response.error) setReqErr(response.error);
          else setEntry(response.data.entry);
        }
      }).catch((err) => { throw err; });
  }, [auth, url]);

  function handleSubmit(event) {
    setBtnState(true);

    const inputData = {
      title, body,
    };

    auth.setResource(url, inputData, 'PUT')
      .then(() => {
        history.push('/entries');
      }).catch((err) => {
        setBtnState(false);
        throw err;
      });

    event.preventDefault();
  }

  return (
    <Dashboard homeSelect>
      <Form
        handleSubmit={handleSubmit}
        setTitle={handleTitleChange}
        setBody={handleBodyChange}
        reqErr={reqErr}
        formBtnState={btnState}
        entryTitle={entry.title}
        entryBody={entry.body}
      />
    </Dashboard>
  );
}
