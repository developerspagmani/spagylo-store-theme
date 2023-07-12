import React from "react"
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css"
import InnerImageZoom from "react-inner-image-zoom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Col, Row } from "react-bootstrap"
import dummyProduct from "../../../data/dummyproduct.json"

const ReactMagnifier = () => {
  return (
    <div id="reactmagnifier" className="docs-item element">
      <h5 className="text-uppercase mb-4">React Inner Image Zoom</h5>
      <div className="docs-desc">
        <p className="lead">
          React plugin to enlarge images on touch, click, or mouseover. For a
          complete reference, see{" "}
          <a href="https://github.com/laurenashpole/react-inner-image-zoom">
          Inner Image Zoom's docs
          </a>
          .
        </p>
      </div>
      <Row className="mt-5">
        <Col md="6">
          <InnerImageZoom
            hideHint
            src={dummyProduct.img.detail[0].img}
            alt={dummyProduct.img.detail[0].alt}
            zoomSrc={dummyProduct.img.detail[0].img}
            zoomType="hover"
            className="cursor-pointer"
          />
        </Col>
      </Row>
      <div className="mt-5">
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

export default ReactMagnifier

const highlightCode = `
import Magnifier from "react-magnifier"

const Component = () => {
    return (
        <Magnifier 
            mgShowOverflow={false} 
            mgWidth={2000} 
            mgHeight={2000} 
            className="img-fluid" 
            src="/image/src" 
            alt="image 
            description" 
            zoomFactor={.11} 
            style={{ cursor: 'pointer' }} 
        />
    )
}

export default Component
`
