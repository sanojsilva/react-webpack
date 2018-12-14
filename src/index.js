import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal/Zoom';

const main_url = 'http://192.168.1.9/galadarihr/frontend/';
const get_counts_url = 'http://192.168.1.9/galadarihr/frontend/site/get-counts/';

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
                <div className="row">
                    <Zoom>
                        <div className="col-md-3">
                            <Box theme="bg-aqua" count={this.state.totalApplied} icon="fa fa-shopping-cart" url="leave-h/index" desp="View More" name="Total Applied Leaves" id="TotalAppliedCount"/>
                        </div>
                        <div className="col-md-3">
                            <Box theme="bg-yellow" count={this.state.totalPending} icon="fa fa-print" url="leave-h/index?LeaveHSearch[leave_status_id]=1" desp="View More" name="Total Pending Leaves"/>
                        </div>
                        <div className="col-md-3">
                            <Box theme="bg-green" count={this.state.totalApproved} icon="fa fa-shopping-cart" url="leave-h/index?LeaveHSearch[leave_status_id]=2" desp="View More" name="Total Approved Leaves"/>
                        </div>
                        <div className="col-md-3">
                            <Box theme="bg-red" count={this.state.totalRejected} icon="fa fa-shopping-cart" url="leave-h/index?LeaveHSearch[leave_status_id]=3" desp="View More" name="Total Rejected Leaves"/>
                        </div>
                    </Zoom> 
                </div>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        );
    }
}


const Box = (props) => {
    return (
      <div className={ 'small-box ' + props.theme }>
        <div className="inner">
          <h3 id={ props.id }>{props.count}</h3>

          <p>{props.name}</p>
        </div>
        <div className="icon">
          <i className={props.icon}></i>
        </div>
        <a href={`${main_url}${props.url}`} className="small-box-footer">
            {props.desp} <i className="fa fa-arrow-circle-right"></i>
        </a>
      </div>
    );
}

const CardBox = (props) => {
    return (
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
                <i className="fa fa-arrow-circle-right"></i>
            </Typography>
            <Typography variant="h5" component="h2">
              be
              nev
              lent
            </Typography>
            <Typography color="textSecondary">
              adjective
            </Typography>
            <Typography component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    );
}

const app_root = document.getElementById("root");

if (app_root != undefined) {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}
