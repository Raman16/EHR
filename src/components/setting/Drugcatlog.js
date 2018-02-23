import "react-select/dist/react-select.css";
import React, { Component } from 'react';
import Select from 'react-select';
import { Form, Field } from 'simple-react-forms';
import _ from 'lodash';
import { request } from "../../helpers";

var formvalues = {};
var itemID;
var btnType;


const thstyle = {

  width: "100px",

};
const textboxstyle = {
  position: "relative",
  width: "200px",
  padding: "5px",
  borderradius: "3px",

};

//saveing
const saveDrugcatlog = params => {
  return new Promise((resolve, reject) => {
    request
      .post("drug", params)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => error.response);
  });
};

//updateing
const UpdateDrugcatlog = params => {
  console.log("params :" + JSON.stringify(params));
  console.log("update")
  return new Promise((resolve, reject) => {
    request
      .put("drug/" + itemID, params)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => error.response);
  });
};


//deletedrug  catlog
const DeleteDrugcatlog = params => {

  console.log(params);
  console.log("Delete")
  return new Promise((resolve, reject) => {
    request
      .delete("drug/" + params)
      .then(response => {
        resolve(response.data)
        return "deleted";
      })
      .catch(error => error.response);
  });
};


class Drugcatlog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      perro: 'simpleForm',
      input: 'Submit', name: '',
      strength: '', unit: '', type: '', note: '',
      value: '', id: '', users: []
    };


    this.textDrugname = this.textDrugname.bind(this);
    this.textstrength = this.textstrength.bind(this);
    this.textunit = this.textunit.bind(this);
    this.textDrugtype = this.textDrugtype.bind(this);
    this.deleteTableItem = this.deleteTableItem.bind(this);
    this.updateTableItem = this.updateTableItem.bind(this);
    this.textNote = this.textNote.bind(this);
     //this.search = this.search.bind(this);

  }


  onClickHandler(e) {
    e.preventDefault();
    var th = this;

    let sample = this.refs['simpleForm'].getFormValues();

    if (sample.Drugname == null || sample.Drugname == "") {
      alert("Drugname is required.")
    }
    else {
      formvalues["name"] = sample.Drugname;
    }


    formvalues["name"] = sample.Drugname;
    formvalues["strength"] = sample.STRENGTH;
    formvalues["note"] = sample.note;

    if (sample.Type == null || sample.Type == "") {
      alert("Drug type is required.")
    }
    else {
      formvalues["type"] = sample.Type.label;
    }

    if (sample.UNIT == null || sample.UNIT == "") {
      alert("Drug unit is required.")
    }
    else {
      formvalues["unit"] = sample.UNIT.label;
    }

    if (sample.Type["label"] == undefined) {
      formvalues["type"] = this.state.type;
    }

    if (sample.UNIT["label"] == undefined) {
      formvalues["unit"] = this.state.unit;
    }


    if (btnType == 'Edit') {
      btnType = '';
      this.updateTableItem(formvalues);
      this.forceUpdate();
      UpdateDrugcatlog(formvalues)
        .then(() => {
          console.log("update then")
          request.get("drug").then(function (response) {

            console.log(response)
            th.setState({ users: response.data.data })
          });
        });
    }
    else {
      this.updateTableItem(formvalues);

      saveDrugcatlog(formvalues)

        .then(() => {
          console.log("update then")
          request.get("drug").then(function (response) {

            console.log(response)
            th.setState({ users: response.data.data })
          });
        });
    }
  }

  deleteTableItem(index) {
    var th = this;

    DeleteDrugcatlog(index)
      .then(() => {
        console.log("Delete then")
        request.get("drug").then(function (response) {
          console.log(response)
          th.setState({ users: response.data.data })
        });
      });
  }

  textDrugname(name) {
    this.setState({ name: name });
  }
  updateTableItem(formvalues) {

  }
  textstrength(strength) {
    this.setState({ strength: strength });

  }

  textunit(unit) {
    this.setState({ unit: unit });
  }

  textDrugtype(type) {

    this.setState({ type: type });
  }

  textNote(note) {
    this.setState({ note: note });
  }


      search(){
        alert("hai")
        var th = this;
       request.get("drug").then(function (response) {

            console.log(response)
            th.setState({ users: response.data.data })
          })
    }



  componentDidMount() {
    var th = this;
    request.get("drug").then(function (response) {

      th.setState({ users: response.data.data })
    });
  }


  render() {

    let options = [{
      id: '1',
      label: 'CAPSULE',
      value: 'CAPSULE'
    }, {
      label: 'CREAM',
      value: 'CREAM'
    },
    {
      label: 'TABLET',
      value: 'TABLET'
    },
    {
      label: 'INJECTION',
      value: 'INJECTION'
    }
    ];

    let options1 = [{
      label: 'GM',
      value: 'GM'
    }, {
      label: 'MG',
      value: 'MG'
    }
    ];

    return (
      <div className="content-box">
        <div >
          <Form ref='simpleForm' >
            <Field
              value={this.state.name}
              style={{
                width: '250px'
              }}
              name='Drugname'
              label='Enter Drugname'
              validators={['required']}
              type='text'

            />
            <Field
              name='UNIT'
              label='UNIT'
              value={this.state.unit}
              style={{
                width: '250px'
              }}

              element={
                <Select
                  options={options1}
                />
              }
            />

            <Field
              name='STRENGTH'
              value={this.state.strength}

              label='Enter STRENGTH'
              type='text'
              style={{
                width: '250px'
              }}

            />

            <Field
              name='Type'
              label='Type'
              style={{
                width: '250px'
              }}

              value={this.state.type}

              element={
                <Select
                  options={options}
                  valueAccessor={(selectedValue) => selectedValue.id}

                />
              }
            />

            <Field
              name='note'
              value={this.state.note}
              label='Enter Note'
              type='text'
              style={{
                width: '250px'
              }}

            />

          </Form>

          <button className="btn btn-success pull-left" onClick={this.onClickHandler.bind(this)} >Submit</button>

          <Drugcatlogtable
            deleteTableItem={this.deleteTableItem}
            textDrugname={this.textDrugname}
            DelateRow={this.DelateRow}
            textstrength={this.textstrength}
            textunit={this.textunit}
            textDrugtype={this.textDrugtype}
            textNote={this.textNote}
            users={this.state.users} />
        </div>
      </div>

    );
  }
}



