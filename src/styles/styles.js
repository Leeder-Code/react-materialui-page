import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: '40px 0',
    },
    icons: {
        marginTop: '20px',
    },
    logo:{
        width: '40px',
        height: '40px',
    },
    cardGrid:{
        padding: '20px 0',
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia:{
        paddingTop: '56.25%',
    },
    cardContent:{
        flexGrow: 1,
    },
    footer:{
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}))

export default useStyles;