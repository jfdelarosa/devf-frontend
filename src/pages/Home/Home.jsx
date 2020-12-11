import React from 'react'
import {
  NavBar,
  CommentCard
} from '../../components/index.js'
import { Container } from 'semantic-ui-react'


const Home = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Container>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
      </Container>
    </React.Fragment>
  )
}

export default Home