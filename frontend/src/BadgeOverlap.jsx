import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

import { WhistlistContext } from "./WhistListContext"
import { useContext, useEffect, useState } from 'react';


export default function BadgeOverlap({ type, value}) {


  let { checkoutCartCount} = useContext(WhistlistContext)
    
      
  // setIconType(false)
  return (
    <>
      <Stack spacing={3} direction="row">
        {type == "whistlist" ? <Badge color="secondary" badgeContent={0}>
          {value}
        </Badge> : type == "checkout" ? <Badge color="secondary" badgeContent={checkoutCartCount}>
          {value}
        </Badge>:""}
      </Stack>
    </>

  );
}

function Rectangle() {
  return (
    <Box
      component="span"
      sx={{ bgcolor: 'primary.main', width: shapeSize, height: shapeSize }}
    />
  );
}

function Circle() {
  return (
    <Box
      component="span"
      sx={{
        bgcolor: 'primary.main',
        width: shapeSize,
        height: shapeSize,
        borderRadius: '50%',
      }}
    />
  );
}
