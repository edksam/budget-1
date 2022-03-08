import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

const DisplayBalances = () => {
  return (
    <Segment text-align="center">
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <DisplayBalance
            title="Income : "
            value={1234.5}
            color="red"
            size="tiny"
          />
        </Grid.Column>
        <Grid.Column>
          <DisplayBalance
            title="Expenses : "
            value={623.7}
            color="green"
            size="tiny"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default DisplayBalances