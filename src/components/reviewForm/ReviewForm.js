import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    // Create a form for submitting reviews
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
      </Form.Group>
      {/* Submit button for the form */}
      <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm;
