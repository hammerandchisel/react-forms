import React, {PropTypes} from 'react';
import FieldWrapper from './common/FieldWrapper';
import FieldMixin from './common/FieldMixin';

const TextInput = React.createClass({
  mixins: [FieldMixin],

  propTypes: {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    validator: PropTypes.func,
    value: PropTypes.string
  },

  getDefaultProps() {
    return {
      placeholder: '',
      value: ''
    };
  },

  componentWillMount() {
    const {value} = this.props;
    this.initField({hasDefaultValue: value.length != 0});
  },

  onChange(e) {
    this.setField({value: e.target.value});
  },

  render() {
    const {required, placeholder, label} = this.props;
    const field = this.getField();

    return (
      <FieldWrapper error={field.error} required={required} label={label}>
        <input type="text"
               value={field.value}
               placeholder={placeholder}
               onChange={this.onChange}
               onBlur={this.setHasBeenTouched}
               className="form-text-input" />
      </FieldWrapper>
    );
  }
});

export default TextInput;