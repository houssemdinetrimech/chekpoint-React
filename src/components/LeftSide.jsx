import React from 'react';
import {Form, Button} from 'react-bootstrap' ;

const leftside = () => {
  return (
    <div>
          <br/>
          <br/>
          <br/>
   
           <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>

                  <Form.Group >
                    <Form.Label><h5 className='pas-mail' >Enter Your email</h5></Form.Label>
                    <Form.Control type='email' placeholder='Enter Your email'/>
                  </Form.Group>
                  <br>
                    
                  </br>
                  <Form.Group >
                    <Form.Label> <h5 className='pas-mail'>Enter Your password</h5></Form.Label>
                    <Form.Control type='password' placeholder='Enter Your password'/>
                  </Form.Group>
                  <Button type='submit'>Submit</Button>

           </Form>



    </div>
  )
}

export default leftside;