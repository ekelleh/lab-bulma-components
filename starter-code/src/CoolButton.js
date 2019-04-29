import React from 'react';

class CoolButton extends React.Component {
  render() {

    const classNameContent = this.props.className
    const isPrimary = this.props.isPrimary;
    const isSuccess = this.props.isSuccess;
    const isDanger = this.props.isDanger;
    const isSmall = this.props.isSmall;
    const classes = ['button']
    const buttonText = this.props.children;

    if (typeof isPrimary !== 'undefined') {
      classes.push('is-primary')
    }

    if (typeof isSuccess !== 'undefined') {
      classes.push('is-success')
    }

    if (typeof isDanger !== 'undefined') {
      classes.push('is-danger')
    }

    if (typeof isSmall !== 'undefined') {
      classes.push('is-small')
    }

    if (typeof classNameContent !== 'undefined') {
      classes.push(classNameContent)
    }



    return (
      <React.Fragment>

        <button className={classes.join(' ')}>{buttonText}</button>

      </React.Fragment>
    )
  }
}


export default CoolButton; 