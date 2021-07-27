import { ButtonGroup, Grid, InputAdornment, makeStyles, Button as MuiButton } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import Form from '../../layouts/Form'
import { Input, Select, Button} from "../../controls"
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { createApiEndpoint, ENDPOINTS  } from '../../api'

const pMethods = [
    {id:'none', title: 'Select'},
    {id:'Cash', title: 'Cash'},
    {id:'Card', title: 'Card'},
]



const useStyles = makeStyles(theme => ({
    adornmentText : {
        '& .MuiTypography-root': {
            color: '#33bd38',
            fontWeight: 'bolder',
            fontSize: '1.5em'
        }
    },
    submitButtonGroup: {
        backgroundColor: '#33bd38',
        color: '#000',
        margin: theme.spacing(2),
        '& .MuiButton-label': {
            textTransform: 'none'
        },
        '&:hover': {
            backgroundColor: '#33bd70',
        }
    }
}))

export default function OrderForm(props) {

    const { values, errors, handleInputChange } = props
    const classes = useStyles()
    const [customerList, setCustomerList] = useState([])
    
    useEffect(() => {createApiEndpoint(ENDPOINTS.CUSTOMER).fetchAll()
        .then(res => {
            let customerList = res.data.map(item => ({
                id : item.customerId,
                title : item.name
            }))
            customerList = [{id: 0, title: "Select"}].concat(customerList)
            setCustomerList(customerList)
        })
        .catch(err => console.log(err))}, [])

    return(
        <Form>
            <Grid container>
                <Grid item xs={6} >
                    <Input 
                        disabled
                        label = "Order Number"
                        name = "orderNumber"
                        value = {values.orderNumber}
                        InputProps = {{
                            startAdornment : <InputAdornment
                            className={classes.adornmentText}
                            position="start">#</InputAdornment>
                        }}
                    />
                    <Select 
                        label = "Customer"
                        name = "customerId"
                        value = {values.customerId}
                        onChange = {handleInputChange}
                        options = {customerList}
                    />
                </Grid>
                <Grid item xs={6} >
                    <Input 
                        disabled
                        label = "Grand total"
                        name = "gTotal" 
                        value = {values.gTotal}
                        InputProps = {{
                            startAdornment : <InputAdornment
                                className={classes.adornmentText}
                                position="start">$</InputAdornment>
                        }}
                    />
                    <Select 
                        label = "Payment method"
                        name = "pMethods"
                        onChange = {handleInputChange}
                        value = {values.pMethon}
                        options = {pMethods}
                    />
                    <ButtonGroup className = {classes.submitButtonGroup}>
                        <MuiButton 
                            size="large"
                            startIcon={<RestaurantIcon />}
                            type="submit">Submit</MuiButton>
                        <MuiButton 
                            size="small"
                            startIcon={<ReplayIcon />}></MuiButton>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button size="large" startIcon={<RestaurantMenuIcon />}>Orders</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Form>
    )
}