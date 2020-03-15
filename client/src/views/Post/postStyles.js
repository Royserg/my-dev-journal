import { boxShadow, blackColor, whiteColor } from 'assets/jss/general'



const postStyles = theme => ({
  markdown: {
    fontSize: '17px',
    color: blackColor[1],
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    width: '55%',
    '& code': {
      padding: '.1em',
      background: blackColor[1],
      color: whiteColor,
      fontSize: '1em',
      whiteSpace: 'pre',
      borderRadius: '3px',
    },
    '& p, h1, h2': {
      display: 'block',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: '0px',
      marginInlineEnd: '0px',
    },
    '& h1, h2': {
      fontSize: '2em',
      margin: '.67em 0',
      marginBlockStart: '0.67em',
      marginBlockEnd: '0.67em',
      fontWeight: 'bold',
    },
    '& h2': {
      fontSize: '1.5em',
      marginBlockStart: '0.83em',
      marginBlockEnd: '0.83em',
    },
    '& ul': {
      display: 'block',
      listStyleType: 'disc',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      paddingInlineStart: '40px',
    },
    '& pre': {
      fontFamily: 'source-code-pro, monospace, Courier New',
      width: '95%',
      marginLeft: '0.5em',
      marginBottom: '1em',
      borderRadius: '5px',
      border: '1px solid #ccc',
      overflow: 'auto',
      whiteSpace: 'pre',
      lineHeight: '20px',
      ...boxShadow,
      '& code': {
        display: 'block',
        overflowX: 'auto',
        padding: '1em',
        background: '#fefefe',
        color: blackColor[1],
        fontSize: '1em',
        whiteSpace: 'pre'
      }
    },
  }
})

export default postStyles