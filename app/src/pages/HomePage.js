import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { Box, Stack, Typography } from '@mui/material';
import { capitalize } from '../util';
import { getApplicantOverviewAPI, getBankOverviewAPI } from '../api';
import ApplicantDetailTable from '../components/ApplicantDetailTable';
import { APPLICANT_VIEW, BANK_VIEW } from '../constant';
import BanktDetailTable from '../components/BankDetailTable';

const HomePage = () => {
    const { currentView } = useContext(UserContext);
    const [applicantDetails, setApplicantDetails] = useState({});
    const [bankDetails, setBankDetails] = useState({});
    const [overall, setOverall] = useState({fields: [], data: []});

    useEffect(() => {
        // fetch data
        setApplicantDetails(getApplicantOverviewAPI());
        setBankDetails(getBankOverviewAPI());
    }, [])

    useEffect(() => {
        if (currentView == APPLICANT_VIEW) {
            setOverall({ fields: Object.keys(applicantDetails), data: Object.values(applicantDetails)});
        }
        if (currentView == BANK_VIEW) {
            setOverall({ fields: Object.keys(bankDetails), data: Object.values(bankDetails)});
        }

    }, [currentView]);

    return (
        <Stack 
            spacing={3}
            sx={{padding: '30px'}}
        >
            <Typography variant='h4'>{capitalize(currentView) + " View"}</Typography>
            <OverallDetail fields={overall.fields} data={overall.data}/>
            { currentView == APPLICANT_VIEW && <ApplicantDetailTable/>}
            { currentView == BANK_VIEW && <BanktDetailTable/> }
        </Stack>)
} 


const OverallDetail = ({ fields, data }) => {
    return (
        <Box sx={{ display: 'flex', 
            justifyContent: 'space-evenly', 
            alignItems: 'center',
            height: '20%',
            border: 1,
            borderRadius: '0.5em',
            borderColor: 'lightgray',
            padding:'20px',
            }}>
            {
                fields.map((field, i) => <Stack key={i} sx={{ 
                    display: 'flex', 
                    justifyContent: 'center'}}>
                    <Typography variant='h5' sx={{fontFamily: 'roboto', fontWeight: 'semi-bold', color: 'gray'}}>{capitalize(field)}</Typography> 
                    <Typography variant='body' sx={{display: 'flex', 
                        alignItems: 'center',
                        }}> 
                            <Typography sx={{fontSize: '0.5em', margin: '5px'}}>SGD</Typography> 
                            {data[i]}
                    </Typography>
                </Stack>)
            }
        </Box>
    )
}

export default HomePage;