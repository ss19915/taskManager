import React from 'react';
import { Card } from '@task-manager/theme';
import PhoneNumberForm from './PhoneNumberForm';
import VerifyOTPForm from './VerifyOTPForm';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


const LoginForm = (props) => {
    const {
        sendOTP,
        countryCode,
        phoneNumber,
        phoneNumberError,
        onPhoneNumberChange,
        onCountryCodeChange,
        activeStep,
        isSendOTPDisabled,
        OTP,
        onOTPChange,
        verifyOTP,
        OTPError,
        isVerifyOTPDisabled,
    } = props;

    return (
        <Card>
            <Card.Header
                title='Login'
            />
            <Card.Content>
                <Stepper activeStep={activeStep}>
                    <Step >
                        <StepLabel>Enter Phone Number</StepLabel>
                    </Step>
                    <Step >
                        <StepLabel>Verify OTP</StepLabel>
                    </Step>
                    <Step >
                        <StepLabel>DashBoard</StepLabel>
                    </Step>
                </Stepper>
                {activeStep === 0 &&
                    <PhoneNumberForm
                        sendOTP={sendOTP}
                        phoneNumber={phoneNumber}
                        countryCode={countryCode}
                        onPhoneNumberChange={onPhoneNumberChange}
                        onCountryCodeChange={onCountryCodeChange}
                        error={phoneNumberError}
                        isSendOTPDisabled={isSendOTPDisabled}
                    />
                }
                {activeStep === 1 &&
                    <VerifyOTPForm
                        OTP={OTP}
                        onOTPChange={onOTPChange}
                        verifyOTP={verifyOTP}
                        error={OTPError}
                        isVerifyOTPDisabled={isVerifyOTPDisabled}
                    />
                }
            </Card.Content>
        </Card>
    );
}


export default LoginForm;