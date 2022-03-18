import * as React from 'react';

import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { styles } from '../css/Styles';

export default function Home({navigation,route}){ 

    const{idusuario} = route.params;
    console.log(`Tela home -> ${idusuario}`);


    const[listaProdutos,setListaProduto]=React.useState([
        {
            foto1:"",
            nomeproduto:"",
            preco:""
        }
    ]);
    
    React.useEffect(()=>{
        fetch("http://10.26.49.36:5000/produtos/listar")
        .then((response)=>response.json())
        .then((dados)=>{
            setListaProduto(dados.retorno);
            console.log(dados.retorno);
        })
        .catch((erro)=>console.error(erro));


    },
    []);


    return(
        <View style={styles.container}>
            
            <View style={styles.superior}>
                <Text style={styles.txtsuperior}>App Comercial</Text>
            </View>
            
            <Image source={require("../assets/cafe2.jpg")} 
            style={{width:"100%",height:200,resizeMode:"cover", marginTop:-420}}/>

            <ScrollView horizontal={false} style={styles.scrollviewhome}>

                <View style={styles.listaprodutos}>

                {


                    listaProdutos.map((itens,ix)=>(
                        
                        <View key={ix} style={styles.itemproduto}>
                            
                            <Image source={{uri:`${itens.foto1}`}} style={styles.imgproduto}/>
                                            
                            <Text style={styles.nomeproduto}>{itens.nomeproduto}</Text>
                            
                            <Text style={styles.preco}>R$ {itens.preco}</Text>

                            <TouchableOpacity style={styles.btncomprar} 
                                onPress={()=>{navigation.navigate("Detalhe",{dados:itens,idusuario:idusuario})}}
                            >
                                <Text style={styles.txtbtncomprar}>Comprar</Text>
                            </TouchableOpacity>
                        </View>
                    ))

                }
                </View>


            </ScrollView>


        </View>
    )
}