class Drugcatlogtable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isEditing: false,
      showComponent: false,
      itemID: ''

    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.editRow = this.editRow.bind(this);
    this.DelateRow = this.DelateRow.bind(this);
  }

  editRow(index) {

    var obj = this.props.users.filter(function (obj) {
      return obj.id === index;
    })[0];

    console.log(obj);
    var th = this;
    let tableItem = this.props.users[index];
    this.props.textDrugname(obj.name);
    this.props.textstrength(obj.strength);
    this.props.textunit(obj.unit);
    this.props.textDrugtype(obj.type);
    this.props.textNote(obj.note);
    itemID = obj.id;
    btnType = 'Edit';
    var th = this;
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }



  DelateRow(index) {

    this.props.deleteTableItem(index);

  }

  render() {
    let rows;
    var th = this;

    rows = this.props.users.map(function (user) {

      return (

        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.unit}</td>
          <td>{user.strength}</td>
          <td>{user.type}</td>
          <td>{user.note}</td>

          <td>
            <button onClick={th.editRow.bind(this, user.id)}>EDIT</button>
          </td>
          <td>

            <button onClick={th.DelateRow.bind(this, user.id)}>Delete</button>
          </td>

        </tr>
      );
    });

    return (
       
      <div className="col-sm-8 col-sm-push-2 col-md-6 col-md-push-3" >
        <div className="content-box">
         
          <div className="full">
             <input type="text" onChange={this.search}   placeholder="Search  by Drugname " />
            <table className=" table med-table content-middled">
              <thead>
                <tr>
                  <th  >Drug Id</th>
                  <th  >Drug Name</th>
                  <th >Unit</th>
                  <th  >Strength</th>
                  <th >Type</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Drugcatlog;







