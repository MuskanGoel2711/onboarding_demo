import React from 'react';
import {FilledTextField} from 'rn-material-ui-textfield';

export default class RegularInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('=======>', this.props.forwardedRef);

    return (
      <FilledTextField
        label={this.props.placeholder}
        labelFontSize={15}
        tintColor={this.props.tintColor}
        inputContainerStyle={this.props.input}
        onSubmitEditing={this.props.onSubmitEditing}
        containerStyle={this.props.containerStyle}
        onChangeText={this.props.onChangeText}
        ref={this.props.forwardedRef}
        disabledLineWidth={0}
        contentInset={this.props.contentInset}
        labelOffset={this.props.labelOffset}
        titleTextStyle={{
          color: 'black',
        }}
        // inputProps={this.props.inputProps}
        secureTextEntry={this.props.secureTextEntry}
        // onFocus={this.props.onFocus}
        // onBlur={this.props.onBlur}
      />
    );
  }
}

// export default CustomInput = React.forwardRef((props, ref) => {
// //   console.log('=======>', ref);
//   return <RegularInput {...props} forwardedRef={ref} />;
// });

// export default RegularInput;
