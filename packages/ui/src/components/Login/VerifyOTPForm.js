import React from 'react';
import { Card, Typography, TextField, Button, Grid } from '@task-manager/theme';

const OTPLength = 6;

const verifyOTPButtonRef = React.createRef();

const VerifyOTPForm = (props) => {
    const {
        OTP = '',
        onOTPChange,
        verifyOTP,
        error,
        isVerifyOTPDisabled,
        phoneNumber,
    } = props;
    
    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            verifyOTPButtonRef.current.click();
        }
    };

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
                    <Card.Header
                        title={phoneNumber}
                    />
                    <Card.Content>
                        <Typography>Enter OTP</Typography>
                        <TextField
                            value={OTP}
                            onChange={({ target: { value } }) => onOTPChange(value)}
                            onKeyDown={onKeyDown}
                            autoFocus
                        />
                        {error && <Typography color='error'>{error}</Typography>}
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            disabled={isVerifyOTPDisabled || !isValidOTP}
                            onClick={verifyOTP}
                            ref={verifyOTPButtonRef}
                        >
                            Verify OTP
                        </Button>
                    </Card.Actions>
                </Card>
            </Grid>
        </Grid>
    );
}
export default VerifyOTPForm;