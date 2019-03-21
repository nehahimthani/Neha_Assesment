import React, { Component } from 'react';
import Input from './components/inputBox';
import Button from './components/button';
import './App.css';

export default class DataComponent extends Component {
    
    render() {
        const showjobDetails = this.props.filteredData;
        return (
            <React.Fragment>
            <div className="job-number">
                <label> Total Jobs found :</label> {showjobDetails.length}
                </div>

                <div className="row sorting">                
                <Button value="Sort By Location" className="" onClick={this.props.sortByLocation} /> &nbsp; &nbsp;
               
                <Button value="Sort By Experience" className="" onClick={this.props.sortByExperience} />
                </div>
                {showjobDetails.length ?               
            <div className="row">             
                <div className="col-xs-12">
                    <div className="col-xs-4 search-content">
                     <Input className="com-content"
                     onBlur={(e) => { this.props.handleChange(e) }}
                      placeholder="Enter skill or Company Name" id="companyName" name="keyword" /> <br />
                        <Button value="Click Me" className="search-con" onClick={(()=>this.props.filteringData(showjobDetails))} />
                    </div>

                    <div className="col-xs-8">
                        <div className="row">
                            {
                                showjobDetails.map((item) => {
                                    return <div className="col-xs-6 content-div" key={item._id} >
                                        <label> Job Title : </label>
                                        <span>{item.title}</span><br/>

                                        <label> Company Name : </label>
                                        <span>{item.companyname !== '' ? item.companyname : 'NA'}</span><br/>

                                        <label> Location : </label>
                                        <span>{item.location !== '' ? item.location : '-'}</span><br/>

                                        <label> Salary : </label>
                                        <span>{item.location !== '' ? item.salary : 'Not Mentioned'}</span><br/>

                                        <label> Experience : </label>
                                        <span>{item.experience !== '' ? item.experience : 'NA'}</span><br/>

                                        <label> Type : </label>
                                        <span>{item.type !== '' ? item.type : 'NA'}</span><br/>

                                        <label> Apply Link : </label>
                                        <a href={item.applylink} target="_blank">
                                            <span>{item.applylink !== '' ? item.applylink : '-'}</span></a><br/>

                                        <label> Source : </label>
                                        <span>{item.source !== '' ? item.source : 'NA'}</span><br/>

                                        <label> Skills : </label>
                                        <span>{item.skills !== '' ? item.skills : '-'}</span><br/>
                                        
                </div>
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div> : 'no data found'}
            </React.Fragment>
        )
    }
}