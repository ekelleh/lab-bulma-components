import React from 'react';


class FormField extends React.Component {
  render() {

    const label = this.props.label
    const type = this.props.type
    const placeholder = this.props.placeholder

    return (
      <React.Fragment>
        <div className="field">
          <label className="label"> {label} </label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default FormField;