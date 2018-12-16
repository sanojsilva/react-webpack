import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: ["Leave Type", "Balance Days"]
        };
    }

    componentWillMount() {
       axios.get(this.props.balance_days_url).then((res) => {

           const data = [];

           if (res.data.length > 0) {
               res.data.forEach((item) => {
                   console.log(item);
                   data.push([ 
                       item.leave_type,
                       item.balance_days
                   ]);
               })
               
           }

           this.setState({
               data
           });




       }).catch(err => console.log(err));
    }

    getMuiTheme() {
        return createMuiTheme({
        overrides: {
          MUIDataTable: {
            root: {
              backgroundColor: "#FF000"
            },
            paper: {
              boxShadow: "none",
            }
          },
          MUIDataTableBodyCell: {
            root: {
                backgroundColor: "#FFF",
                fontSize: '12px'
            },
            paper: {
              boxShadow: "none",
              fontSize: '12px'
            }
          }
        }
      });

    }

    render() {

        //const options = {
          //filterType: 'checkbox',
        //};

        const options = {
          filter: true,
          filterType: 'dropdown',
          responsive: 'stacked',
        };

        return (
            <div>
                <MuiThemeProvider theme={this.getMuiTheme()}>
                    <MUIDataTable
                      title={this.props.title}
                      data={this.state.data}
                      columns={this.state.columns}
                      options={options}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}


export default Grid;
