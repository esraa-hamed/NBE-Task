import React, {useState} from 'react';
import {
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

function CheckBox(): React.JSX.Element {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggleCheckbox = () => {
        setIsChecked(!isChecked);
    }
    return(
        <TouchableOpacity onPress={handleToggleCheckbox}>
            <FontistoIcon
                name={isChecked ? 'checkbox-active' : 'checkbox-passive'}
                style={isChecked ? styles.checkboxItemActive : styles.checkboxItem}
            >
            </FontistoIcon>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkboxItem: {
    color: 'white',
    fontSize: 15
    },
    checkboxItemActive : {
    color: '#FFA07A',
    fontSize: 15
    },
})

export default CheckBox;