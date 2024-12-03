import { ButtonBase, Typography } from "@mui/material";
import React, { FC } from "react";

const TodoCard: FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => {
  return (
    <ButtonBase sx={{ border: "1px solid gray", height: 50 }} onClick={onClick}>
      <Typography>{text}</Typography>
    </ButtonBase>
  );
};

export default TodoCard;
