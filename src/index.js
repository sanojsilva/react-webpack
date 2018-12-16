import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BoxList from './components/BoxList';
import DashboardCard from './components/DashboardCard';
import Grid from './components/Grid';

const ip = "112.135.92.58:20080";
const main_url = 'http://' + ip + '/galadarihr/frontend/';
const get_counts_url = 'http://' + ip + '/galadarihr/frontend/site/get-counts/';
const balance_days_url = 'http://' + ip + '/galadarihr/frontend/site/get-balance-days/';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            totalApplied: 0,
            totalPending: 0,
            totalRejected: 0,
            totalApproved: 0
        };
    }

    componentWillMount() {
       axios.get(get_counts_url).then((res) => {

           console.log(res.data);

           this.setState({
              totalApplied: res.data.total_applied.total_applied,
              totalPending: res.data.total_pending.total_pending,
              totalApproved: res.data.total_approved.total_approved,
              totalRejected: res.data.total_rejected.total_rejected
           });


       }).catch(err => console.log(err));

    }

    render() {
        return (
            <div>
                <BoxList totalApplied={this.state.totalApplied} totalPending={this.state.totalPending} totalApproved={this.state.totalApproved} totalRejected={this.state.totalRejected} main_url={main_url} />
                <div className="row">
                    <div className="col-md-6">
                        <Grid 
                            title="Balance Days" 
                            balance_days_url={balance_days_url}
                        />
                    </div>
                </div>
            </div>
        );
    }
}




const app_root = document.getElementById("root");

if (app_root != undefined) {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}
