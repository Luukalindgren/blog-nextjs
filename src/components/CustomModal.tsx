import { Backdrop, Box, Fade, Modal } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "0.75rem",
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({ open, close, text, clicked }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={close}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <h3 className="text-lg font-semibold text-center">
            {text}
          </h3>
          <div className="flex">
            <button
              className="px-16 py-4 mx-auto my-4 transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95"
              onClick={clicked}
            >
              OK
            </button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
