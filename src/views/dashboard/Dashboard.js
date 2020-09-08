import React from 'react'
import CIcon from '@coreui/icons-react'
import { Card, CardBody, Row, Col, Button, ButtonGroup } from 'reactstrap'


// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  return (
    <>
      {/* <WidgetsDropdown /> */}
      <Card>
        <CardBody>
          <Row>
            <Col sm="5">
              <div className="small text-muted">November 2017</div>
            </Col>
            <Col sm="7" className="d-none d-md-block">
              <Button color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </Button>
              <ButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <Button
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </Button>
                  ))
                }
              </ButtonGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  )
}

export default Dashboard
