import * as React from 'react';


import { View, Text, Button, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../css/Styles';


let us = "";
let sh = "";
let nc = "";
let em = "";
let cp = "";
let ft = "";

let idusuario=0;

export default function AtualizarSenha({ navigation }) {


    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");
    



    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atualizar Senha</Text>


            <TextInput placeholder="seu nome de usuário"
                style={styles.txtlogin} 
                value={usuario}
                onChangeText={(value)=>setUsuario(value)}
                />

            <TextInput placeholder="Senha"
                secureTextEntry style={styles.txtsenha}
                value={senha}
                onChangeText={(value)=>setSenha(value)}
                />        

                






<TouchableOpacity style={styles.btnlogin} onPress={()=>
                            
                            
                            {
                                us = usuario;
                                sh = senha;
                                atualizarCadastro();
                                setTimeout(()=>{
                                    navigation.navigate("AtualizarSenha");
                                },3000);
                                
                            }
                            
                            } >


                            <Text style={styles.txtbtnlogin}>Atualizar Senha</Text>
                        </TouchableOpacity>



        </View>


    )
}
function atualizarCadastro() {

    if (us.trim() == ""|| sh.trim() == "" ) {
        return Alert.alert("Atenção", "Você deve preencher o usuário e a senha");
    }

    fetch(`http://10.26.49.36:5000/usuarios/alterarsenha/${us}`, {
        method: "PUT",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            senha: sh,

        })
    }).then((response) => response.json())
        .then((dados) => {
            console.log(`Tela Login -> ${dados}`);
            alert("Senha alterada com sucesso!");
        })
        .catch((erro) => console.error(erro));

}
