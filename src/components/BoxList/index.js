import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Box from '../Box';
import Zoom from 'react-reveal/Zoom';

const BoxList = (props) => {
    return (
        <div className="row">
            <Zoom>
                <div className="col-md-3">
                    <Box theme="bg-aqua" count={props.totalApplied} icon="fa fa-shopping-cart" url="leave-h/index" desp="View More" name="Total Applied Leaves" id="TotalAppliedCount" main_url={props.main_url}/>
                </div>
                <div className="col-md-3">
                    <Box theme="bg-yellow" count={props.totalPending} icon="fa fa-print" url="leave-h/index?LeaveHSearch[leave_status_id]=1" desp="View More" name="Total Pending Leaves" main_url={props.main_url}/>
                </div>
                <div className="col-md-3">
                    <Box theme="bg-green" count={props.totalApproved} icon="fa fa-shopping-cart" url="leave-h/index?LeaveHSearch[leave_status_id]=2" desp="View More" name="Total Approved Leaves" main_url={props.main_url}/>
                </div>
                <div className="col-md-3">
                    <Box theme="bg-red" count={props.totalRejected} icon="fa fa-shopping-cart" url="leave-h/index?LeaveHSearch[leave_status_id]=3" desp="View More" name="Total Rejected Leaves" main_url={props.main_url}/>
                </div>
            </Zoom>
        </div>
    );
}


export default BoxList;

