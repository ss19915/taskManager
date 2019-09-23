import React from 'react';
import { Card, Typography, TextField, Button, Grid, Menu, Select } from '@task-manager/theme';
import { sendOTPButtonId, COUNRTY_CODES } from './constants';

const minPhoneNumberLength = 3

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
                        <Select
                            value={countryCode}
                            onChange={({ target: { value } }) => onCountryCodeChange(value)}
                        >
                            {COUNRTY_CODES.map(({ name, code, dial_code }) => (
                                <Menu.Item tooltip={name} key={code} value={dial_code}>{code}</Menu.Item>
                            ))}
                        </Select>
                        <TextField
                            value={phoneNumber}
                            onChange={({ target: { value } }) => onPhoneNumberChange(value)}
                        />
                        {error && <Typography color='error'>{error}</Typography>}
                    </Card.Content>
                    <Card.Actions>
                        <Button disabled={!isValidNumber || isSendOTPDisabled} id={sendOTPButtonId} onClick={sendOTP}>Send OTP</Button>
                    </Card.Actions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default PhoneNumberForm;