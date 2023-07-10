import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Icon } from 'semantic-ui-react'
import VehicleService from '../services/vehicleService';


export default function VehicleDetail() {

    let {loadName} = useParams();
    const [vehicle, setVehicle] = useState({}); 
    

  useEffect(()=>{
    let vehicleService = new VehicleService()
    vehicleService.getByLoadName(loadName).then(result=>setVehicle(result.data.data))
  })

  return (
    <div>
      <Card.Group>
    <Card fluid >
      <Card.Content>
        <Card.Header>{vehicle.loadName}</Card.Header>
        
        <Card.Description><strong>Avans: {vehicle.advancePayment} $</strong></Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='yellow' >
          <Icon name='star'/>
            Favori
          </Button>
          <Button basic color='green'>
          <Icon name='call'/>
            İletişim
          </Button>
        
        </div>
      </Card.Content>
    </Card>
    </Card.Group>
    </div>
  
  )
}
