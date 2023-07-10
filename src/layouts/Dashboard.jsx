import React from 'react'
import Categories from './Categories'
import VehicleList from '../pages/VehicleList'
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from "react-router-dom";
import VehicleDetail from '../pages/VehicleDetail';
import FavDetail from '../pages/FavDetail';
import { ToastContainer } from 'react-toastify';
import vehicleAdd from '../pages/vehicleAdd';

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Categories style={{ marginLeft: '0.5em' }} />
            </Grid.Column>
            <Grid.Column width={12}>
              <Routes>
                <Route exact path='/' Component={VehicleList} />
                <Route exact path='/loads' Component={VehicleList} />
                <Route path='/loads/:loadName' Component={VehicleDetail} />
                <Route path='/fav' Component={FavDetail} />
                <Route path='/vehicle/add' Component={vehicleAdd} />
              </Routes>

            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
  )
}
