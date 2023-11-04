import { APPLICANT_LOAN_DETAILS, APPLICANT_OVERVIEW, APPLICANT_PAYMENT_DETAILS, BANK_OVERVIEW, USER_LOAN_DETAILS, USER_LOAN_REQUESTS, USER_PAYMENT_DETAILS } from "./data"

export const getApplicantOverviewAPI = () => {
    return APPLICANT_OVERVIEW;
};

export const getApplicantLoanDetailsAPI = () => {
    return APPLICANT_LOAN_DETAILS;
};

export const getApplicantPaymentDetailsAPI = () => {
    return APPLICANT_PAYMENT_DETAILS;
};

export const getBankOverviewAPI = () => {
    return BANK_OVERVIEW;
};

export const getUserDetailsAPI = () => {
    return USER_LOAN_DETAILS;
};

export const getUserPaymentsAPI = () => {
    return USER_PAYMENT_DETAILS;
};


export const getUserRequestsAPI = () => {
    return USER_LOAN_REQUESTS;
};