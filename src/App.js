import React, { Component } from 'react';
import axios from 'axios';
import DropDown from './components/dropDown';
import Button from './components/button';
import Input from './components/inputBox';
import DataComponent from './DataComponent';
import _ from 'lodash';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobFeed: [],
      dropDownArray: [],
      selectedExp: '',
      location: '',
      keyword: '',
      searchedData: [],
      showClearFilterButton : false
    }
    this.searchData = {
      location: '',
      experience: '',
      keyword: '',
    }
  }
   
  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/kez8a`)
      .then(res => {
        const posts = res.data.jobsfeed;
        this.setState({ jobFeed: posts });
        this.setState({ searchedData: this.state.jobFeed });
        let array = [];
        this.state.searchedData.map((post) =>{    
          if(post.experience !== ''){
          array.push({
            id: post._id,
            value: post.experience,
            optionText: post.experience,
          })
        }
        })
        console.log('arrayyy',array);
        this.setState({ dropDownArray: array });
      });

  }
  getSelectedValue = (value) => {
    if (value !== '') {
      this.setState({ selectedExp: value })
      this.searchData.experience = value;
    }
  }
  clearFilter =() =>{
    document.querySelector('#locationName').value=''
    if(document.querySelector('#companyName')){
    document.querySelector('#companyName').value=''
    }
    this.setState({
      searchedData : this.state.jobFeed, 
      showClearFilterButton:false,
      selectedExp: '',
      location: '',
      keyword: ''
     })
  }
  handleSearch = () => {
    let filteredResult = [];
    let tempData = this.state.jobFeed;
    tempData.filter((item) => {
      if (this.state.location !== '' && this.state.selectedExp !== '' && this.state.keyword !== '') {
        if (item.location.toLowerCase().includes(this.state.location.toLowerCase()) &&
          item.experience === this.state.selectedExp && (item.skills.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
            item.companyname.toLowerCase().includes(this.state.keyword.toLowerCase()))) {
          filteredResult.push(item);
        }
      }
      else if (this.state.keyword !== '' && this.state.location !== '' && this.state.selectedExp === '') {
        if ((item.skills.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
          item.companyname.toLowerCase().includes(this.state.keyword.toLowerCase())) &&
          item.location.toLowerCase().includes(this.state.location.toLowerCase())) {
          filteredResult.push(item);
        }
      }
      else if (this.state.keyword !== '' && this.state.location === '' && this.state.selectedExp !== '') {
        if ((item.skills.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
          item.companyname.toLowerCase().includes(this.state.keyword.toLowerCase()))
          && item.experience === this.state.selectedExp) {
          filteredResult.push(item);
        }
      }
      else if (this.state.keyword === '' && this.state.location !== '' && this.state.selectedExp !== '') {
        if (item.location.toLowerCase().includes(this.state.location.toLowerCase())
          && item.experience === this.state.selectedExp) {
          filteredResult.push(item);
        }
      }
      else if (this.state.keyword === '' && this.state.location === '' && this.state.selectedExp !== '') {
        if (item.experience === this.state.selectedExp) {
          filteredResult.push(item);
        }
      }
      else if (this.state.keyword !== '' && this.state.location === '' && this.state.selectedExp === '') {
        if (item.skills.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
          item.companyname.toLowerCase().includes(this.state.keyword.toLowerCase())) {
          filteredResult.push(item);
        }
      }
      else if (this.state.keyword === '' && this.state.location !== '' && this.state.selectedExp === '') {
        if (item.location.toLowerCase().includes(this.state.location.toLowerCase())) {
          filteredResult.push(item);
        }
      }
      else if (this.state.keyword === '' && this.state.location === '' && this.state.selectedExp === '') {
        filteredResult.push(item);
      }

    });
    this.setState({ searchedData: filteredResult , showClearFilterButton : true })
  }

  sortingBasedonLocation = () => {
    var array = this.state.searchedData;
    array = _.orderBy(array, ['location'], ['asc']); // Use Lodash to sort array by 'location in ascending order'
    this.setState({ searchedData: array })
  }
  _resetexperience = function (exp) {
    if (isNaN(exp) && exp.indexOf('yrs') >= 0) {
      var temp = exp.replace('yrs', '').split("-");
      temp = temp.map(function (item) {
        return item.trim();
      })
      return temp.join('-');
    }
    if (isNaN(exp) && exp.indexOf('to') >= 0) {
      var temp = exp.replace('Yrs', '').split("to");
      temp = temp.map(function (item) {
        return item.trim();
      })
      return temp.join('-');
    }
    if (isNaN(exp) && exp.indexOf('-') >= 0) {
      return exp;
    }
    return '0';
  }
  sortByExperience = () => {
    var data = this.state.searchedData;
    data.sort((a, b) => {
      b.experience = this._resetexperience(b.experience);
      a.experience = this._resetexperience(a.experience);
      if (b.experience.indexOf('-') > -1 && a.experience.indexOf('-') === -1) {

        return +a.experience - +b.experience.split('-')[1];
      }
      if (!b.experience.indexOf('-') === -1 && a.experience.indexOf('-') > -1) {

        return +a.experience.split('-')[1] - +b.experience;
      }
      if (b.experience.indexOf('-') > -1 && a.experience.indexOf('-') > -1) {

        return +a.experience.split('-')[1] - +b.experience.split('-')[1];
      }
      return +a.experience - +b.experience;
    });

    this.setState({ searchedData: data })


  }
  
  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    switch (e.target.name) {
      case 'location':
        this.searchData.location = e.target.value
        break;
      case 'keyword':
        this.searchData.keyword = e.target.value
        break;
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Search  Jobs</h1>
          <div className="row search" >
            <div className="col-xs-12">
              <div className="col-xs-4">
                <DropDown className="drop-down" options={this.state.dropDownArray} onChange={this.getSelectedValue} />
              </div>
              <div className="col-xs-4">
                <Input className="input-class-loc" onBlur={(e) => { this.onHandleChange(e) }} placeholder="Search by location" id="locationName" name="location" /> <br />
              </div>
              <div className="col-xs-4">
                <Button value="Search" className="searchButton" onClick={this.handleSearch} />
              </div>
            </div>
          </div>
          {this.state.showClearFilterButton ?
          <div className="row">
            <Button value="Clear Filter" className="clearFilterButton" onClick={this.clearFilter} />
            </div> : null}
        </header>

        <DataComponent handleChange={this.onHandleChange} filteredData={this.state.searchedData}
          filteringData={this.handleSearch} sortByLocation={this.sortingBasedonLocation} sortByExperience={this.sortByExperience} />


      </div>
    );
  }
}

