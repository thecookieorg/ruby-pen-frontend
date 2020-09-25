import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AiOutlineFileAdd, AiOutlineFolderAdd } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import axios from 'axios';
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
  const [projectFiles, setProjectFiles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4567/all_files')
    .then((res) => {
      console.log(res);

      setProjectFiles(res.data);
    })
    .catch((err) => console.log(err));
  }, []);

  function renderProjectFiles(projectFiles) {
    if (projectFiles.length > 0) {
      return (
        <div className="card" style={{border: 'none'}}>
          <ul className="list-group list-group-flush">
            {
              projectFiles.map((file) => (
                <li 
                  key={file} 
                  className="list-group-item files-from-server" 
                >
                  {file} <BiChevronRight />
                </li>
              ))
            }
          </ul>
        </div>
      )
    }
  }

  return (
    <>
      <Navbar />

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-2">
            <div className="card" style={{borderRadius: 0, backgroundColor: '#263238'}}>
              <div className="card-body">
                {/* <button className="btn btn-link"><AiOutlineFolderAdd size="2em" /></button> */}
                <button className="btn btn-link" onClick={() => setModalShow(true)}><AiOutlineFileAdd size="2em" /></button>
                <hr />
                <p style={{color: '#546E7A'}}>Project files</p>

                {renderProjectFiles(projectFiles)}
              </div>
            </div>
          </div>
          <div className="col-md-6 h-100 d-inline-block">
            <CodeMirror
              value="puts 'Hello there'"
              options={{
                mode: 'ruby',
                theme: 'material',
                lineNumbers: true,
                tabSize: 2,
              }}
              onChange={(editor, data, value) => {
              }}
            />
          </div>
          <div className="col-md-4">
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
