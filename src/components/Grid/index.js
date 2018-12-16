import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
  },
  table: {
    minWidth: 100,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class Grid extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {leave_type: 'test', balance_days: '6'}
            ]
        };
    }

    componentWillMount() {
       axios.get(this.props.balance_days_url).then((res) => {

           const data = [];
           if (res.data.length > 0) {
               res.data.forEach((item) => {
                   console.log(item);
                   data.push({ 
                       leave_type: item.leave_type,
                       balance_days: item.balance_days
                   })
               })
               this.setState({
                   data
               });
               
           }

           console.log(data);

       }).catch(err => console.log(err));
    }


    render() {

        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <CustomTableCell numeric>Leave Type</CustomTableCell>
                        <CustomTableCell numeric>Balance Days</CustomTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.data.map((row, index) => {
                        return (
                          <TableRow className={classes.row} key={index}>
                            <CustomTableCell numeric>{row.leave_type}</CustomTableCell>
                            <CustomTableCell numeric>{row.balance_days}</CustomTableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Paper>
            </div>
          );
    }
}

Grid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grid);

