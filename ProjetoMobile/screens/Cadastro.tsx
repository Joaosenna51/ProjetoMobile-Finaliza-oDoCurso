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

export default function Cadastro({ anavigation }) {


    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [nomecompleto, setNomecompleto] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [cpf, setCPF] = React.useState("");
    const [foto, setFoto] = React.useState("");



    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastrar Usuário</Text>


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

            <TextInput placeholder="nome completo"
                style={styles.txtnomecompleto}
                value={nomecompleto}
                onChangeText={(value)=>setNomecompleto(value)}
                
                />

            <TextInput placeholder="E-mail"
                style={styles.txtemail}
                value={email}
                onChangeText={(value)=>setEmail(value)}
                
                />


                 <TextInput placeholder="Insira on CPF"
                style={styles.txtcpf} 
                value={cpf}
                onChangeText={(value)=>setCPF(value)}
                />

            <TextInput placeholder="Insira Uma Imagem"
                style={styles.txtfoto}                
                value={foto}
                onChangeText={(value)=>setFoto(value)}
                />






<TouchableOpacity style={styles.btnlogin} onPress={()=>
                            
                            
                            {
                                us = usuario;
                                sh = senha;
                                nc = nomecompleto;
                                em = email;
                                cp = cpf;
                                ft = foto;
                                efetuarCadastro();
                                setTimeout(()=>{
                                    navigation.navigate("Login");
                                },3000);
                                
                            }
                            
                            } >


                            <Text style={styles.txtbtnlogin}>Cadastrar</Text>
                        </TouchableOpacity>



        </View>


    )
}
function efetuarCadastro() {

    if (us.trim() == "" || sh.trim() == "" || nc.trim() == "" || em.trim() == "" || cp.trim()== "" || ft.trim() =="" ) {
        return Alert.alert("Atenção", "Você deve preencher o usuário e a senha");
    }

    fetch("http://10.26.49.36:5000/usuarios/cadastrar", {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nomeusuario: us,
            senha: sh,
            nomecompleto: nc,
            email: em,
            cpf : cp,
            foto : ft

        })
    }).then((response) => response.json())
        .then((dados) => {
            console.log(`Tela Login -> ${dados}`);
            alert("Cadastrado com sucesso!");
        })
        .catch((erro) => console.error(erro));

}
