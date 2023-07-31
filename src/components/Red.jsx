import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from 'mdb-react-ui-kit';

export default function Blue() {
  return (
    <>
      <MDBCard>
        <MDBCardBody>
        <MDBCardTitle><h1 className='card-header-red'>Red</h1></MDBCardTitle>
          <MDBCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas velit dui, pharetra eleifend condimentum id, eleifend vel lectus. 
            Vestibulum congue sem sit amet rutrum mollis. 
            Nunc consectetur ipsum tortor, eu mollis neque euismod eu.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}