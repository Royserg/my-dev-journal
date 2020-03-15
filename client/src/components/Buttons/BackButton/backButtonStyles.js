import { drawerWidth, transition, whiteColor, blackColor, boxShadow } from 'assets/jss/general'

const backButtonStyles = theme => ({
  button: {
    position: 'fixed',
    top: '40px',
    left: `${drawerWidth + 100}px`,
    ...boxShadow,
    ...transition,
    '&:hover': {
      background: blackColor[0],
      color: whiteColor
    }
  }
})

export default backButtonStyles