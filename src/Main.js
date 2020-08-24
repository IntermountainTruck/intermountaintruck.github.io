import React, { Component } from "react";
// import Select from "react-select";
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
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 500,
    margin: "auto",
    marginTop: 30,
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
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const dispensers = [
  {
    type1: "010 disp",
    price: 15100,
  },
  {
    type2: "001 disp",
    price: 14260,
  },
  {
    type3: "001 auto",
    price: 15240,
  },
  {
    type4: "AGE disp",
    price: 19350,
  },
  {
    type5: "AGC01 auto",
    price: 22080,
  },
];
const tanks = [
  {
    type1: "no tank",
    price: -3510,
  },
  {
    type2: "Customer Supplied",
    price: -2410,
  },
  {
    type3: "500 Gallon",
    price: -691,
  },
  {
    type4: "1000 Gallon",
    price: 0,
  },
  {
    type5: "Vertical 1000 Gallon",
    price: 7240,
  },
  {
    type6: "1990 Gallon",
    price: 6230,
  },
];

export default function Main() {
  const classes = useStyles();
  const [dispenser, setDispenser] = React.useState("");
  const [dispenserPrice, setDispenserPrice] = React.useState(0);
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
  const [adaptors, setAdaptors] = React.useState("");
  const [adaptorsPrice, setAdaptorsPrice] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleDispenser = (event) => {
    setDispenser(event.target.value);
    if (event.target.value === "010 Dispenser") {
      setDispenserPrice(15100);
    } else if (event.target.value === "001 Dispenser") {
      setDispenserPrice(14260);
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
        purgerPrice
    );
    console.log("total", dispenserPrice + tankPrice);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dispenser Quote Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className={classes.card}>
        <CardContent>
          {/* <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Select a dispenser
          </Typography> */}
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
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={calculateTotal} size="small">
            Calculate
          </Button>
          <div>Total: {formatter.format(total)}</div>
        </CardActions>
      </Card>
    </div>
  );
}
