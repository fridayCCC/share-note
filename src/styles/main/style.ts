import CSS from "csstype";

export const kListWrap: CSS.Properties = {
  display: "flex",
  height: "100%",
  alignItems: "center",
  flexDirection: "column",
  padding: "2em 4em",
};

export const kTodoContentWrap: CSS.Properties = {
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
};

export const kTodoContentTitlte: CSS.Properties = {
  fontSize: "1.6rem",
};

export const kButton: CSS.Properties = {
  fontSize: "0.9rem",
  borderRadius: "6px",
  padding: "0.4em 0.8em",
  marginRight: "0.8em",
};

export const kTodoInput: CSS.Properties = {
  fontSize: "0.9rem",
  padding: "0.4em",
  width: "400px",
  marginBottom: "10px",
};

export const kToggleCheckBox: CSS.Properties = {
  zoom: "1.5",
  padding: "10px",
};

export const kButtonWrap: CSS.Properties = {
  display: "flex",
  alignItems: "center",
};

export const kInputFormWrap: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "20px",
};
