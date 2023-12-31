import { Row, Col, Form, Button } from "react-bootstrap"

const ContactFormNew = (props) => {
  return (
    <Form {...props}>
      <div className="controls">
        <div className="mb-4 ">
          <Form.Control
            className="formbgcolor border border-dark border-top-0 border-start-0 border-end-0"
            type="text"
            name="name" 
            id="name"
            placeholder="Nonprofit Name"
            required
            
          />
          {/* <input type="color" class="form-control form-control-color" id="name" value="#563d7c"></input> */}
        </div>
        <div className="mb-4">
          {/* <Form.Label htmlFor="name">Your Name *</Form.Label> */}
          <Form.Control
            className=" formbgcolor border border-dark border-top-0 border-start-0 border-end-0"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name "
            required
          />
        </div>
        <div className="mb-4">
          {/* <Form.Label htmlFor="email">Phone Number *</Form.Label> */}
          <Form.Control
            className="formbgcolor border border-dark border-top-0 border-start-0 border-end-0"
            type="email"
            name="email"
            id="email"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="mb-4 ">
          {/* <Form.Label htmlFor="email">Email</Form.Label> */}
          <Form.Control
            className=" formbgcolor border border-dark border-top-0 border-start-0 border-end-0"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required

          />
        </div>
        <p className=" bg-orange-500 hover:bg-orange-700 text-white font-bold  rounded">
            <Button className="bg-orange"> SUBMIT<img src="/img/Arrow Right.png"></img> </Button>  
        </p>
      </div>
    </Form>
  )
}

export default ContactFormNew
