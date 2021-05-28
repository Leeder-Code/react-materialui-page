import React from 'react';
import {AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar, Typography} from '@material-ui/core'
import {ReactComponent as Logo} from './img/logo.svg'
import useStyles from './styles/styles'

const App = () => {
    const classes = useStyles();
    let cards = [1,2,3,4,5,6,7,8,9]
    return ( 
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" align="center">
                        Minecraft Server
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Best Minecraft Server
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus recusandae expedita, aut, cumque consequatur commodi non, consectetur laudantium delectus sunt odio distinctio quae neque omnis quasi magni? Ex, voluptatum dolores.
                        </Typography>
                        <div className={classes.icons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Check!
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Oh..
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4} justify="center" >
                        {cards.map((i) => (<Grid key={i} item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                className={classes.cardMedia}
                                image="https://seeklogo.com/images/M/minecraft-logo-5EAD3A1535-seeklogo.com.png"
                                title="Minecraft"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Minecraft
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eaque aspernatur sequi atque!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}                      
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography varaint="subtitle1" align="center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                </Typography>
            </footer>
        </>
     );
}
 
export default App;