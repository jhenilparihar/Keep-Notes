import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };

  let updateNote = async () => {
    fetch(`/api/notes/${id}/update/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
  }

  let deleteNode = async () => {
    fetch(`/api/notes/${id}/delete/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    navigate('/')
  }

  let handleSubmit = () => {
    updateNote()
    navigate('/');
  }

  return (
    <div className="note">
      <div className="note-header">
          <ArrowLeft onClick={handleSubmit} />
          <button onClick={deleteNode}> Delete</button>
          
      </div>
      <textarea
        defaultValue={note?.body}
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
      ></textarea>
    </div>
  );
};

export default NotePage;
