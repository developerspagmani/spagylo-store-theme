import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Modal, Button } from "react-bootstrap"
import Icon from "../../Icon"

const ModalComponent = () => {
  const [modal, setModal] = React.useState(false)

  const onClick = () => {
    setModal(!modal)
  }
  return (
    <div id="modal" className="docs-item element">
      <h5 className="text-uppercase mb-4">Modal</h5>
      <div className="docs-desc">
        <p className="lead">
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content. See
          the{" "}
          <a href="https://react-bootstrap.github.io/components/modal/">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
      </div>
      <div className="mt-5">
        <Button onClick={onClick} variant="dark">
          Launch demo modal
        </Button>
        <Modal show={modal} onHide={onClick}>
          <Modal.Header className="text-center">
            <Modal.Title className="w-100" as="h2">
              Modal heading
            </Modal.Title>
            <Button
              variant="dark"
              className="close modal-close p-0"
              onClick={onClick}
            >
              <Icon
                icon="close-1"
                className="w-100 h-100 svg-icon-light align-middle"
              />
            </Button>
          </Modal.Header>
          <Modal.Body className="text-center">
            <p className="text-muted">
              <strong>Pellentesque habitant morbi tristique</strong> senectus et
              netus et malesuada fames ac turpis egestas. Vestibulum tortor
              quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
              eu libero sit amet quam egestas semper.{" "}
              <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
              leo. Quisque sit amet est et sapien ullamcorper pharetra.
              Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>,
              ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
              condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
              dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis.
              Ut felis.
            </p>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="outline-dark" onClick={onClick}>
              Close
            </Button>
            <Button onClick={onClick} variant="dark">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="mt-4">
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow}
          className="rounded shadow p-4"
        >
          {highlightCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default ModalComponent

const highlightCode = `import { Modal, Button } from 'react-bootstrap'

export default () => {
    const [modal, setModal] = React.useState(false)

    const onClick = () => {
        setModal(!modal)
    }
    return (
        <>
            <Button onClick={onClick}>Launch demo modal</Button>
            <Modal show={modal} onHide={onClick}>
              <Modal.Header className="text-center">
                <Modal.Title className="w-100" as="h2">
                  Modal heading
                </Modal.Title>
                <Button
                  variant="dark"
                  className="close modal-close p-0"
                  onClick={onClick}
                >
                  <Icon
                    icon="close-1"
                    className="w-100 h-100 svg-icon-light align-middle"
                  />
                </Button>
              </Modal.Header>
              <Modal.Body>
                  <p className="text-muted">
                  <strong>Pellentesque habitant morbi tristique</strong> senectus et
                  netus et malesuada fames ac turpis egestas. Vestibulum tortor
                  quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                  eu libero sit amet quam egestas semper.{" "}
                  <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
                  leo. Quisque sit amet est et sapien ullamcorper pharetra.
                  Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>,
                  ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                  condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
                  dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis.
                  Ut felis.
                  </p>
              </Modal.Body>
              <Modal.Footer className="justify-content-center">
                <Button variant="outline-dark" onClick={onClick}>
                  Close
                </Button>
                <Button onClick={onClick} variant="dark">
                  Save changes
                </Button>
              </Modal.Footer>
            </Modal>
        <>
    )
}`
