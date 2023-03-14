import * as React from "react";
import Button from "./Button";
import Dialog from "@mui/material/Dialog";
import DeleteIcon from "@mui/icons-material/Delete";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function DeletePackage({ packageDetails }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleAgreeToDelete = async () => {
    const isDelated = await axios.delete(
      "http://localhost:3000/deletePackage",
      {
        id: packageDetails_id,
      }
    );
    isDelated.then((data) => console.log(data));
    setOpen(false);
  };

  const handleDisAgree = () => {
    setOpen(false);
  };

  return (
    <div>
      <DeleteIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleDisAgree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          style={{
            width: "350px",
            height: "80px",
            textAlign: "center",
          }}
        >
          <DialogContentText
            id="alert-dialog-description"
            style={{ fontSize: "20px" }}
          >
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Button
            onClick={handleAgreeToDelete}
            style={{
              backgroundColor: "red",
              color: "white",
              width: "5rem",
              marginRight: "1rem",
            }}
          >
            Yes
          </Button>
          <Button
            onClick={handleDisAgree}
            style={{ backgroundColor: "green", color: "white", width: "4rem" }}
            autoFocus
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
