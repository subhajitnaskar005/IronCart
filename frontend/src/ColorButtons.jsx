import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import IconButton from '@mui/material/IconButton';
import IconButtonWithBadge from './IconButtonWithBadge';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="contained" style={{ backgroundColor: "yellow", opacity: ".80" }}>
        <IconButtonWithBadge />
      </Button>
      <Button variant="contained" style={{ backgroundColor: "yellow", opacity: ".80" }}>
        <FavoriteIcon/>
      </Button>
    </Stack>
  );
}
