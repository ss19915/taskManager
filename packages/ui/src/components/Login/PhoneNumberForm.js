import React from 'react';
import { Card, Typography, TextField, Button, Grid, Menu, Select } from '@task-manager/theme';
import { sendOTPButtonId, COUNRTY_CODES } from './constants';

const minPhoneNumberLength = 3

const sendOTPButtonRef = React.createRef();

class CountryDropdown extends React.PureComponent {
    render() {
        const {
            countryCode,
            onCountryCodeChange,
            disabled,
        } = this.props;

        return (
            <Select
                value={countryCode}
                onChange={({ target: { value } }) => onCountryCodeChange(value)}
                MenuProps={{ keepMounted: true }}
                disabled={disabled}
            >
                {COUNRTY_CODES.map(({ name, code }) => (
                    <Menu.Item tooltip={name} key={name} value={code}>{name}</Menu.Item>
                ))}
            </Select>
        );
    }
}

const PhoneNumberForm = (props) => {
    const {
        phoneNumber = '',
        countryCode,
        onPhoneNumberChange,
        onCountryCodeChange,
        sendOTP,
        error,
        isSendOTPDisabled,
    } = props;

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendOTPButtonRef.current.click();
        }
    };

    const isValidNumber = phoneNumber.length > minPhoneNumberLength;

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item>
                <Card>
                    <Card.Content>
                        <Typography>Phone Number</Typography>
                        <CountryDropdown
                            countryCode={countryCode}
                            disabled={isSendOTPDisabled}
                            onCountryCodeChange={onCountryCodeChange}
                        />
                        <TextField
                            autoFocus
                            value={phoneNumber}
                            onChange={({ target: { value } }) => onPhoneNumberChange(value)}
                            disabled={isSendOTPDisabled}
                            onKeyDown={onKeyDown}
                        />
                        {error && <Typography color='error'>{error}</Typography>}
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            disabled={!isValidNumber || isSendOTPDisabled}
                            id={sendOTPButtonId}
                            onClick={sendOTP}
                            ref={sendOTPButtonRef}
                        >
                            Send OTP
                        </Button>
                    </Card.Actions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default PhoneNumberForm;