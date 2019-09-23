import React from 'react';
import { Card, Stepper, Step, StepLabel } from '@task-manager/theme';
import PhoneNumberForm from './PhoneNumberForm';
import VerifyOTPForm from './VerifyOTPForm';
import UserDetailsForm from './UserDetailsForm';

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
        onUserNameChange,
        isUpdateUserDisabled,
        saveUserDetails,
        saveUserError,
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
                        <StepLabel>User Details(New User)</StepLabel>
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
                        phoneNumber={`${countryCode} ${phoneNumber}`}
                        onOTPChange={onOTPChange}
                        verifyOTP={verifyOTP}
                        error={OTPError}
                        isVerifyOTPDisabled={isVerifyOTPDisabled}
                    />
                }
                {activeStep === 2 &&
                    <UserDetailsForm
                        onUserNameChange={onUserNameChange}
                        isUpdateUserDisabled={isUpdateUserDisabled}
                        saveUserDetails={saveUserDetails}
                        error={saveUserError}
                    />
                }
            </Card.Content>
        </Card>
    );
}


export default LoginForm;