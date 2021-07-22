import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import QuotePdf from "./QuotePdf";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
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
}));

export default function PdfModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: 8, marginBottom: 20 }}
        onClick={handleOpen}
      >
        Create Quote PDF
      </Button>
      <Modal
        open={open}
        className={classes.modal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Dispenser Quote</h2>
          <p id="transition-modal-description">
            If everything looks good you can download or print the quote. If not{" "}
            <Button variant="outlined" size="small" onClick={handleClose}>
              change the quote details
            </Button>
          </p>
          <br />
          <PDFViewer width={800} height={800}>
            <QuotePdf {...props} />
          </PDFViewer>
        </div>
      </Modal>
    </div>
  );
}
