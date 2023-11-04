import React, { useEffect, useState } from 'react';
import { Box, Button, Tab, Tabs, Tooltip  } from '@mui/material';
import { getUserDetailsAPI, getUserPaymentsAPI, getUserRequestsAPI } from '../api';
import CustomTable from './CustomTable';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const BanktDetailTable = () => {
    const [tab, setTab] = useState('1');
    const [users, setUsers] = useState([]);
    const [payments, setPayments] = useState([]);
    const [requests, setRequests] = useState([]);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    useEffect(() => {
        setUsers(getUserDetailsAPI());
        setPayments(getUserPaymentsAPI());
        setRequests(getUserRequestsAPI());
    }, []);

    const handleApprove = (record, index) => {
        const newRecord = {...record};
        newRecord['status'] = 'approve';
        setRequests([newRecord, ...requests.filter(r => record !== r)]);
    };

    const handleReject = (record, index) => {
        const newRecord = {...record};
        newRecord['status'] = 'rejected';
        setRequests([newRecord, ...requests.filter(r => record !== r)]);
    };

    const handleTab = (view) => {
        switch (view) {
            case '1':
                return users && <CustomTable columns={userColumns} rows={users}/>
            case '3':
                return payments && <CustomTable columns={paymentColumns} rows={payments}/>
            case '2':
                return requests && <CustomTable columns={requestActionColumns({ approve: handleApprove, reject: handleReject })} rows={requests}/>
        }
    };

    return(
        <div>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Tabs value={tab} onChange={handleChange}>
                        <Tab label="User Overview" value={'1'} />
                        <Tab label="User Request" value={'2'} />
                        <Tab label="User Payment History" value={'3'} />
                </Tabs>
            </Box>
            {handleTab(tab)}
        </div>)
}; 

const requestActionColumns = ({approve, reject}) => {


    const requestColumns = [
        { id: 'orderId', label: 'Order Id', minWidth: 50, align: 'center' },
        { id: 'name', label: 'Name', minWidth: 50, align: 'center' },
        { id: 'currency', label: 'Currency', minWidth: 50, align: 'center' },
        { id: 'amount', label: 'Amount', minWidth: 50, align: 'center' },
        {
          id: 'start',
          label: 'Start Date',
          minWidth: 100,
          align: 'center',
          format: (value) => value.toLocaleDateString("en-US"),
        },
        {
            id: 'end',
            label: 'End Date',
            minWidth: 100,
            format: (value) => value.toLocaleDateString("en-US"),
        },
        {
          id: 'type',
          label: 'Type',
          minWidth: 100,
        },
        {
            id: 'status',
            label: 'Status',
            minWidth: 100,
        },
        {
            id: 'action',
            label: 'Action',
            align: 'center',
            handle: (record, index) =>
                {return record.status && record['status'] == 'pending' && 
                    <Box sx={{dispay: 'flex'}}>
                        <Tooltip title="approve" arrow>
                            <Button sx={{padding: '1px', 
                            minHeight: 0,
                            minWidth: 0
                            }}
                            onClick = {() => approve(record, index)}
                            ><CheckCircleOutlineOutlinedIcon/>
                            </Button>
                        </Tooltip>
                        <Tooltip title="reject" arrow>
                            <Button sx={{padding: '1px',
                                minHeight: 0,
                                minWidth: 0,
                            }}
                            onClick = {() => reject(record, index)}
                            ><CancelOutlinedIcon/>
                            </Button>
                        </Tooltip>
                        </Box> } 
        }
      ];

      return requestColumns;
};

const userColumns = [
    { id: 'name', label: 'Name', minWidth: 100, align: 'center' },
    { id: 'currency', label: 'Currency', minWidth: 100, align: 'center' },
    { id: 'total', label: 'Amount', minWidth: 100, align: 'center' },
    { id: 'outstanding', label: 'Outstanding', minWidth: 100, align: 'center' },
    { id: 'paid', label: 'Paid', minWidth: 100, align: 'center' },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
    },
  ];

  const paymentColumns = [
    { id: 'orderId', label: 'Order Id', minWidth: 50, align: 'center' },
    { id: 'name', label: 'Name', minWidth: 100, align: 'center' },
    { id: 'paid', label: 'Paid', minWidth: 100, align: 'center' },
    { id: 'currency', label: 'Currency', minWidth: 100, align: 'center' },
    { id: 'outstanding', label: 'Outstanding', minWidth: 100, align: 'center' },
    {
      id: 'date',
      label: 'Date',
      minWidth: 100,
      align: 'center',
      format: (value) => value.toLocaleDateString("en-US"),
    },
  ];


export default BanktDetailTable;