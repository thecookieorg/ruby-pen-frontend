import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AiOutlineFileAdd, AiOutlineFolderAdd } from 'react-icons/ai';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import Navbar from './common/Navbar';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Folder
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input 
          type="text"
          placeholder="Name your folder"
          className="form-control"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="success">Create Folder</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar />

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{borderRadius: 0, backgroundColor: '#263238'}}>
              <div className="card-body">
                <button className="btn btn-link" onClick={() => setModalShow(true)}><AiOutlineFolderAdd size="2em" /></button>
                <button className="btn btn-link"><AiOutlineFileAdd size="2em" /></button>
                <hr />
                <p style={{color: '#546E7A'}}>Folders and files</p>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <CodeMirror
              value="puts 'Hello there'"
              options={{
                mode: 'ruby',
                theme: 'material',
                lineNumbers: true,
                tabSize: 2
              }}
              onChange={(editor, data, value) => {
              }}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card" style={{borderRadius: 0, backgroundColor: '#263238'}}>
              <div className="card-body">
                <p style={{color: '#546E7A'}}>Console</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;
