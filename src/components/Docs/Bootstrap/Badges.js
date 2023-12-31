import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { Card, Badge } from "react-bootstrap"

const Badges = () => {
  return (
    <div id="badges" className="docs-item element">
      <h5 className="text-uppercase mb-4">Badge</h5>
      <div className="docs-desc">
        <p className="lead">
          Small count and labeling component. See the{" "}
          <a href="https://react-bootstrap.github.io/components/badge/">
            React Bootstrap documentation
          </a>{" "}
          for more details.{" "}
        </p>
        <p>
          Add <code>-light</code> suffix to the class name to get lighter tones
          on badges.
        </p>
      </div>
      <div className="mt-5">
        <Card className="mb-3">
          <Card.Body>
            <h2>
              Example heading <Badge bg="dark">New</Badge>
            </h2>
            <h3>
              Example heading{" "}
              <Badge bg="gray-400" text="dark">
                New
              </Badge>
            </h3>
            <h4>
              Example heading <Badge bg="primary">New</Badge>
            </h4>
            <h5>
              Example heading <Badge bg="info">New</Badge>
            </h5>
            <h6>
              Example heading{" "}
              <Badge bg="gray-300" text="dark">
                New
              </Badge>
            </h6>
          </Card.Body>
        </Card>
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

export default Badges

const highlightCode = `import { Badge } from 'react-bootstrap'

export default () => {
    return (
        <Badge bg="primary">
            primary
        </Badge>
        <Badge
            bg="secondary-light"
            text="secondary"
            pill
        >
            secondary
        </Badge>
    )
}`
