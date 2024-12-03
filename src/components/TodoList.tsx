import { Box, Stack, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";

const TodoList: FC<{ groupName?: string; children: ReactNode }> = ({
  groupName,
  children,
}) => {
  return (
    <Stack
      sx={{
        height: "100%",
        width: 240,
        ...(groupName
          ? {
              border: "1px solid gray",
            }
          : {}),
      }}
    >
      {groupName && (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ height: 50, background: "lightgray" }}
        >
          <Typography>{groupName}</Typography>
        </Stack>
      )}
      <Stack
        sx={{
          flex: 1,
          ...(groupName
            ? {
                padding: 1,
              }
            : {}),
        }}
        spacing={1}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default TodoList;
