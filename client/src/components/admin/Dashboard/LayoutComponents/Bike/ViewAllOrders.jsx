import React,{useState,useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function ViewAllOrders() {

  const [data,setData]=useState([])

  async function fetchCustomers(){
    const response=await axios.post('http://localhost:4000/get-orders')
    setData(response.data);
  }

  useEffect(()=>{

    fetchCustomers()
  },[])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 11,
        },
      }));

      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
  
      const rows = [
        // createData('Frozen yoghurt', 159, 6.0, 24),
        // createData('Ice cream sandwich', 237, 9.0, 37),
        // createData('Eclair', 262, 16.0, 24),
        // createData('Cupcake', 305, 3.7, 67 ),
        // createData('Gingerbread', 356, 16.0, 49),

        
      ];

    return (
        <div className="view-customers">
            <div className="view-header">
                <h2>View all order details</h2>
            </div>
            <div className="customer-tables">
            <TableContainer component={Paper} style={{height:"350px"}}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee ID</StyledTableCell>
            <StyledTableCell align="center">Bike name</StyledTableCell>
            <StyledTableCell align="center">Bike Model</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((order) => (
            <StyledTableRow key={order.o_date}>
              <StyledTableCell component="th" scope="row">
                {order.e_id}
                
              </StyledTableCell>
              <StyledTableCell align="center">{order.b_name}</StyledTableCell>
              <StyledTableCell align="center">{order.b_model}</StyledTableCell>
              <StyledTableCell align="center">{order.b_price}</StyledTableCell>
              <StyledTableCell align="center">{order.o_date}</StyledTableCell>
              <StyledTableCell align="center">{order.b_type}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
    )
}

export default ViewAllOrders
