import React,  { useState , useEffect }  from 'react'
import {useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Image} from 'react-bootstrap';
import RestOp from './RestOp';
import RestReview from './RestReview';
import { useSelector } from 'react-redux';

function ViewRestuarant() {
    const params = useParams()
    console.log(params.id);


    const [allRestuarant,setRestuarant] = useState([])

    // function to call api to get all restuarant.json
    const getRestuarant = async ()=>{
        await  fetch('/db.json')
        .then((data)=>{
            data.json()
            .then((result)=>{
                setRestuarant(result.restaurants);
            })
        })
    }

    useEffect(()=>{
      // getRestuarant()
  },[])
  const result = useSelector(state=>state.restuarantReducer)
  const {restuarantList} = result

  const viewRest = restuarantList.find(item=>item.id==params.id)
  console.log(viewRest);
return (
 <>
 {
  viewRest ?(
    <Row className='p-3'>
      <Col lg={3}>
      <Image src={viewRest.photograph} fluid></Image>
      </Col>
      <Col>
      <p>ID:{viewRest.id}</p>
      <h1> {viewRest.name}</h1>
      <h5>Cusine : {viewRest.cuisine_type}</h5>
      <h6>Neighborhood : {viewRest.neighborhood}</h6>
      <h6>Address : {viewRest.address}</h6>
      <RestOp operate={viewRest.operating_hours}/>
      <br></br>
      <RestReview reviews={viewRest.reviews}/>

      </Col>
    </Row>
  ): 'null'
 }
 </>
)
}

export default ViewRestuarant