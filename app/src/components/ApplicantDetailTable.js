import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Tab, Tabs, TextField  } from '@mui/material';
import { getApplicantLoanDetailsAPI, getApplicantPaymentDetailsAPI } from '../api';
import CustomTable from './CustomTable';
import CustomModal from './CustomModal';
import { useForm } from 'react-hook-form';


const ApplicantDetailTable = () => {
    const [tab, setTab] = useState('1');
    const [loans, setLoans] = useState([]);
    const [payments, setPayments] = useState([]);
    const [isAddVisible, setIsAddVisible] = useState(false);
    const [isPaymentVisible, setIsPaymentVisible] = useState(false);
    const [orderId, setOrderId] = useState(4);

    const registerForm = (defaultValues) => {
        const { register, handleSubmit, reset, formState: { errors }} = useForm({ defaultValues: defaultValues });
        return { register, handleSubmit, reset, errors };
    }

    const addForm = registerForm({ currency: "", amount: null, start: null, end: null, type: "" });
    const paymentForm = registerForm({ orderId: "", currency: "", paid: null });


    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    useEffect(() => {
        setLoans(getApplicantLoanDetailsAPI());
        setPayments(getApplicantPaymentDetailsAPI());
    }, []);

    const handleTab = (view) => {
        switch (view) {
            case '1':
                return loans && <CustomTable columns={loanColumns} rows={loans}/>;
            case '2':
                return payments && <CustomTable columns={paymentColumns} rows={payments}/>;
        }
    };

    const handleAddConfirm = (data) => {
        data['orderId'] = orderId;
        data['status'] = 'pending'
        data['start'] = new Date(data['start']);
        data['end'] = new Date(data['end']);
        console.log(data);
        setLoans([data, ...loans]);
        setOrderId(orderId + 1);
        addForm.reset({});
        setIsAddVisible(false);
    }

    const handlePaymentConfirm = (data) => {
        data['date'] = new Date();
        data['outstanding'] = 0;
        console.log(data);
        setPayments([data, ...payments]);
        paymentForm.reset({});
        setIsPaymentVisible(false);
    }

    return(
        <div>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Tabs value={tab} onChange={handleChange}>
                        <Tab label="Loan Applications" value={'1'} />
                        <Tab label="Payment History" value={'2'} />
                </Tabs>
                <div>
                    <Button variant='contained' size='small' sx={{height: '30px', paddingLeft: '20px', paddingRight:'20px', marginRight: '5px'}} onClick={() => setIsAddVisible(true)}>
                        Add loan
                    </Button>
                    <Button variant='contained' size='small' sx={{height: '30px', paddingLeft: '20px', paddingRight:'20px'}} onClick={() => setIsPaymentVisible(true)}>Add Payment</Button>
                    <CustomModal title="Add Loan" 
                        isOpen={isAddVisible} 
                        handleClose={() => setIsAddVisible(false)} 
                        okText={"Confirm"} cancelText={"Cancel"} 
                        handleConfirm={addForm.handleSubmit(handleAddConfirm)}>
                            <Stack>
                                <TextField required label="Currency" variant="standard" {...addForm.register("currency")}/>
                                <TextField required label="Amount" variant="standard" type="number"{...addForm.register("amount")}/>
                                <TextField required label="Start Date" variant="standard" type='date' InputLabelProps={{ shrink: true }} {...addForm.register("start")}/>
                                <TextField required label="End Date" variant="standard" type='date' InputLabelProps={{ shrink: true }} {...addForm.register("end")}/>
                                <TextField required label="Type" variant="standard" {...addForm.register("type")}/>
                            </Stack>
                    </CustomModal>
                    <CustomModal title="Settle Payment" 
                        isOpen={isPaymentVisible} 
                        handleClose={() => setIsPaymentVisible(false)} 
                        okText={"Confirm"} cancelText={"Cancel"} 
                        handleConfirm={paymentForm.handleSubmit(handlePaymentConfirm)}>
                            <Stack>
                                <TextField required label="Order Id" variant="standard" type='number' {...paymentForm.register("orderId")}/>
                                <TextField required label="Currency" variant="standard" {...paymentForm.register("currency")}/>
                                <TextField required label="Amount" variant="standard" type="number"{...paymentForm.register("paid")}/>
                            </Stack>
                    </CustomModal>
                </div>
            </Box>
            {handleTab(tab)}
        </div>)
};   

const loanColumns = [
    { id: 'orderId', label: 'Order Id', minWidth: 50, align: 'center' },
    { id: 'currency', label: 'Currency', minWidth: 100, align: 'center' },
    { id: 'amount', label: 'Amount', minWidth: 150, align: 'center' },
    {
      id: 'start',
      label: 'Start Date',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleDateString("en-US"),
    },
    {
        id: 'end',
        label: 'End Date',
        minWidth: 170,
        format: (value) => value.toLocaleDateString("en-US"),
    },
    {
      id: 'type',
      label: 'Type',
      minWidth: 170,
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
    },
  ];

  const paymentColumns = [
    { id: 'orderId', label: 'Order Id', minWidth: 50, align: 'center' },
    { id: 'currency', label: 'Currency', minWidth: 100, align: 'center' },
    { id: 'paid', label: 'Paid', minWidth: 100, align: 'center' },
    { id: 'outstanding', label: 'Outstanding', minWidth: 100, align: 'center' },
    {
      id: 'date',
      label: 'Date',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleDateString("en-US"),
    },
  ];
  
export default ApplicantDetailTable;