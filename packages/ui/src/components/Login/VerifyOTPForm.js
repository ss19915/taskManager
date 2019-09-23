import React from 'react';
import { Card, Typography, TextField, Button, Grid, Menu, Select } from '@task-manager/theme';

const OTPLength = 6;

const VerifyOTPForm = (props) => {
    const {
        OTP = '',
        onOTPChange,
        verifyOTP,
        error,
        isVerifyOTPDisabled,
    } = props;

    const isValidOTP = OTP.length === OTPLength;

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
                        <Typography>Enter OTP</Typography>
                        <TextField
                            value={OTP}
                            onChange={({ target: { value } }) => onOTPChange(value)}
                        />
                        {error && <Typography color='error'>{error}</Typography>}
                    </Card.Content>
                    <Card.Actions>
                        <Button disabled={isVerifyOTPDisabled || !isValidOTP} onClick={verifyOTP}>Send OTP</Button>
                    </Card.Actions>
                </Card>
            </Grid>
        </Grid>
    );
}
export default VerifyOTPForm;