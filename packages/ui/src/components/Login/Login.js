import React from 'react';
import LoginForm from './LoginForm';
import constants from '../../constants';
import { initializeApp, auth } from 'firebase/app';
import { sendOTPButtonId } from './constants';
import 'firebase/auth';
import _ from 'lodash';

class Login extends React.PureComponent {
    state = {
        countryCode: '+91',
        phoneNumberError: null,
        activeStep: 0,
        isSendOTPDisabled: false,
        userName: '',
        isUpdateUserDisabled: true
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

        this.setState({ isSendOTPDisabled: true, phoneNumberError: null });
        auth().signInWithPhoneNumber(`${countryCode}${phoneNumber}`, this.recaptchaVerifier).then((confirm) => {
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

        this.setState({ isVerifyOTPDisabled: true, OTPError: null });
        this.verifyOTPCode.confirm(OTP).then((userDetails) => {
            const name = userDetails.user.displayName;
            if (_.isEmpty(name)) {
                this.setState({
                    activeStep: 2,
                    isVerifyOTPDisabled: false,
                    userDetails,
                });
            }
            else {
                this.setState({
                    activeStep: 3,
                    isVerifyOTPDisabled: false,
                    userDetails,
                    userName: name,
                });
                this.props.setUser(userDetails);
            }
        }).catch(({ code }) => {
            let error = code.split('/')[1].replace(/-/g, ' ');

            this.setState({
                OTPError: error,
                isVerifyOTPDisabled: false,
            })
        });
    };

    onCountryCodeChange = (countryCode) => this.setState({ countryCode });

    onUserNameChange = (userName) => {
        this.setState((prevState) => {
            const { isUpdateUserDisabled } = prevState;
            const newState = { userName };

            if (_.isEmpty(userName) && !isUpdateUserDisabled) {
                newState.isUpdateUserDisabled = true;
            }
            else if (!_.isEmpty(userName) && isUpdateUserDisabled) {
                newState.isUpdateUserDisabled = false;
            }

            return newState;
        });
    };

    saveUserDetails = () => {
        const { userName, userDetails } = this.state;

        this.setState({ isUpdateUserDisabled: true });
        auth().currentUser.updateProfile({
            displayName: userName,
        }).then((res) => {
            this.setState({
                isUpdateUserDisabled: false,
                activeStep: 3,
            });
            this.props.setUser(userDetails);
        }).catch(({ code }) => {
            let error = code.split('/')[1].replace(/-/g, ' ');

            this.setState({
                isUpdateUserDisabled: false,
                saveUserError: error
            });
        });
    }

    render() {
        return (
            <LoginForm
                {...this.state}
                onPhoneNumberChange={this.onPhoneNumberChange}
                onCountryCodeChange={this.onCountryCodeChange}
                sendOTP={this.sendOTP}
                onOTPChange={this.onOTPChange}
                verifyOTP={this.verifyOTP}
                onUserNameChange={this.onUserNameChange}
                saveUserDetails={this.saveUserDetails}
            />
        );
    }
}

export default Login;