import { CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useBookings } from "../../hooks/useBookings"

export const ManageView = (): React.ReactElement => {
    const { bookings } = useBookings()

    return (
        <TableContainer
            component={Paper}
            sx={{
                minWidth: '70vw',
                width: '70%',
                margin: "20px"
            }}>
            <Table sx={{ minWidth: '60vw' }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Property</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {bookings.length === 0 ? (
                        <TableRow>
                            <TableCell align="center" colSpan={6}>No Bookings</TableCell>
                        </TableRow>
                    ) : bookings.map(({ id, status, property, startDate, endDate, price }) => (
                        <TableRow key={id}>
                            <TableCell>{id}</TableCell>
                            <TableCell>{property?.name}</TableCell>
                            <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={property?.img}
                                    alt={property?.name}
                                    sx={{ width: '128px', height: '128px' }}
                                />
                            </TableCell>
                            <TableCell>{property?.description}</TableCell>
                            <TableCell align="center">{price}</TableCell>
                            <TableCell align="center">{status}</TableCell>
                            <TableCell align="center">Update - Delete</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}