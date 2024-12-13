import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    '& .MuiDialog-paper': {
      margin: '16px',
      width: '100%',
      maxWidth: '800px',
    }
  },
  dialogContent: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    '& > *': {
      marginBottom: theme.spacing(3),
    }
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    fontSize: '2rem'
  },
  alert: {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    width: '100%'
  },
  successAlert: {
    backgroundColor: '#f0fdf4',
    color: '#166534'
  },
  errorAlert: {
    backgroundColor: '#fef2f2',
    color: '#991b1b'
  },
  submitButton: {
    backgroundColor: '#EF4444',
    color: 'white',
    padding: theme.spacing(1.5),
    '&:hover': {
      backgroundColor: '#DC2626'
    }
  },
  textField: {
    width: '100%'
  },
  formControl: {
    width: '100%'
  },
  consentText: {
    color: theme.palette.text.secondary,
    fontSize: '0.875rem',
    '& a': {
      color: '#2563eb',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
}));

const ShipNowForm = ({ open, onClose }) => {
  const classes = useStyles();
  const [status, setStatus] = React.useState({ type: '', message: '' });
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    organizationName: '',
    workEmail: '',
    phoneNumber: '',
    userType: '',
    helpType: '',
    pickupLocation: '',
    deliveryLocation: '',
    commodity: '',
    shipmentWeight: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xpwzenvq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Name: `${formData.firstName} ${formData.lastName}`,
          Organization: formData.organizationName,
          Email: formData.workEmail,
          Phone: formData.phoneNumber,
          UserType: formData.userType,
          RequestType: formData.helpType,
          PickupLocation: formData.pickupLocation,
          DeliveryLocation: formData.deliveryLocation,
          Commodity: formData.commodity,
          ShipmentWeight: formData.shipmentWeight
        })
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: "Your request has been submitted successfully!"
        });
        setTimeout(() => {
          onClose();
          setFormData({
            firstName: '',
            lastName: '',
            organizationName: '',
            workEmail: '',
            phoneNumber: '',
            userType: '',
            helpType: '',
            pickupLocation: '',
            deliveryLocation: '',
            commodity: '',
            shipmentWeight: ''
          });
        }, 2000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: "There was an error submitting your request. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      className={classes.dialogContainer}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle disableTypography>
        <Typography variant="h4" className={classes.title}>
          Get in touch
        </Typography>
      </DialogTitle>

      <DialogContent className={classes.dialogContent}>
        {status.message && (
          <div className={`${classes.alert} ${
            status.type === 'success' ? classes.successAlert : classes.errorAlert
          }`}>
            {status.type === 'success' ? 
              <CheckCircle2 size={20} /> : 
              <AlertCircle size={20} />
            }
            <Typography>{status.message}</Typography>
          </div>
        )}

        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                label="First Name"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                label="Last Name (Optional)"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>

          <TextField
            className={classes.textField}
            label="Organization Name"
            name="organizationName"
            required
            value={formData.organizationName}
            onChange={handleChange}
            variant="outlined"
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                label="Work Email"
                name="workEmail"
                type="email"
                required
                value={formData.workEmail}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                label="Phone Number (Optional)"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Typography className={classes.consentText}>
            By providing my phone number, I provide Sunny Logistics with consent to receive messages regarding
            shipment opportunities or messages regarding a specific logistic assignment as needed. SMS data
            rates may apply. <a href="/privacy">Privacy policy</a> and <a href="/terms">terms</a>. 
            Text STOP to no longer receive messages.
          </Typography>

          <FormControl variant="outlined" className={classes.formControl} required>
            <InputLabel>Which option best describes you?</InputLabel>
            <Select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              label="Which option best describes you?"
            >
              <MenuItem value="shipper">I'm a shipper</MenuItem>
              <MenuItem value="carrier">I'm a carrier</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl} required>
            <InputLabel>How can we help you today?</InputLabel>
            <Select
              name="helpType"
              value={formData.helpType}
              onChange={handleChange}
              label="How can we help you today?"
            >
              <MenuItem value="quote">I'd like to get a quote</MenuItem>
              <MenuItem value="info">I need more information</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                label="Pickup Location"
                name="pickupLocation"
                placeholder="City, State"
                value={formData.pickupLocation}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                label="Delivery Location"
                name="deliveryLocation"
                placeholder="City, State"
                value={formData.deliveryLocation}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                label="Commodity"
                name="commodity"
                placeholder="e.g., onions"
                value={formData.commodity}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Shipment Weight (lbs)</InputLabel>
                <Select
                  name="shipmentWeight"
                  value={formData.shipmentWeight}
                  onChange={handleChange}
                  label="Shipment Weight (lbs)"
                >
                  <MenuItem value="0-9999">0-9,999</MenuItem>
                  <MenuItem value="10000-19999">10,000-19,999</MenuItem>
                  <MenuItem value="20000+">20,000+</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button 
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            className={classes.submitButton}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ShipNowForm;