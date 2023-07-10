import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Menu, Icon, Button } from 'semantic-ui-react';
import VehicleService from '../services/vehicleService';
import { addToFav, removeFromFav } from '../store/actions/favActions';
import { toast } from 'react-toastify';


export default function VehicleList() {

  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useState();
  const [vehicles, setVehicles] = useState([]); 
 
  useEffect(()=>{
    let vehicleService = new VehicleService()
    vehicleService.getVehicles().then(result=> {
      setVehicles(result.data.data)
   
      const vehicleWithFavoritestatus = result.data.data.map(vehicle => ({
      ...vehicle,
      isFavorite: false,
    }));
    setVehicles(vehicleWithFavoritestatus);
    });
  },[])


  const handleAddToFav = (vehicle) => {
   
    setIsFavorite(!isFavorite);
   const updateVehicles = vehicles.map((v) => {
    if(v.loadId === vehicle.loadId) {
      return {
        ...v,
        isFavorite: !v.isFavorite,
      };
    }
    return v;
   })

  setVehicles(updateVehicles);

  if (vehicle.isFavorite) {
    dispatch(removeFromFav(vehicle));
   toast.error(`${vehicle.loadName} favorilerden çıkarıldı!`)
  } else {
    dispatch(addToFav(vehicle));
    toast.success(`${vehicle.loadName} favorilere eklendi!`)
  }

  };
  
    const getButtonColor = (isFavorite) => {
if (isFavorite) {
  return 'red';
} else {
return 'yellow'
}
    
    };

  


  return (
    <div>
      <Table inverted>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Yük Adı</Table.HeaderCell>
            <Table.HeaderCell>Ağırlık</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Noktası</Table.HeaderCell>
            <Table.HeaderCell>Bitiş Noktası</Table.HeaderCell>
            <Table.HeaderCell>Fiyat</Table.HeaderCell>
            <Table.HeaderCell>Taşıma Türü</Table.HeaderCell>
            <Table.HeaderCell>Dorse Türü</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {vehicles.map((vehicle) => (
            <Table.Row key={vehicle.loadId}>
               <Table.Cell>
                <Button onClick={()=>handleAddToFav(vehicle)} 
                basic color={getButtonColor(vehicle.isFavorite)}>
                  <Icon name='star'/>
                  </Button>
                </Table.Cell>
              <Table.Cell><Link to={`/loads/${vehicle.loadName}`}>{vehicle.loadName}</Link></Table.Cell>
              <Table.Cell>{vehicle.loadWeight} Ton</Table.Cell>
              <Table.Cell>{vehicle.firstPoint}</Table.Cell>
              <Table.Cell>{vehicle.endPoint}</Table.Cell>
              <Table.Cell>{vehicle.price} $</Table.Cell>
              <Table.Cell>{vehicle.type.typeName}</Table.Cell>
              <Table.Cell>{vehicle.type.trailer}</Table.Cell>
             
            </Table.Row>

          ))}

        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='10'>
              <Menu floated="right" pagination>

                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
