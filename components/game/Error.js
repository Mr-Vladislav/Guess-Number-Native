import { View, Text, StyleSheet, Modal, Button} from "react-native"

export default function Error({shown,title, text, buttonText, ...props}){
    return <Modal visible={shown}>
        <View style={styles.modalContainer}>
            <Text style={styles.errorTitle}>{title}</Text>
            <Text style={styles.errorText}>{text}</Text>
            <Button title={buttonText} {...props}/>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 200,
        width:'90%',
        marginHorizontal:'5%',
        textAlign: 'right'
    },

    errorTitle: {
        fontSize: 18
    }
})