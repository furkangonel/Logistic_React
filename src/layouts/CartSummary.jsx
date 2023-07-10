import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider } from 'semantic-ui-react'


export default function CartSummary() {

const {favItems} = useSelector(state => state.fav)

  return (
    <div>
       <Dropdown item text='Favori İlanlar'>
              <Dropdown.Menu>
                {
                  favItems.map((favItem)=>(
                    <Dropdown.Item key={favItem.vehicle.loadId}>
                      {favItem.vehicle.loadName}
                    
                    </Dropdown.Item>
                  ))
                }
               
                <DropdownDivider/>
                <Dropdown.Item as={NavLink} to='fav' icon='star'>
                 </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
    </div> 
  )
}
