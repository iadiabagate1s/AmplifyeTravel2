import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

export default function SpinnerLoad() {
    return (
        <div>

<Button variant="success" >
<Spinner
  as="span"
  animation="grow"
  size="lg"
  role="status"
  aria-hidden="true"
/>
Loading...
</Button>
            
        </div>
    )
}