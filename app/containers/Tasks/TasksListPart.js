import React from 'react';

import { Input, Container, Col, Row } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

export default function TasksListPart(props) {
  return (
    <div>
      <Container fluid className="py-3">
        <Row>
          <Col xs="8" sm="6">
            <TextField
              className=" mb-2 mb-sm-4 w-100"
              variant="outlined"
              id="input-with-icon-textfield"
              label="Search"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Col>

          <Col xs="2" sm="2">
            <Button color="primary" variant="contained">
              New Task
            </Button>
          </Col>
        </Row>
        <Col xs="12" sm="4">
          <div className="todoCategory">
            <p className="todoTitle">To-Do</p>
          </div>
        </Col>

        <Row />
      </Container>
    </div>
  );
}
