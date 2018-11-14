import React from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { AppContext } from '../context';

export default class EmailModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: this.props.email };
      }
    
      render() {
        return (
            <AppContext.Consumer>
              {context => {
                return (
                    <View style={{margin: 'auto', textAlign: 'center'}}>
                        <TextInput
                            style={{height: 40, width: 'auto', textAlign: 'center', marginTop: 30, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(email) => this.setState({email})}
                            clearTextOnFocus={true}
                            value={this.state.email}
                        />
                        <TouchableOpacity 
                            style={{borderColor: 'black', borderWidth: 2, backgroundColor: '#DDDDDD', padding: 10, margin: 10}}
                            title="Update Email" 
                            onPress={() => context.updateEmail(this.state.email)}
                        >
                            <Text style={{textAlign: 'center'}}>Update Email</Text>
                        </TouchableOpacity>

                        <Text>Current Context Email: {context.currentUser.email}</Text>
                    </View>
                );
              }}
            </AppContext.Consumer>
          );
      }
}