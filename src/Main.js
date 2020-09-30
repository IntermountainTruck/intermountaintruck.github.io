import React from "react";
import PdfModal from "./PdfModal";

import { makeStyles } from "@material-ui/core/styles";
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
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

// import Logo from "./Website Header Logo.png";

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

export default function Main() {
  const classes = useStyles();
  const [cabinet, setCabinet] = React.useState("");
  const [cabinetPrice, setCabinetPrice] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = React.useState({
    cabinet: "",
    tank: "",
    pump: "",
    meter: "",
    power: "",
    eStop: "",
    scale: "",
    shipping: "",
    purger: "",
    quoteNum: "",
    companyName: "",
    customerName: "",
    yourName: "",
    none: "",
    euroStyle: "",
    forklift: "",
    hanson: "",
    pol: "",
    rv: "",
    highCapacity: "",
  });

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
  const [discount, setDiscount] = React.useState(0);
  const [discountAmount, setDiscountAmount] = React.useState(0);
  const [disableDiscount, setDisableDiscount] = React.useState(false);
  const [adapters, setAdapters] = React.useState({
    None: false,
    EuroStyle: false,
    Forklift: false,
    Hanson: false,
    POL: false,
    RV: false,
    HighCapacity: false,
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const addDiscount = () => {
    console.log("discount percentage: ", discount, "total: ", total);
    setDiscountAmount((discount / 100) * total);
    setDisableDiscount(true);
    console.log("discount total: ", total - discountAmount);
    // setTotal(discountTotal);
  };

  const resetDiscount = () => {
    setDiscountAmount(0);
    setDisableDiscount(false);
  };

  const handleCabinet = (event) => {
    setCabinet(event.target.value);
    if (event.target.value === "- 010 Dispenser Cabinet") {
      setCabinetPrice(15100);
    } else if (event.target.value === "- 001 Dispenser Cabinet") {
      setCabinetPrice(14260);
    } else if (event.target.value === "- 001 Auto-gas Cabinet") {
      setCabinetPrice(15240);
    } else if (event.target.value === "- AGE Auto-gas Cabinet") {
      setCabinetPrice(19350);
    } else if (event.target.value === "- AGC01 Auto-gas Cabinet") {
      setCabinetPrice(22080);
    } else if (event.target.value === "- No Cabinet") {
      setCabinetPrice(0);
    }
    setSelectedOptions({ ...selectedOptions, cabinet: event.target.value });
  };

  const handleTank = (event) => {
    setTank(event.target.value);
    if (event.target.value === "- No Tank") {
      setTankPrice(-3510);
    } else if (event.target.value === "- 500 Gallon Tank") {
      setTankPrice(-691);
    } else if (event.target.value === "- 1000 Gallon Tank") {
      setTankPrice(0);
    } else if (event.target.value === "- Customer Supplied Tank") {
      setTankPrice(-2410);
    } else if (event.target.value === "- Vertical 1000 Gallon Tank") {
      setTankPrice(7240);
    } else if (event.target.value === "- 1990 Gallon Tank") {
      setTankPrice(6230);
    }
    setSelectedOptions({ ...selectedOptions, tank: event.target.value });
  };

  const handlePump = (event) => {
    setPump(event.target.value);
    if (event.target.value === "- Corken C10 2hp Pump") {
      setPumpPrice(0);
    } else if (event.target.value === "- Corken C12 2hp Pump") {
      setPumpPrice(750);
    } else if (event.target.value === "- Corken C16 3hp Single Phase Pump") {
      setPumpPrice(2038);
    } else if (event.target.value === "- Corken C16 3hp Three Phase Pump") {
      setPumpPrice(1084);
    } else if (event.target.value === "- Ebsray RC20 3hp Single Phase Pump") {
      setPumpPrice(3539);
    }
    setSelectedOptions({ ...selectedOptions, pump: event.target.value });
  };

  const handleMeter = (event) => {
    setMeter(event.target.value);
    if (event.target.value === "- No Meter") {
      setMeterPrice(-840);
    } else if (event.target.value === "- Non Temp Comp Meter") {
      setMeterPrice(0);
    } else if (event.target.value === "- Temp Comp Meter") {
      setMeterPrice(1084);
    } else if (event.target.value === "- Midcom MCR-09ISA Meter") {
      setMeterPrice(4606);
    }
    setSelectedOptions({ ...selectedOptions, meter: event.target.value });
  };

  const handlePower = (event) => {
    setPower(event.target.value);
    if (event.target.value === "- Wired for 110V AC") {
      setPowerPrice(0);
    } else if (event.target.value === "- Wired for 220V AC") {
      setPowerPrice(0);
    } else if (event.target.value === "- Skidded Off Grid Generator") {
      setPowerPrice(8260);
    }
    setSelectedOptions({ ...selectedOptions, power: event.target.value });
  };

  const handleEStop = (event) => {
    setEStop(event.target.value);
    if (event.target.value === "- Cable Pull Emergency Shutdown") {
      setEStopPrice(0);
    } else if (event.target.value === "- Pneumatic Emergency Shutdown") {
      setEStopPrice(950);
    } else if (
      event.target.value === "- Pneumatic and Electric Emergency Shutdown"
    ) {
      setEStopPrice(2000);
    }
    setSelectedOptions({ ...selectedOptions, eStop: event.target.value });
  };

  const handleScale = (event) => {
    setScale(event.target.value);
    if (event.target.value === "- Customer Supplied Scale") {
      setScalePrice(0);
    } else if (event.target.value === "- Manual Beam Scale") {
      setScalePrice(792);
    } else if (event.target.value === "- Fairbank E-Scale Filling System") {
      setScalePrice(12600);
    }
    setSelectedOptions({ ...selectedOptions, scale: event.target.value });
  };

  const handleShipping = (event) => {
    setShipping(event.target.value);
    if (event.target.value === "- Customer Pickup") {
      setShippingPrice(0);
    } else if (event.target.value === "- Nationwide Delivery") {
      setShippingPrice(950);
    }
    setSelectedOptions({ ...selectedOptions, shipping: event.target.value });
  };

  const handlePurger = (event) => {
    setPurger(event.target.value);
    if (event.target.value === "- No Cylinder Purge System") {
      setPurgerPrice(0);
    } else if (event.target.value === "- Cylinder Purge System") {
      setPurgerPrice(336.5);
    }
    setSelectedOptions({ ...selectedOptions, purger: event.target.value });
  };

  const [EuroStylePrice, setEuroStylePrice] = React.useState(0);
  const [ForkliftPrice, setForkliftPrice] = React.useState(0);
  const [HansonPrice, setHansonPrice] = React.useState(0);
  const [POLPrice, setPOLPrice] = React.useState(0);
  const [RVPrice, setRVPrice] = React.useState(0);
  const [HighCapacityPrice, setHighCapacityPrice] = React.useState(0);

  const handleNone = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.value });
    if (event.target.name === "None" && event.target.checked === true) {
      setSelectedOptions({
        ...selectedOptions,
        none: "- None",
      });
    } else {
      setSelectedOptions({ ...selectedOptions, none: "" });
    }
  };

  const handleEuroStyle = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    if (event.target.name === "EuroStyle" && event.target.checked === true) {
      setEuroStylePrice(115.68);
      setSelectedOptions({
        ...selectedOptions,
        euroStyle: "- Euro Style Staubli",
      });
    } else {
      setEuroStylePrice(0);
      setSelectedOptions({ ...selectedOptions, euroStyle: "" });
    }
  };

  const handleForklift = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    if (event.target.name === "Forklift" && event.target.checked === true) {
      setForkliftPrice(68.98);
      setSelectedOptions({ ...selectedOptions, forklift: "- Forklift" });
    } else {
      setForkliftPrice(0);
      setSelectedOptions({ ...selectedOptions, forklift: "" });
    }
  };

  const handleHanson = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    if (event.target.name === "Hanson" && event.target.checked === true) {
      setHansonPrice(15);
      setSelectedOptions({ ...selectedOptions, hanson: "- Hanson" });
    } else {
      setHansonPrice(0);
      setSelectedOptions({ ...selectedOptions, hanson: "" });
    }
  };

  const handlePOL = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    if (event.target.name === "POL" && event.target.checked === true) {
      setPOLPrice(61.97);
      setSelectedOptions({ ...selectedOptions, pol: "- POL" });
    } else {
      setPOLPrice(0);
      setSelectedOptions({ ...selectedOptions, pol: "" });
    }
  };

  const handleRV = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    if (event.target.name === "RV" && event.target.checked === true) {
      setRVPrice(36.94);
      setSelectedOptions({ ...selectedOptions, rv: "- RV" });
    } else {
      setRVPrice(0);
      setSelectedOptions({ ...selectedOptions, rv: "" });
    }
  };

  const handleHighCapacity = (event) => {
    setAdapters({ ...adapters, [event.target.name]: event.target.checked });
    if (event.target.name === "HighCapacity" && event.target.checked === true) {
      setHighCapacityPrice(131.84);
      setSelectedOptions({
        ...selectedOptions,
        highCapacity: "- High Capacity",
      });
    } else {
      setHighCapacityPrice(0);
      setSelectedOptions({ ...selectedOptions, highCapacity: "" });
    }
  };

  const { None, EuroStyle, Forklift, Hanson, POL, RV, HighCapacity } = adapters;

  const calculateTotal = () => {
    setTotal(
      cabinetPrice +
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
        HighCapacityPrice -
        discountAmount
    );
  };

  React.useEffect(() => {
    calculateTotal();
  });

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
              Cabinet
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={cabinet}
              onChange={handleCabinet}
            >
              <MenuItem value={"- No Cabinet"}>None</MenuItem>
              <MenuItem value={"- 010 Dispenser Cabinet"}>
                010 Dispenser Cabinet
              </MenuItem>
              <MenuItem value={"- 001 Dispenser Cabinet"}>
                001 Dispenser Cabinet
              </MenuItem>
              <MenuItem value={"- 001 Auto-gas Cabinet"}>
                001 Auto-gas Cabinet
              </MenuItem>
              <MenuItem value={"- AGE Auto-gas Cabinet"}>
                AGE Auto-gas Cabinet
              </MenuItem>
              <MenuItem value={"- AGC01 Auto-gas Cabinet"}>
                AGC01 Auto-gas Cabinet
              </MenuItem>
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
              <MenuItem value={"- No Tank"}>No Tank</MenuItem>
              <MenuItem value={"- Customer Supplied Tank"}>
                Customer Supplied Tank
              </MenuItem>
              <MenuItem value={"- 500 Gallon Tank"}>500 Gallon</MenuItem>
              <MenuItem value={"- 1000 Gallon Tank"}>1000 Gallon</MenuItem>
              <MenuItem value={"- Vertical 1000 Gallon Tank"}>
                Vertical 1000
              </MenuItem>
              <MenuItem value={"- 1990 Gallon Tank"}>1990 Gallon</MenuItem>
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
              <MenuItem value={"- Corken C10 2hp Pump"}>
                Corken C10 2hp
              </MenuItem>
              <MenuItem value={"- Corken C12 2hp Pump"}>
                Corken C12 2hp
              </MenuItem>
              <MenuItem value={"- Corken C16 3hp Single Phase Pump"}>
                Corken C16 3hp Single Phase
              </MenuItem>
              <MenuItem value={"- Corken C16 3hp Three Phase Pump"}>
                Corken C16 3hp Three Phase
              </MenuItem>
              <MenuItem value={"- Ebsray RC20 3hp Single Phase Pump"}>
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
              <MenuItem value={"- No Meter"}>No Meter</MenuItem>
              <MenuItem value={"- Non Temp Comp Meter"}>Non Temp Comp</MenuItem>
              <MenuItem value={"- Temp Comp Meter"}>Temp Comp</MenuItem>
              <MenuItem value={"- Midcom MCR-09ISA Meter"}>
                Midcom MCR-09ISA
              </MenuItem>
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
              <MenuItem value={"- Wired for 110V AC"}>110V AC</MenuItem>
              <MenuItem value={"- Wired for 220V AC"}>220V AC</MenuItem>
              <MenuItem value={"- Skidded Off Grid Generator"}>
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
              <MenuItem value={"- Cable Pull Emergency Shutdown"}>
                Cable Pull Internal Shutdown
              </MenuItem>
              <MenuItem value={"- Pneumatic Emergency Shutdown"}>
                Pneumatic Internal Shutdown
              </MenuItem>
              <MenuItem value={"- Pneumatic and Electric Emergency Shutdown"}>
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
              <MenuItem value={"- Customer Supplied Scale"}>
                Customer Supplied Scale
              </MenuItem>
              <MenuItem value={"- Manual Beam Scale"}>
                Manual Beam Scale
              </MenuItem>
              <MenuItem value={"- Fairbank E-Scale Filling System"}>
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
              <MenuItem value={"- Customer Pickup"}>Custom Pickup</MenuItem>
              <MenuItem value={"- Nationwide Delivery"}>
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
              <MenuItem value={"- No Cylinder Purge System"}>
                No Cylinder Purge System
              </MenuItem>
              <MenuItem value={"- Cylinder Purge System"}>
                Cylinder Purge System
              </MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={None} onChange={handleNone} name="None" />
                }
                label="None"
              />
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
          <Grid container spacing={2} direction="column">
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 20,
                  color: "green",
                }}
              >
                Total: {formatter.format(total)}
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Discount %"
                variant="outlined"
                onChange={(event) => setDiscount(event.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                size="small"
                variant="contained"
                color="primary"
                disabled={disableDiscount}
                onClick={() => addDiscount()}
              >
                Add Discount
              </Button>

              <Button
                style={{ marginLeft: 10 }}
                size="small"
                variant="contained"
                color="secondary"
                onClick={() => resetDiscount()}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </CardActions>
        <div style={{ margin: 8 }}>
          <Typography style={{ fontSize: 16, margin: 20 }}>
            To create a PDF enter Quote #, Comapny Name, Customer Name and Your
            Name then click CREATE QUOTE PDF
          </Typography>
          <form className={classes.inputs} noValidate autoComplete="off">
            <Grid container spacing={2} direction="row" justify="center">
              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-basic"
                  label="Quote #"
                  variant="outlined"
                  onChange={(event) =>
                    setSelectedOptions({
                      ...selectedOptions,
                      quoteNum: event.target.value,
                    })
                  }
                  // defaultValue={}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-basic"
                  label="Company Name"
                  variant="outlined"
                  onChange={(event) =>
                    setSelectedOptions({
                      ...selectedOptions,
                      companyName: event.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-basic"
                  label="Customer Name"
                  variant="outlined"
                  onChange={(event) =>
                    setSelectedOptions({
                      ...selectedOptions,
                      customerName: event.target.value,
                    })
                  }
                />
              </Grid>{" "}
              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  onChange={(event) =>
                    setSelectedOptions({
                      ...selectedOptions,
                      yourName: event.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </form>
        </div>
        <PdfModal
          {...selectedOptions}
          adapterState={[adapters]}
          price={formatter.format(total)}
        />
      </Card>
    </div>
  );
}
