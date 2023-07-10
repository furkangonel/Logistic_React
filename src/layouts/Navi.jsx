import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useSelector } from 'react-redux';

export default function Navi() {
  const {favItems} = useSelector(state => state.fav)
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate()


  function handleSingOut() {
    setIsAuthenticated(false)
    navigate("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }
  

  return (
    <div>
      <Menu inverted size='tiny'>
        <Container>
          <Menu.Item
            name='home'
          />
          <Menu.Item
            name='messages'
          />
          <Menu.Menu position='right'>
            {favItems.length>0&&<CartSummary />}
            {isAuthenticated ? <SignedIn signOut={handleSingOut}/> : <SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>

      </Menu>
    </div>
  )
}
