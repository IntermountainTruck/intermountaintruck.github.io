import React from "react";
import Pdf from "react-to-pdf";
import {
  PDFViewer,
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";

import Logo from "./Website Header Logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 900,
    flexGrow: 1,
    margin: "auto",
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    margin: "auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  quoteButton: {
    margin: 8,
  },
  logo: {
    display: "block",
    maxWidth: 200,
    margin: "auto",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  inputs: {},
}));

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 30,
  },
});

export default function Main() {
  const classes = useStyles();
  const [dispenser, setDispenser] = React.useState("");
  const [dispenserPrice, setDispenserPrice] = React.useState(0);
  const [selectedDispenser, setSelectedDispenser] = React.useState("None");
  const [tank, setTank] = React.useState("");
  const [tankPrice, setTankPrice] = React.useState(0);
  const [pump, setPump] = React.useState("");
  const [pumpPrice, setPumpPrice] = React.useState(0);
  const [meter, setMeter] = React.useState("");
  const [meterPrice, setMeterPrice] = React.useState(0);
  const [power, setPower] = React.useState("");
  const [powerPrice, setPowerPrice] = React.useState(0);
  const [EStop, setEStop] = React.useState("");
  const [EStopPrice, setEStopPrice] = React.useState(0);
  const [Scale, setScale] = React.useState("");
  const [scalePrice, setScalePrice] = React.useState(0);
  const [shipping, setShipping] = React.useState("");
  const [shippingPrice, setShippingPrice] = React.useState(0);
  const [purger, setPurger] = React.useState("");
  const [purgerPrice, setPurgerPrice] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [adapters, setAdapters] = React.useState({
    EuroStyle: false,
    Forklift: false,
    Hanson: false,
    POL: false,
    RV: false,
    HighCapacity: false,
  });
  const [open, setOpen] = React.useState(false);
  const [showInputs, setShowInputs] = React.useState(false);
  const [quoteNumber, setQuoteNumber] = React.useState(" ");

  const inputValues = {
    quoteNum: "",
    companyName: "",
    customerName: "",
    yourName: "",
  };

  const handleOpen = () => {
    setQuoteNumber(inputValues.quoteNum);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeQuoteNum = (event) => {
    inputValues.quoteNum = event;
  };

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ marginTop: 40 }}>
          <Text style={{ textAlign: "center", fontSize: 30 }}>
            Intermountain Truck Rebuilders
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16, marginTop: 10 }}>
            2927 S American Way Ogden, UT 84401
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16, marginTop: 10 }}>
            800-950-9261
          </Text>
          <Text>Quote # {quoteNumber}</Text>
          <Text>ATTN: </Text>
          <Text>Date: </Text>
          <Text>{selectedDispenser}</Text>
        </View>
      </Page>
    </Document>
  );

  const CreateQuote = (props) => {
    console.log("CreateQuoteRendered");
    return (
      <div style={{ margin: 8 }}>
        <Typography style={{ fontSize: 20, margin: 20 }}>
          To create a PDF enter Quote #, Comapny Name and Customer Name then
          click GENERATE
        </Typography>
        <form className={classes.inputs} noValidate autoComplete="off">
          <Grid container spacing={2} direction="row" justify="center">
            <Grid item xs={6} sm={3}>
              <TextField
                id="outlined-basic"
                label="Quote #"
                variant="outlined"
                onChange={(event) => onChangeQuoteNum(event.target.value)}
                defaultValue={inputValues.quoteNum}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="outlined-basic"
                label="Customer Name"
                variant="outlined"
              />
            </Grid>{" "}
            <Grid item xs={6} sm={3}>
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
        <Button
          style={{ marginBottom: 10, marginTop: 30 }}
          variant="contained"
          color="secondary"
          type="button"
          onClick={handleOpen}
        >
          Generate
        </Button>
        <button onClick={() => console.log("test", inputValues.quoteNum)}>
          Test
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Dispenser Quote</h2>
              <p id="transition-modal-description">
                If everything looks good you can download or print the quote. If
                not{" "}
                <button onClick={handleClose}>change the quote details</button>
              </p>

              <PDFViewer width={800} height={800}>
                <MyDocument />
              </PDFViewer>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleDispenser = (event) => {
    setDispenser(event.target.value);
    if (event.target.value === "010 Dispenser") {
      setDispenserPrice(15100);
      setSelectedDispenser("010 Dispenser");
    } else if (event.target.value === "001 Dispenser") {
      setDispenserPrice(14260);
      setSelectedDispenser("001 Dispenser");
    } else if (event.target.value === "001 Auto-gas") {
      setDispenserPrice(15240);
    } else if (event.target.value === "AGE Auto-gas") {
      setDispenserPrice(19350);
    } else if (event.target.value === "AGC01 Auto-gas") {
      setDispenserPrice(22080);
    } else if (event.target.value === "None") {
      setDispenserPrice(0);
    }
  };

  const handleTank = (event) => {
    setTank(event.target.value);
    if (event.target.value === "No Tank") {
      setTankPrice(-3510);
    } else if (event.target.value === "500") {
      setTankPrice(-691);
    } else if (event.target.value === "1000") {
      setTankPrice(0);
    } else if (event.target.value === "Customer Supplied Tank") {
      setTankPrice(-2410);
    } else if (event.target.value === "Vertical 1000") {
      setTankPrice(7240);
    } else if (event.target.value === "1990") {
      setTankPrice(6230);
    }
  };

  const handlePump = (event) => {
    setPump(event.target.value);
    if (event.target.value === "Corken C10 2hp") {
      setPumpPrice(0);
    } else if (event.target.value === "Corken C12 2hp") {
      setPumpPrice(750);
    } else if (event.target.value === "Corken C16 3hp Single Phase") {
      setPumpPrice(2038);
    } else if (event.target.value === "Corken C16 3hp Three Phase") {
      setPumpPrice(1084);
    } else if (event.target.value === "Ebsray RC20 3hp Single Phase") {
      setPumpPrice(3539);
    }
  };

  const handleMeter = (event) => {
    setMeter(event.target.value);
    if (event.target.value === "No Meter") {
      setMeterPrice(-840);
    } else if (event.target.value === "Non Temp Comp") {
      setMeterPrice(0);
    } else if (event.target.value === "Temp Comp") {
      setMeterPrice(1084);
    } else if (event.target.value === "Midcom MCR-09ISA") {
      setMeterPrice(4606);
    }
  };

  const handlePower = (event) => {
    setPower(event.target.value);
    if (event.target.value === "110V AC") {
      setPowerPrice(0);
    } else if (event.target.value === "220V AC") {
      setPowerPrice(0);
    } else if (event.target.value === "Skidded Off Grid Generator") {
      setPowerPrice(8260);
    }
  };

  const handleEStop = (event) => {
    setEStop(event.target.value);
    if (event.target.value === "Cable Pull Internal Shutdown") {
      setEStopPrice(0);
    } else if (event.target.value === "Pneumatic Internal Shutdown") {
      setEStopPrice(950);
    } else if (
      event.target.value === "Pneumatic and Electric Internal Shutdown"
    ) {
      setEStopPrice(2000);
    }
  };

  const handleScale = (event) => {
    setScale(event.target.value);
    if (event.target.value === "Customer Supplied Scale") {
      setScalePrice(0);
    } else if (event.target.value === "Manual Beam Scale") {
      setScalePrice(792);
    } else if (event.target.value === "Fairbank E-Scale Filling System") {
      setScalePrice(12600);
    }
  };

  const handleShipping = (event) => {
    setShipping(event.target.value);
    if (event.target.value === "Customer Pickup") {
      setShippingPrice(0);
    } else if (event.target.value === "Nationwide Delivery") {
      setShippingPrice(950);
    }
  };

  const handlePurger = (event) => {
    setPurger(event.target.value);
    if (event.target.value === "No Cylinder Purge System") {
      setPurgerPrice(0);
    } else if (event.target.value === "Cylinder Purge System") {
      setPurgerPrice(336.5);
    }
  };

  const [EuroStylePrice, setEuroStylePrice] = React.useState(0);
  const [ForkliftPrice, setForkliftPrice] = React.useState(0);
  const [HansonPrice, setHansonPrice] = React.useState(0);
  const [POLPrice, setPOLPrice] = React.useState(0);
  const [RVPrice, setRVPrice] = React.useState(0);
  const [HighCapacityPrice, setHighCapacityPrice] = React.useState(0);

  const handleEuroStyle = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    console.log([event.target.name], event.target.checked);
    if (event.target.name === "EuroStyle" && event.target.checked === true) {
      setEuroStylePrice(115.68);
    } else {
      setEuroStylePrice(0);
    }
  };

  const handleForklift = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    console.log([event.target.name], event.target.checked);
    if (event.target.name === "Forklift" && event.target.checked === true) {
      setForkliftPrice(68.98);
    } else {
      setForkliftPrice(0);
    }
  };

  const handleHanson = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    console.log([event.target.name], event.target.checked);
    if (event.target.name === "Hanson" && event.target.checked === true) {
      setHansonPrice(15);
    } else {
      setHansonPrice(0);
    }
  };

  const handlePOL = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    console.log([event.target.name], event.target.checked);
    if (event.target.name === "POL" && event.target.checked === true) {
      setPOLPrice(61.97);
    } else {
      setPOLPrice(0);
    }
  };

  const handleRV = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    console.log([event.target.name], event.target.checked);
    if (event.target.name === "RV" && event.target.checked === true) {
      setRVPrice(36.94);
    } else {
      setRVPrice(0);
    }
  };

  const handleHighCapacity = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    console.log([event.target.name], event.target.checked);
    if (event.target.name === "HighCapacity" && event.target.checked === true) {
      setHighCapacityPrice(131.84);
    } else {
      setHighCapacityPrice(0);
    }
  };

  const { EuroStyle, Forklift, Hanson, POL, RV, HighCapacity } = adapters;

  const calculateTotal = () => {
    setTotal(
      dispenserPrice +
        tankPrice +
        pumpPrice +
        meterPrice +
        powerPrice +
        EStopPrice +
        scalePrice +
        shippingPrice +
        purgerPrice +
        EuroStylePrice +
        ForkliftPrice +
        HansonPrice +
        POLPrice +
        RVPrice +
        HighCapacityPrice
    );
    // console.log("total", dispenserPrice + tankPrice);
  };

  // const ref = React.createRef();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dispenser Quote Builder
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className={classes.card}>
        <CardContent>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              Dispenser
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={dispenser}
              onChange={handleDispenser}
            >
              <MenuItem value={"None"}>None</MenuItem>
              <MenuItem value={"010 Dispenser"}>010 Dispenser</MenuItem>
              <MenuItem value={"001 Dispenser"}>001 Dispenser</MenuItem>
              <MenuItem value={"001 Auto-gas"}>001 Auto-gas</MenuItem>
              <MenuItem value={"AGE Auto-gas"}>AGE Auto-gas</MenuItem>
              <MenuItem value={"AGC01 Auto-gas"}>AGC01 Auto-gas</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Tank</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={tank}
              onChange={handleTank}
            >
              <MenuItem value={"No Tank"}>No Tank</MenuItem>
              <MenuItem value={"Customer Supplied Tank"}>
                Cusotomer Supplied Tank
              </MenuItem>
              <MenuItem value={"500"}>500 Gallon</MenuItem>
              <MenuItem value={"1000"}>1000 Gallon</MenuItem>
              <MenuItem value={"Vertical 1000"}>Vertical 1000</MenuItem>
              <MenuItem value={"1990"}>1990 Gallon</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Pump</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={pump}
              onChange={handlePump}
            >
              <MenuItem value={"Corken C10 2hp"}>Corken C10 2hp</MenuItem>
              <MenuItem value={"Corken C12 2hp"}>Corken C12 2hp</MenuItem>
              <MenuItem value={"Corken C16 3hp Single Phase"}>
                Corken C16 3hp Single Phase
              </MenuItem>
              <MenuItem value={"Corken C16 3hp Three Phase"}>
                Corken C16 3hp Three Phase
              </MenuItem>
              <MenuItem value={"Ebsray RC20 3hp Single Phase"}>
                Ebsray RC20 3hp Single Phase
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Meter</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={meter}
              onChange={handleMeter}
            >
              <MenuItem value={"No Meter"}>No Meter</MenuItem>
              <MenuItem value={"Non Temp Comp"}>Non Temp Comp</MenuItem>
              <MenuItem value={"Temp Comp"}>Temp Comp</MenuItem>
              <MenuItem value={"Midcom MCR-09ISA"}>Midcom MCR-09ISA</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Power</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={power}
              onChange={handlePower}
            >
              <MenuItem value={"110V AC"}>110V AC</MenuItem>
              <MenuItem value={"220V AC"}>220V AC</MenuItem>
              <MenuItem value={"Skidded Off Grid Generator"}>
                Skidded Off Grid Generator
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">E-Stop</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={EStop}
              onChange={handleEStop}
            >
              <MenuItem value={"Cable Pull Internal Shutdown"}>
                Cable Pull Internal Shutdown
              </MenuItem>
              <MenuItem value={"Pneumatic Internal Shutdown"}>
                Pneumatic Internal Shutdown
              </MenuItem>
              <MenuItem value={"Pneumatic and Electric Internal Shutdown"}>
                Pneumatic and Electric Internal Shutdown
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Scale</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={Scale}
              onChange={handleScale}
            >
              <MenuItem value={"Customer Supplied Scale"}>
                Customer Supplied Scale
              </MenuItem>
              <MenuItem value={"Manual Beam Scale"}>Manual Beam Scale</MenuItem>
              <MenuItem value={"Fairbank E-Scale Filling System"}>
                Fairbank E-Scale Filling System
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              Shipping
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={shipping}
              onChange={handleShipping}
            >
              <MenuItem value={"Customer Pickup"}>Custom Pickup</MenuItem>
              <MenuItem value={"Nationwide Delivery"}>
                Nationwide Delivery
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Purger</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={purger}
              onChange={handlePurger}
            >
              <MenuItem value={"No Cylinder Purge System"}>
                No Cylinder Purge System
              </MenuItem>
              <MenuItem value={"Cylinder Purge System"}>
                Cylinder Purge System
              </MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={EuroStyle}
                    onChange={handleEuroStyle}
                    name="EuroStyle"
                  />
                }
                label="Euro Style Staubli Adapter"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Forklift}
                    onChange={handleForklift}
                    name="Forklift"
                  />
                }
                label="Forklift Adapter"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Hanson}
                    onChange={handleHanson}
                    name="Hanson"
                  />
                }
                label="Hanson Adapter"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={POL} onChange={handlePOL} name="POL" />
                }
                label="POL Adapter"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={RV} onChange={handleRV} name="RV" />
                }
                label="RV Filling Adapter"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={HighCapacity}
                    onChange={handleHighCapacity}
                    name="HighCapacity"
                  />
                }
                label="High Capacity Filling Adapter"
              />
            </FormGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={calculateTotal}
                size="small"
              >
                Calculate
              </Button>
            </Grid>
            <Grid item xs={4}>
              <div>Total: {formatter.format(total)}</div>
            </Grid>
          </Grid>
        </CardActions>
        <div style={{ margin: 8 }}>
          <Typography style={{ fontSize: 20, margin: 20 }}>
            To create a PDF enter Quote #, Comapny Name and Customer Name then
            click GENERATE
          </Typography>
          <form className={classes.inputs} noValidate autoComplete="off">
            <Grid container spacing={2} direction="row" justify="center">
              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-basic"
                  label="Quote #"
                  variant="outlined"
                  onChange={(event) => setQuoteNumber(event.target.value)}
                  defaultValue={quoteNumber}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-basic"
                  label="Company Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-basic"
                  label="Customer Name"
                  variant="outlined"
                />
              </Grid>{" "}
              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </form>
          <Button
            style={{ marginBottom: 10, marginTop: 30 }}
            variant="contained"
            color="secondary"
            type="button"
            onClick={handleOpen}
          >
            Generate
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Dispenser Quote</h2>
                <p id="transition-modal-description">
                  If everything looks good you can download or print the quote.
                  If not{" "}
                  <button onClick={handleClose}>
                    change the quote details
                  </button>
                </p>

                <PDFViewer width={800} height={800}>
                  <MyDocument />
                </PDFViewer>
              </div>
            </Fade>
          </Modal>
        </div>
      </Card>
      {/* <Card className={classes.card}>
    
        <CreateQuote />
      </Card> */}
    </div>
  );
}
