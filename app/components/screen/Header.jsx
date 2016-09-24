import React, { PropTypes, Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import _ from 'lodash';

const CreateModal = require('./CreateModal');
const img = require('../../assets/images/loading.gif');

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { createModalShow: false };
    this.createModalClose = this.createModalClose.bind(this);
  }

  static propTypes = {
    options: PropTypes.object,
    create: PropTypes.func.isRequired
  }

  createModalClose() {
    this.setState({ createModalShow: false });
  }

  render() {
    const { create, options } = this.props;

    return (
      <div>
        <div className='list-unstyled clearfix'>
          <h3>#界面#</h3>
        </div>
        <div>
          <Button className='create-btn' onClick={ () => { this.setState({ createModalShow: true }); } }><i className='fa fa-plus'></i>&nbsp;新建界面</Button>
        </div>
        { this.state.createModalShow && <CreateModal show close={ this.createModalClose } create={ create } options={ options }/> }
      </div>
    );
  }
}