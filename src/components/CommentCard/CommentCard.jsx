//import React, { useState, useContext } from 'react'
//import { AuthContext } from '../../context/AuthContext.js'
import{ Comment, Card } from 'semantic-ui-react'


const CommentCard = () => {


  return (
      <Card>
          <Card.Content>
              <Card.Header>
                  Nombre de la empresa
              </Card.Header>
              <Card.Description>
                  Position of the person
              </Card.Description>
          </Card.Content>
          <Card.Content>
              <Comment.Group>
                  <Comment>
                      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                      <Comment.Content>
                          <Comment.Author>Stevie Feliciano</Comment.Author>
                          <Comment.Metadata>
                              <div>2 days ago</div>
                          </Comment.Metadata>
                          <Comment.Text>
                              Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today.

                              The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling loads, protection, assisting police and military, companionship, and, more recently, aiding handicapped individuals. This impact on human society has given them the nickname "man's best friend" in the Western world. In some cultures, however, dogs are also a source of meat.
            </Comment.Text>
                      </Comment.Content>
                  </Comment>
              </Comment.Group>
          </Card.Content>
      </Card>
  )
}

export default CommentCard