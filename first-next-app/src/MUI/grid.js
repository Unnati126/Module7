import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CustomCard from './MUICard';
// layout cards in a grid
export default function BasicGrid() {
// Outermost Grid is a container
return (
<Grid container spacing={2} my={2}>
{/* Inner Grids (columns) are items */}
<Grid item xs={4}> {/* use 4/12 columns on xs screens up */}
<CustomCard title="First Column">
First column is wider
</CustomCard>
</Grid>
<Grid item xs={2}>middle item</Grid>
<Grid item xs={2}>middle item</Grid>
<Grid item xs={4}>
<CustomCard title="Last Column">
Last column is wider
</CustomCard>
</Grid>
</Grid>
); // 4 + 2 + 2 + 4 = 12, so grid will be 4 columns on one row
}