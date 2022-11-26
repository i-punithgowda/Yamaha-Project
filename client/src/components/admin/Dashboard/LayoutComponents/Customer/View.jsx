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

function View() {

  const [data,setData]=useState([])

  async function fetchCustomers(){
    const response=await axios.post('http://localhost:4000/customers')
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
      
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
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
                <h2>View customers</h2>
            </div>
            <div className="customer-tables">
            <TableContainer component={Paper} style={{height:"350px"}}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Phone number</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((cust) => (
            <StyledTableRow key={cust.c_name}>
              <StyledTableCell component="th" scope="row">
                {cust.c_name}
                
              </StyledTableCell>
              <StyledTableCell align="right">{cust.c_phno}</StyledTableCell>
              <StyledTableCell align="right">{cust.c_addr}</StyledTableCell>
              <StyledTableCell align="right">{cust.c_gender}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
    )
}

export default View
