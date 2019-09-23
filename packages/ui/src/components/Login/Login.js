import React from 'react';
import LoginForm from './LoginForm';
import constants from '../../constants';
import { initializeApp, auth } from 'firebase/app';
import { sendOTPButtonId } from './constants';
import 'firebase/auth';

class Login extends React.PureComponent {
    state = {
        countryCode: '+91',
        phoneNumberError: null,
        activeStep: 0,
        isSendOTPDisabled: false,
    };

    componentDidMount() {
        initializeApp(constants.FIREBASE_CONFIG);
        auth().useDeviceLanguage();
        this.recaptchaVerifier = new auth.RecaptchaVerifier(sendOTPButtonId, {
            size: 'invisible',
            callback: () => { },
        });
    }

    sendOTP = () => {
        const { countryCode, phoneNumber } = this.state;

        this.setState({ isSendOTPDisabled: true });
        auth().signInWithPhoneNumber(`${countryCode}${phoneNumber}`, this.recaptchaVerifier).then(( confirm ) => {
            this.verifyOTPCode = confirm;
            this.setState({
                activeStep: 1,
                isSendOTPDisabled: false,
            });
        }).catch(({ code }) => {
            let error = code.split('/')[1].replace(/-/g, ' ');

            this.recaptchaVerifier.render().then(function (widgetId) {
                grecaptcha.reset(widgetId);
            });
            this.setState({
                phoneNumberError: error,
                isSendOTPDisabled: false,
            })
        });
    };

    onPhoneNumberChange = (phoneNumber) => {
        if (phoneNumber.length < 16) {
            this.setState({ phoneNumber });
        }
    };

    onOTPChange = (OTP) => {
        if (OTP.length < 7) {
            this.setState({ OTP });
        }
    };

    verifyOTP = () => {
        const { OTP } = this.state;

        this.setState({ isVerifyOTPDisabled: true });
        this.verifyOTPCode.confirm(OTP).then((user) => {
            this.setState({
                activeStep: 2,
                isVerifyOTPDisabled: false,
                user: user,
            });
        }).catch(({ code }) => {
            let error = code.split('/')[1].replace(/-/g, ' ');

            this.setState({
                OTPError: error,
                isVerifyOTPDisabled: false,
            })
        });
    };

    onCountryCodeChange = (countryCode) => this.setState({ countryCode });

    render() {
        const {
            phoneNumber,
            countryCode,
            phoneNumberError,
            activeStep,
            isSendOTPDisabled,
            OTP,
            OTPError,
            isVerifyOTPDisabled,
        } = this.state;

        return (
            <LoginForm
                phoneNumber={phoneNumber}
                countryCode={countryCode}
                onPhoneNumberChange={this.onPhoneNumberChange}
                onCountryCodeChange={this.onCountryCodeChange}
                phoneNumberError={phoneNumberError}
                activeStep={activeStep}
                isSendOTPDisabled={isSendOTPDisabled}
                sendOTP={this.sendOTP}
                OTP={OTP}
                onOTPChange={this.onOTPChange}
                verifyOTP={this.verifyOTP}
                OTPError={OTPError}
                isVerifyOTPDisabled={isVerifyOTPDisabled}
            />
        );
    }
}

export default Login;