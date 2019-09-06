// reusable form component goes here
// should be generic, with no code related to one specific type of form
// see the REUSABLE COMPONENT section for details
import React from 'react';  

class Form extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          values: this.props.initialValues ? this.props.initialValues  : {},
          touched: {},
          isSubmitting: false,
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }
    
      handleChange(e){
        this.setState(state => {
            return {
                values: {
                    ...state.values,
                    [e.name]:  e.value,
                  },
            }
        })
      }
    
      handleBlur(e) {
        this.setState(state => {
          return {
              touched: {
            ...state.touched,
            [e.name]: true,
          },
        }
        })
      }
    
       handleSubmit(event) {
        event.preventDefault();
        const { onSubmit } = this.props
        const { values } = this.state
    
        this.setSubmitting(true)
    
        try {
            onSubmit(values)
            this.setState({values:this.props.initialValues});
        } catch (err) {
          console.error('[Form::handleSubmit] ERROR:', err)
        } finally {
          this.setSubmitting(false)
        }
      }
    
      setSubmitting(isSubmitting) {
        this.setState({ isSubmitting })
      }
    
      render() {
        const { children } = this.props
        const { values } = this.state
    
        return children({
          values,
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange,
          handleBlur: this.handleBlur,
        })
    }
}

export default Form;