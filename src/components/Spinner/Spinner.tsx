import classes from './spinner.module.css'

const Spinner = () => {
  return (
    <div className={classes.loader} role="status" aria-busy="true"></div>
  )
}

export default Spinner