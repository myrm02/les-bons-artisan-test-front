import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Button, ListItemIcon } from '@mui/material';
import { green, grey, red } from '@mui/material/colors';
import { Link } from 'react-router-dom';

export default function ProductList(props) {

    const deleteProduct = (id) => {

        fetch(`http://localhost:3000/products/${id}`, {
        
            method: "DELETE",

        }).then((response) => {

            console.log("Deletion DELETE response", response.data);

        })
        
    }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {
        props.products.map((product) => {
            return (
                <>
                    <ListItem
                        key={product._id}
                    >
                        <ListItemText primary={`${product.name}`} />
                        <ListItemText primary={`${product.type} - ${product.price} €`} />
                        <ListItemText primary={product.warranty_years === null || product.warranty_years === 0 ? `Aucune garantie` : `Garantie de ${product.warranty_years} ans`} />
                        <ListItemIcon style={{ gap: '5px'}}>
                            <Link to={`detail/${product._id}`}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size='medium'
                                style={{backgroundColor: grey[500]}}
                            >
                                <img width="34" height="34" src="https://img.icons8.com/sf-black/34/FFFFFF/visible.png" alt="visible"/>
                            </Button>
                            </Link>
                            <Link to={`update/${product._id}`}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size='medium'
                                style={{backgroundColor: green[300]}}
                            >
                                <img width="34" height="34" src="https://img.icons8.com/sf-black-filled/64/FFFFFF/edit.png" alt="edit"/>
                            </Button>
                            </Link>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size='medium'
                                style={{backgroundColor: red[300]}}
                                onClick={() => deleteProduct(product._id)}
                            >
                                <img width="34" height="34" src="https://img.icons8.com/sf-black-filled/34/FFFFFF/filled-trash.png" alt="filled-trash"/>
                            </Button>
                        </ListItemIcon>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </>
            )
        })
      }
    </List>
  );
}