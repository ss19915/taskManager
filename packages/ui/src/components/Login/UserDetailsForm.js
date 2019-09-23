import React from 'react';
import { Card, Typography, TextField, Button, Grid } from '@task-manager/theme';

const UserDetailsForm = (props) => {
    const {
        onUserNameChange,
        saveUserDetails,
        error,
        isUpdateUserDisabled,
    } = props;
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
                        title='User Details'
                    />
                    <Card.Content>
                        <Typography>Full Name</Typography>
                        <TextField
                            onChange={({ target: { value } }) => onUserNameChange(value)}
                        />
                        {error && <Typography color='error'>{error}</Typography>}
                    </Card.Content>
                    <Card.Actions>
                        <Button disabled={isUpdateUserDisabled} onClick={saveUserDetails}>Save</Button>
                    </Card.Actions>
                </Card>
            </Grid>
        </Grid>
    );
}
export default UserDetailsForm;